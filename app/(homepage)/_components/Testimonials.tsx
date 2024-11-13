'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeaderTitle from '@/components/headerTitle'


export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-20">
                <HeaderTitle title='Patient Testimonial' />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="md:col-span-2 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative h-96">
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                                    <p className="text-sm opacity-75">
                                        বয়সঃ {testimonials[currentIndex].age} বছর, {testimonials[currentIndex].location}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <blockquote className="relative">
                                    <QuoteIcon className="absolute top-0 left-0 text-primary/20 w-12 h-12 -z-10" />
                                    <p className="text-gray-700 text-lg leading-relaxed mt-2 z-10 relative line-clamp-2">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                </blockquote>
                                <div className="mt-4 flex justify-between items-center">
                                    <Button variant="outline" className="text-primary hover:bg-primary hover:text-white transition-colors">
                                        আরও পড়ুন
                                    </Button>
                                    <p className="text-sm text-gray-500">প্রকাশিত: {testimonials[currentIndex].date}</p>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    {/* Side Testimonials */}
                    <div className="space-y-4 flex flex-col justify-between items-start w-full">

                        {testimonials.map((testimonial, index) => (
                            index !== currentIndex && (
                                <Card key={testimonial.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow w-full" onClick={() => setCurrentIndex(index)}>
                                    <CardContent className="p-4 flex items-center space-x-4">
                                        <div className="relative w-16 h-16 flex-shrink-0">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                            <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                    </CardContent>

                                </Card>
                            )
                        ))}
                        <div className="mt-8 flex justify-center space-x-4 w-full">
                            <Button variant="outline" onClick={prevTestimonial} aria-label="Previous testimonial">
                                <ChevronLeftIcon className="w-16 h-16" />
                            </Button>
                            <Button variant="outline" onClick={nextTestimonial} aria-label="Next testimonial">
                                <ChevronRightIcon className="w-16 h-16" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const testimonials = [
    {
        id: 1,
        name: 'সাবরিনা সাখাওয়াৎ',
        age: 30,
        location: 'ঢাকা',
        image: 'https://images.pexels.com/photos/3259628/pexels-photo-3259628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: '৩০ বছর বয়সী, সাবরিনা সাখাওয়াৎ, ঢাকার বাসিন্দা। পূর্ববর্তী গর্ভপাত (Abortion) ও ডিএন্ডসি (Dilation and Curettage) এর পর থেকে মাসিক অনিয়মিত ছিল। আসগর আলী হাসপাতালে চিকিৎসা নিয়ে এখন সুস্থ আছি। এখানকার চিকিৎসা সেবায় আমি খুবই সন্তুষ্ট।',
        rating: 5,
        date: '১৫ মে, ২০২৩',
    },
    {
        id: 2,
        name: 'রাফি আহমেদ',
        age: 45,
        location: 'চট্টগ্রাম',
        image: 'https://images.pexels.com/photos/20860582/pexels-photo-20860582/free-photo-of-physiotherapist-and-patient-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'আমি দীর্ঘদিন ধরে পেপটিক আলসারে ভুগছিলাম। আসগর আলী হাসপাতালের বিশেষজ্ঞ ডাক্তারদের পরামর্শ ও চিকিৎসায় আমি এখন সম্পূর্ণ সুস্থ। তাদের সেবার মান ও যত্ন অতুলনীয়।',
        rating: 5,
        date: '২০ জুন, ২০২৩',
    },
    {
        id: 3,
        name: 'নাজমা বেগম',
        age: 55,
        location: 'সিলেট',
        image: 'https://images.pexels.com/photos/12917374/pexels-photo-12917374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'হৃদরোগের জটিল অপারেশন করাতে আসগর আলী হাসপাতালে এসেছিলাম। এখানকার অত্যাধুনিক যন্ত্রপাতি ও দক্ষ চিকিৎসকদের কারণে আমার অপারেশন সফল হয়েছে। আমি তাদের কাছে কৃতজ্ঞ।',
        rating: 5,
        date: '৫ জুলাই, ২০২৩',
    },
    {
        id: 4,
        name: 'করিম উদ্দিন',
        age: 38,
        location: 'রাজশাহী',
        image: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'দুর্ঘটনায় আহত হয়ে জরুরি বিভাগে ভর্তি হয়েছিলাম। আসগর আলী হাসপাতালের দ্রুত ও দক্ষ সেবা আমাকে নতুন জীবন দিয়েছে। এখানকার চিকিৎসকদের পেশাদারিত্ব সত্যিই প্রশংসনীয়।',
        rating: 4,
        date: '১০ আগস্ট, ২০২৩',
    },
    {
        id: 5,
        name: 'ফারহানা হক',
        age: 28,
        location: 'খুলনা',
        image: 'https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'প্রসূতি ও স্ত্রীরোগ বিভাগে আমার অভিজ্ঞতা ছিল চমৎকার। ডাক্তার ও নার্সদের যত্ন ও সহানুভূতিশীল আচরণ আমাকে মুগ্ধ করেছে। আমার সন্তান জন্মের সময় তারা যে সহযোগিতা করেছেন তা অবিস্মরণীয়।',
        rating: 5,
        date: '২৫ সেপ্টেম্বর, ২০২৩',
    },
]
