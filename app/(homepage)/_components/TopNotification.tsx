"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function TopNotification() {
    const [visible, setVisible] = useState(true);
    const handleClose = () => {
        setVisible(false);
    };
    const stickyVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 }
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.section
                    variants={stickyVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary via-blue-700 to-primary px-4 py-2 sticky top-0 z-50 shadow-xl"
                >
                    <div className="relative pr-6">
                        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-3 lg:gap-5 text-center">
                            {/* Address - Hidden on mobile */}
                            <p className="hidden lg:flex gap-2 items-center text-sm font-medium text-white lg:text-base">
                                <MapPin size={20} /> 111/1/A Distillery Road, Gandaria, Dhaka 1204, Bangladesh
                            </p>
                            {/* Phone Number and Email */}
                            <div className="flex items-center gap-2 text-sm lg:text-lg font-medium text-white">
                                <span className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1">
                                    <Image
                                        src="/helpline.png"
                                        height={130}
                                        width={130}
                                        alt="helpline logo"
                                    />
                                </span>
                                or
                                <span className="hidden md:flex rounded-lg bg-white/10 px-3 py-1">+8809666710602</span>
                                or
                                <span className="rounded-lg bg-white/10 px-3 py-1">info@asgaralihospital.com</span>
                            </div>
                            {/* Book Now - Hidden on mobile */}
                            <a href="#" className="hidden lg:inline text-sm font-medium text-white underline lg:text-base">
                                Book Now →
                            </a>
                        </div>
                        <button
                            onClick={handleClose}
                            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center text-white/50 duration-200 hover:text-white"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.14288 1.14285L8.00003 8M8.00003 8L14.8572 14.8571M8.00003 8L14.8572 1.14285M8.00003 8L1.14288 14.8571"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
