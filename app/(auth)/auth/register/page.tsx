"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOff, File, Lock, Mail, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import HeaderTitle from '@/components/headerTitle'
import { Switch } from "@/components/ui/switch"
import { Phone, ChevronDown } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Register = () => {
    const [open, setIsOpen] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [phone, setPhone] = useState("")
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
                            <div className='space-y-2'>
                                <HeaderTitle title='Register' />
                                <p className='font-medium text-gray-400 text-center'>Register to get started using it.</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <Button type='button' onClick={() => signIn('google')} className="w-full bg-white text-primary border py-6 px-4 font-bold rounded-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Google
                                </Button>
                                <Button type="submit" className="w-full bg-white text-primary border py-6 px-4 font-bold rounded-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                    </svg>
                                    Facebook
                                </Button>
                            </div>
                            <form className='mt-6 space-y-4'>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-end space-x-2 sm:space-x-4 whitespace-nowrap">
                                        <Label htmlFor="contact-type" className={`text-sm font-medium ${!isEmail ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>Phone</Label>
                                        <Switch
                                            id="contact-type"
                                            checked={isEmail}
                                            onCheckedChange={setIsEmail}
                                            className="data-[state=checked]:bg-blue-500"
                                        />
                                        <Label htmlFor="contact-type" className={`text-sm font-medium ${isEmail ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>Email</Label>
                                    </div>
                                    <div className='flex w-full'>
                                        <div className="relative flex-grow w-full">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                {isEmail ? (
                                                    <></>
                                                ) : (
                                                    <Phone className="h-5 w-5 text-blue-500" />
                                                )}
                                            </div>
                                            {isEmail ? (
                                                <div className='relative'>
                                                    <Mail size={20} className='text-blue-500 absolute left-4 top-1/2 -translate-y-1/2' />
                                                    <Input type="text" placeholder="Enter Your Email" className="border px-12 py-6 rounded-lg text-blue-700" />
                                                    <button className='absolute right-4 top-1/2 -translate-y-1/2'></button>
                                                </div>
                                            ) : (
                                                <PhoneInput
                                                    country="bd"
                                                    value={phone}
                                                    onChange={setPhone}
                                                    inputProps={{
                                                        name: 'phone',
                                                        required: true,
                                                        className: 'pl-12 pr-4 py-3 w-full rounded-md border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200',
                                                        'aria-label': 'Phone number input'
                                                    }}
                                                    containerClass="w-full"
                                                    buttonClass="!absolute !left-3 !top-1/2 !-translate-y-1/2 !border-none !bg-transparent"
                                                    dropdownClass="!w-64 md:!w-72 lg:!w-96 !left-5 !top-full !mt-1 !rounded-md !shadow-lg !border-gray-200 dark:!border-gray-700 !bg-white dark:!bg-gray-800"
                                                />
                                            )}
                                        </div>

                                    </div>

                                </div>
                                <div className='relative'>
                                    <User size={20} className='text-blue-500 absolute left-4 top-1/2 -translate-y-1/2' />
                                    <Input type="text" placeholder="Enter Your Name" className="border px-12 py-6 rounded-lg text-blue-700" />
                                    <button className='absolute right-4 top-1/2 -translate-y-1/2'></button>
                                </div>
                                {
                                    !isEmail && <div className='relative'>
                                        <User size={20} className='text-blue-500 absolute left-4 top-1/2 -translate-y-1/2' />
                                        <Input type="text" placeholder="Enter Your Email" className="border px-12 py-6 rounded-lg text-blue-700" />
                                        <button className='absolute right-4 top-1/2 -translate-y-1/2'></button>
                                    </div>

                                }

                                {/* TODO */}
                                {/* <div className='flex gap-2 items-center border px-4 py-1 rounded-lg'>
                                    <File className='text-blue-500' />
                                    <Input type="file" placeholder="Enter Your Email" className="border-none shadow-none" />
                                </div> */}
                                <div className='relative'>
                                    <Lock size={20} className='text-blue-500 absolute left-4 top-1/2 -translate-y-1/2' />
                                    <Input type={open ? "text" : "password"} placeholder="Enter Your Password" className="border px-12 py-6 rounded-lg text-blue-700" />
                                    <button className='absolute right-4 top-1/2 -translate-y-1/2' onClick={() => setIsOpen(!open)} type='button'>{open ? <EyeIcon size={20} className='text-blue-500' /> : <EyeOff size={20} className='text-blue-500' />}</button>
                                </div>


                                <Button type="submit" className="mt-5 w-full py-6 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200">Sign up using {isEmail ? 'email' : 'phone'}</Button>
                            </form>
                        </div>
                        <div className='px-8 py-4 bg-blue-700 bg-opacity-100 flex justify-center rounded-b-xl'>
                            <p className='text-sm text-white'>
                                Already have an account? {" "}
                                <Link href={'/auth/login'} className='text-white hover:underline font-bold'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Register