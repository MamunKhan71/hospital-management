"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const DashboardPage = () => {
    const { data: session } = useSession()

    return (
        <div>
            {
                session ? <>
                    <h1>Welcome Back {session?.user?.name}</h1>
                    <p>{ }</p>
                    <Image height={20} width={20} className='size-20 rounded-full' src={session.user?.image as string} alt="" />
                    <button className='bg-black p-4 rounded-lg text-white' onClick={() => signOut({callbackUrl: '/'})}>Sign Out</button>

                </> : <>
                    <h1>You are not logged in</h1>
                    <button className='bg-black p-4 rounded-lg text-white' onClick={() => signIn('google')}>Sign In with Google</button>
                </>
            }
        </div>
    )
}

export default DashboardPage