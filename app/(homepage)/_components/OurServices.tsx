"use client"
import HeaderTitle from '@/components/headerTitle'
import React from 'react'
import { useState } from 'react'
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const Departments = () => {
    const [setSwiperRef] = useState(null);
    return (
        <div className='container mx-auto space-y-20'>
            <HeaderTitle title='Our Services' />
            <div >
                <Swiper
                    modules={[Virtual, Navigation, Pagination, Autoplay]}
                    onSwiper={setSwiperRef}
                    slidesPerView="auto"
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {ourServicesPackage.map((slideContent, index) => (
                        <SwiperSlide key={index} virtualIndex={index} className="h-full w-full">
                            <Card className="p-8 border rounded-lg space-y-5 h-full w-full bg-white flex flex-col items-center">
                                <CardTitle className='flex items-center justify-center text-primary flex-col gap-4'>
                                    <h1 className="font-bebas font-bold  text-xl">{slideContent.name}</h1>
                                </CardTitle>
                                <CardContent className='flex items-center justify-center flex-col gap-4'>
                                    <hr className="border-2 w-16 border-primary" />
                                    <div className="text-center  text-slate-400 w-full">
                                        <p className='w-full line-clamp-3 font-medium'>{slideContent.description}</p>
                                    </div>
                                </CardContent>

                            </Card>
                        </SwiperSlide>
                    ))}
                    <div className='flex mt-20 gap-6 items-center justify-center py-6'>
                        <button className="custom-prev border rounded-full bg-white size-16 flex items-center justify-center text-[#BD1F17] shadow-md hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M10.9718 18.941C11.2354 18.6773 11.3835 18.3197 11.3835 17.9468C11.3835 17.5739 11.2354 17.2163 10.9718 16.9526L4.01088 9.99161L10.9718 3.03068C11.228 2.76545 11.3697 2.41023 11.3665 2.04152C11.3633 1.6728 11.2154 1.3201 10.9547 1.05937C10.694 0.798637 10.3413 0.650745 9.97254 0.647541C9.60382 0.644337 9.2486 0.786079 8.98338 1.04224L1.02822 8.9974C0.764588 9.26111 0.616488 9.61873 0.616488 9.99161C0.616488 10.3645 0.764588 10.7221 1.02822 10.9858L8.98338 18.941C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.941Z" fill="#0A1425" />
                            </svg>
                        </button>
                        <button className="custom-next border rounded-full bg-white size-16 flex items-center justify-center text-[#BD1F17] shadow-md hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922Z" fill="#BD1F17" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>

        </div>
    )
}

export default Departments


const ourServicesPackage = [
    {
        "name": "Pharmacy",
        "description": "For your convenience, OPD pharmacy is open 24/7, located at 1st floor of th...",
        "link": "https://www.asgaralihospital.com/page/pharmacy"
    },
    {
        "name": "Medical Records",
        "description": "Medical Record describes the systematic documentation of a single patient's...",
        "link": "https://www.asgaralihospital.com/page/medical-records"
    },
    {
        "name": "Cafeteria",
        "description": "Cafeteria of Asgar Ali Hospital serves fresh and healthy food. The cafeteri...",
        "link": "https://www.asgaralihospital.com/page/cafeteria"
    },
    {
        "name": "ATM",
        "description": "We have ATM booths of different Banks beside the hospital building that mak...",
        "link": "https://www.asgaralihospital.com/page/atm"
    },
    {
        "name": "Vaccination Center",
        "description": "The Vaccination Center of Asgar Ali Hospital is providing its keen continuo...",
        "link": "https://www.asgaralihospital.com/page/vaccination-center"
    },
    {
        "name": "Ambulance Service",
        "description": "Asgar Ali Hospital provides round the clock Ambulance Service and we have C...",
        "link": "https://www.asgaralihospital.com/page/ambulance-service"
    },
    {
        "name": "ROP Clinic",
        "description": "Retinopathy of Prematurity (ROP) is a potentially blinding disease caused b...",
        "link": "https://www.asgaralihospital.com/page/rop-clinic"
    },

    {
        "name": "Blood Bank",
        "description": "Blood Bank of Asgar Ali Hospital caters to both in-patients and out-patient...",
        "link": "https://www.asgaralihospital.com/page/blood-bank"
    },
    {
        "name": "Optical Shop",
        "description": "Spectacle Shop is located at Level-3 of Asgar Ali Hospital building. This r...",
        "link": "https://www.asgaralihospital.com/page/optical-shop"
    },
    {
        "name": "Mortuary",
        "description": "Mortuary is an important integral part of every hospital as it deals with t...",
        "link": "https://www.asgaralihospital.com/page/mortuary"
    },
    {
        "name": "Car Parking",
        "description": "Asgar Ali Hospital provides convenient and secured car parking garage for p...",
        "link": "https://www.asgaralihospital.com/page/car-parking"
    },
    {
        "name": "Visiting Hours and Rules",
        "description": "Visiting Hours and Rules to visit the patient you need. lorem ipsum dolor, lorem ipsum dolor, lorem ipsum dolor,",
        "link": "https://www.asgaralihospital.com/page/visiting-hours-and-rules"
    },
    {
        "name": "Laundry Service",
        "description": "\"Clean & hygienic environment plays a great role in attracting the customer...",
        "link": "https://www.asgaralihospital.com/page/laundry-service"
    },
    {
        "name": "Gift Corner",
        "description": "Bring some cheer to a patient, friend or loved one with a purchase from our...",
        "link": "https://www.asgaralihospital.com/page/gift-corner"
    },
    {
        "name": "Day Care",
        "description": "Day-Care caters to the patients who do not require overnight stay in the Ho...",
        "link": "https://www.asgaralihospital.com/page/day-care"
    }

]