"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import HeaderTitle from '@/components/headerTitle';

interface VerifyEmailPageProps {
    error?: string;
    isLoading: boolean;
    verifyEmail: (code: string) => Promise<void>;
}

const VerifyEmailPage: React.FC<VerifyEmailPageProps> = ({ error, isLoading, verifyEmail }) => {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useRouter();

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        const verificationCode = code.join("");
        try {
            await verifyEmail(verificationCode);
            navigate.push('/')
            toast.success("Email Verified Successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            const lastFilledIndex = newCode.findIndex((digit) => digit === "");
            const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
            if (inputRefs.current[focusIndex]) {
                inputRefs.current[focusIndex]?.focus();
            }
        } else {
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };


    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    useEffect(() => {
        if (code.every(digit => digit !== '')) {
            handleVerify(new Event('submit') as any);
        }
    }, [code]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center mt-28 w-full'
        >
            <div className='w-full'>
                <div
                    className="relative max-w-lg mx-auto w-full border shadow-lg rounded-lg space-y-8 p-8"
                >
                    <div
                        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dz3kxnsxr/image/upload/v1727461049/clipboard-stethoscope_xo2uo1.jpg')] bg-cover opacity-5 rounded-xl"
                    >
                    </div>
                    <div className='space-y-2'>
                        <HeaderTitle title='Verify Email' />
                        <p className='font-medium text-gray-400 text-center'>Enter the 6-digit code sent to your email address.</p>
                    </div>
                    <form onSubmit={handleVerify} className='relative z-50'>
                        <div className="flex justify-between">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(e) => {
                                        inputRefs.current[index] = e; 
                                    }}
                                    type="text"
                                    maxLength={6}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="size-12 text-center font-bold border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                                />
                            ))}

                        </div>
                        {error && <p className="text-red-400 font-semibold text-xs mt-2 text-right">{error}</p>}

                        <motion.button
                            disabled={isLoading || code.some((digit) => !digit)}
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200"
                        >
                            {isLoading ? <Loader className="inline mr-2" /> : "Verify Email"}
                        </motion.button>
                    </form>
                </div>
            </div>


        </motion.div>
    );
};

export default VerifyEmailPage;
