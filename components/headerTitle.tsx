"use client"
import React from 'react'
import { motion } from 'framer-motion'
const HeaderTitle = ({ title }: { title: string }) => {
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <div>
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 py-2"
                variants={childVariants}
            >
                {title}
            </motion.h2>
        </div>
    )
}

export default HeaderTitle