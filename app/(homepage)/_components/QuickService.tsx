"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Ambulance, Microscope, Siren, Stethoscope } from 'lucide-react'
import HeaderTitle from '@/components/headerTitle';
const QuickService = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    return (
        <div>
            <motion.div
                className="container mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="rounded-xl space-y-10 md:space-y-20"
                >
                    <HeaderTitle title='Services' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            services.map((item, index) => (
                                <motion.div key={item.id} whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 0.3 }}>
                                    <Card className="flex items-center justify-center flex-col bg-transparent">
                                        <CardHeader className="text-center ">
                                            <CardDescription><item.icon size={40} className='text-blue-600' /></CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 text-xl">{item.name}</CardTitle>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default QuickService
interface Service {
    id: string,
    icon: LucideIcon,
    name: string,
    description: string,
}

const services: Service[] = [
    {
        id: "FD1",
        icon: Stethoscope,
        name: "Online Appointment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus exercitationem ullam!"
    },
    {
        id: "HS1",
        icon: Ambulance,
        name: "Ambulance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus exercitationem ullam!"
    },
    {
        id: "SP1",
        icon: Siren,
        name: "24/7 Emergency",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus exercitationem ullam!"
    },
    {
        id: "DS1",
        icon: Microscope,
        name: "Online Diagnostic Report",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus exercitationem ullam!"
    }

]