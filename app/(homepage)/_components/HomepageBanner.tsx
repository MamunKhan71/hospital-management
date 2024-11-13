import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const HomepageBanner = () => {
    return (
        <div className="h-full lg:h-[700px] bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/13697925/pexels-photo-13697925.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] w-full ">
            <div className='backdrop-blur-md bg-blue-400 bg-opacity-10 w-full h-full p-12 md:p-0'>
                <div className='container  mx-auto flex items-center h-full w-full justify-center'>
                    <div className='text-center text-white space-y-6'>
                        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Executive Health Check-up</h1>
                        <p className='max-w-md font-medium text-center mx-auto'>Health Check-up Packages
                            Are Designed To Promote Good
                            Health And Facilitate Early Detection
                            Of Health Problems.</p>

                        <a
                            href="#_"
                            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                        >
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                            <span className="relative z-20 flex items-center gap-2 text-sm">
                                <MoreHorizontal size={20} />
                                Learn More
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomepageBanner