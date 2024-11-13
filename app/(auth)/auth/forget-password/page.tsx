"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { File, Lock, Mail, Send, User } from 'lucide-react'
import { Input } from '@/components/ui/input'

import Link from 'next/link'
import HeaderTitle from '@/components/headerTitle'

const ForgetPassword = () => {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const handleChange = (index: number, value: string) => {
        const newCode = [...code]
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("")
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || ""
            }
            setCode(newCode)
            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "")
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5
            inputRefs.current[focusIndex].focus()
        } else {
            newCode[index] = value
            setCode(newCode)
            if (value && index < 5) {
                inputRefs.current[index + 1].focus()
            }
        }
    }
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus()
        }
    }
    const handleVerify = () => {
        console.log("Called");
    };

    useEffect(() => {
        if (code.every(digit => digit !== '')) {
            handleVerify();
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
                    className="relative max-w-lg mx-auto w-full border shadow-lg rounded-lg space-y-8"
                >
                    <div
                        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dz3kxnsxr/image/upload/v1727461049/clipboard-stethoscope_xo2uo1.jpg')] bg-cover opacity-5 rounded-xl"
                    >
                    </div>
                    <div className='relative z-10'>
                        <div className={`p-12 space-y-4`}>
                            <HeaderTitle title='Forgot Password' />
                            <p className='text-center text-slate-400 font-medium mb-6'>Enter your email address and we&apos;ll send you a link to reset your password.</p>
                            <form className='mt-6 space-y-4'>
                                <div className='relative'>
                                    <Mail size={20} className='text-blue-500 absolute left-4 top-1/2 -translate-y-1/2' />
                                    <Input type="email" placeholder="Enter Your Email" className="border px-12 py-6 rounded-lg text-blue-700" />
                                    <button className='absolute right-4 top-1/2 -translate-y-1/2'></button>
                                </div>
                            </form>
                        </div>
                        <Link href={'/auth/verify'}>
                            <button className='px-8 py-4 w-full hover:bg-blue-800 ease-linear duration-150 bg-blue-700 bg-opacity-100 flex justify-center rounded-b-xl'>
                                <p className='text-sm font-semibold text-white inline-flex gap-2 items-center'>
                                    <Send size={16} /> Send Password Reset Link
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ForgetPassword