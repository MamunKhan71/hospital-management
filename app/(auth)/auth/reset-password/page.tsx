"use client"
import React, { useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Loader, Lock, LockIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Input } from '@/components/ui/input'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import HeaderTitle from '@/components/headerTitle'
const ResetPasswordPage = () => {
    const { token } = useParams()
    // const { isLoading, resetPassword } = useAuthStore()
    const [password, setPassword] = useState("")
    const navigate = useRouter()
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleReset = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password Mismatch")
        }
        // await resetPassword(token, password)
        toast.success("Password Changed Succssfully!")
        navigate.push('/login')
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-lg mx-auto my-28 border w-full rounded-xl shadow-lg overflow-hidden'
        >
            <div className='p-8'>
                <div className='space-y-2'>
                    <HeaderTitle title='Reset password' />
                    <p className='font-medium text-gray-400 text-center'>Reset your password using it.</p>
                </div>
                <form onSubmit={handleReset} className='space-y-4 mt-4'>
                    <div className='flex gap-2 items-center border p-2 rounded-lg'>
                        <LockIcon className='text-blue-500' />
                        <Input type="password" placeholder="Password" className="border-none shadow-none text-blue-700" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className='flex gap-2 items-center border p-2 rounded-lg'>
                        <LockIcon className='text-blue-500' />
                        <Input type="password" placeholder="Confirm new password" className="border-none shadow-none text-blue-700" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='mt-4'
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type='submit'
                            className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900
      '
                        >
                            {false ? <Loader className='animate-spin mx-auto size-6' /> : "Set New Password"}
                        </motion.button>
                    </motion.div>
                </form>
            </div>
            <div className='px-8 py-4 bg-primary flex justify-center'>
                <p className='text-sm text-white'>
                    <Link href={'/auth/login'} className='hover:underline font-bold inline-flex justify-center items-center gap-1'><ArrowLeft size={16} /> Back to Login</Link>
                </p>
            </div>
        </motion.div>
    )
}

export default ResetPasswordPage