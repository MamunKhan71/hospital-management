"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

export function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="w-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-full md:absolute -z-10 top-0"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {headerImages.map((header, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image
                                            src={header.image}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }}
                                            alt="header-image"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

interface headerImage {
    image: string,
    href: string,
}
const headerImages: headerImage[] = [

    {
        image: "/header2.jpg",
        href: "#"
    },
    {
        image: "/header3.jpg",
        href: "#"
    },
    {
        image: "/header4.jpg",
        href: "#"
    },
]


