"use client"

import React, { HTMLAttributes, ReactNode } from 'react';
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "@/app/(homepage)/_components/Logo"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="flex items-center w-full mx-auto mt-2 justify-between px-4 rounded-lg backdrop-blur-xl">
            <Link href={"/"}>
                <Logo />
            </Link>
            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            <NavigationMenu
                className={cn(
                    "p-4 bg-transparent w-full md:flex md:items-center",
                    isMobileMenuOpen ? "block" : "hidden md:block"
                )}
            >
                <NavigationMenuList className="bg-transparent flex flex-col md:flex-row">
                    {navigationMenu.map((item) => (
                        <NavigationMenuItem key={item.title} className="bg-transparent">
                            {item.submenu ? (
                                <>
                                    <NavigationMenuTrigger className="bg-transparent">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-white backdrop-blur-2xl">
                                        <ul
                                            className={cn(
                                                "grid gap-3 p-6",
                                                item.title === "Departments" ? "grid-cols-2 w-full md:w-[950px]" : "grid-cols-1 md:grid-cols-2 w-full md:w-[950px]"
                                            )}
                                        >
                                            {item.submenu.map((subItem) => (
                                                <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                                                    <span className="line-clamp-1">{subItem.description}</span>
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} bg-transparent`}
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </Link>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden md:flex items-center gap-4">
                <Link
                    href="/register"
                    className="relative rounded px-5 py-2.5 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 text-white font-medium hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300"
                >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                    <span className="relative">Signup / Login</span>
                </Link>
            </div>
        </div>
    )
}

interface ListItemProps extends HTMLAttributes<HTMLAnchorElement> {
    title: string;
    children: ReactNode;
    href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="flex gap-2 items-center">
                            <div className="text-sm font-medium leading-none">{title}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }
)
ListItem.displayName = "ListItem"


type NavigationItem = {
    title: string;
    href: string;
    description: string;
    submenu?: NavigationItem[];
};


const navigationMenu: NavigationItem[] = [
    {
        "title": "Home",
        "href": "https://www.asgaralihospital.com",
        "description": "Welcome to Asgar Ali Hospital's official website."
    },
    {
        "title": "Consultant",
        "href": "https://www.asgaralihospital.com/page/consultant",
        "description": "Find & learn about our expert medical consultants."
    },
    {
        "title": "Departments",
        "href": "https://www.asgaralihospital.com/menu/departments",
        "description": "Explore our various medical departments & specialties.",
        "submenu": [
            {
                "title": "Accident & Emergency",
                "href": "https://www.asgaralihospital.com/page/accident-&-emergency",
                "description": "24/7 emergency care for critical medical situations.",
            },
            {
                "title": "Anaesthesiology",
                "href": "https://www.asgaralihospital.com/page/anaesthesiology",
                "description": "Expert care in anesthesia for surgical procedures."
            },
            {
                "title": "Cardiac Surgery",
                "href": "https://www.asgaralihospital.com/page/cardiac-surgery",
                "description": "Advanced surgical treatments for heart conditions."
            },
            {
                "title": "Cardiology",
                "href": "https://www.asgaralihospital.com/page/cardiology",
                "description": "Comprehensive care for heart & cardiovascular health."
            },
            {
                "title": "Child Development Center",
                "href": "https://www.asgaralihospital.com/page/child-development-center",
                "description": "Specialized care for children's growth & development."
            },
            {
                "title": "Critical Care",
                "href": "https://www.asgaralihospital.com/page/critical-care",
                "description": "Intensive care for patients with severe & life-threatening conditions."
            },
            {
                "title": "Dental & Maxillofacial Surgery",
                "href": "https://www.asgaralihospital.com/page/dental-&-maxillofacial-surgery",
                "description": "Specialized surgical care for dental & facial issues."
            },
            {
                "title": "Dermatology & Venereology",
                "href": "https://www.asgaralihospital.com/page/dermatology-&-venereology",
                "description": "Expert care for skin, hair, nail, & venereal diseases."
            },
            {
                "title": "Diabetology & Endocrinology",
                "href": "https://www.asgaralihospital.com/page/diabetology-&-endocrinology",
                "description": "Specialized care for diabetes & hormonal disorders."
            },
            {
                "title": "Dietetics & Nutrition",
                "href": "https://www.asgaralihospital.com/page/dietetics-&-nutrition",
                "description": "Expert guidance on diet & nutrition for better health."
            },
            {
                "title": "ENT, Head & Neck Surgery",
                "href": "https://www.asgaralihospital.com/page/ent-head-&-neck-surgery",
                "description": "Specialized care for ear, nose, throat, head, & neck issues."
            },
            {
                "title": "Gastro & Hepatology",
                "href": "https://www.asgaralihospital.com/page/gastroenterology-&-hepatology",
                "description": "Expert care for digestive system & liver diseases."
            },
            {
                "title": "General & Laparoscopic",
                "href": "https://www.asgaralihospital.com/page/general-&-laparoscopic-surgery",
                "description": "Advanced surgical care including minimally invasive procedures."
            },
            {
                "title": "Haematology",
                "href": "https://www.asgaralihospital.com/page/haematology",
                "description": "Specialized care for blood disorders & diseases."
            },
            {
                "title": "Internal Medicine",
                "href": "https://www.asgaralihospital.com/page/internal-medicine",
                "description": "Comprehensive care for adult diseases & conditions."
            },
            {
                "title": "Laboratory Medicine",
                "href": "https://www.asgaralihospital.com/page/laboratory-medicine",
                "description": "Advanced diagnostic & laboratory services."
            },
            {
                "title": "Neonatology",
                "href": "https://www.asgaralihospital.com/page/neonatology",
                "description": "Specialized care for newborns, especially premature or ill infants."
            },
            {
                "title": "Nephrology",
                "href": "https://www.asgaralihospital.com/page/nephrology",
                "description": "Expert care for kidney diseases & disorders."
            },
            {
                "title": "Neurology",
                "href": "https://www.asgaralihospital.com/page/neurology",
                "description": "Specialized care for disorders of the nervous system."
            },
            {
                "title": "Neurosurgery",
                "href": "https://www.asgaralihospital.com/page/neurosurgery",
                "description": "Advanced surgical treatments for brain & nervous system disorders."
            },
            {
                "title": "Obstetrics & Gynaecology",
                "href": "https://www.asgaralihospital.com/page/obstetrics-&-gynaecology",
                "description": "Comprehensive care for women's reproductive health & childbirth."
            },
            {
                "title": "Oncology",
                "href": "https://www.asgaralihospital.com/page/oncology",
                "description": "Specialized care & treatment for cancer patients."
            },
            {
                "title": "Ophthalmology",
                "href": "https://www.asgaralihospital.com/page/ophthalmology",
                "description": "Expert care for eye diseases & vision problems."
            },
            {
                "title": "Orthopaedics & Trauma",
                "href": "https://www.asgaralihospital.com/page/orthopaedics-&-trauma",
                "description": "Specialized care for bone, joint, & muscle disorders & injuries."
            },
            {
                "title": "Paediatric Surgery",
                "href": "https://www.asgaralihospital.com/page/paediatric-surgery",
                "description": "Specialized surgical care for infants, children, & adolescents."
            },
            {
                "title": "Paediatrics",
                "href": "https://www.asgaralihospital.com/page/paediatrics",
                "description": "Comprehensive medical care for infants, children, & adolescents."
            },
            {
                "title": "Pain Clinic",
                "href": "https://www.asgaralihospital.com/page/pain-clinic",
                "description": "Specialized care for managing chronic & acute pain."
            },
            {
                "title": "Physical Medicine & Rehab",
                "href": "https://www.asgaralihospital.com/page/physical-medicine-&-rehabilitation",
                "description": "Comprehensive care to restore function & quality of life."
            },
            {
                "title": "Plastic & Cosmetic Surgery",
                "href": "https://www.asgaralihospital.com/page/plastic-reconstructive-&-cosmetic-surgery",
                "description": "Advanced surgical procedures for reconstruction & aesthetics."
            },
            {
                "title": "Psychiatry",
                "href": "https://www.asgaralihospital.com/page/psychiatry",
                "description": "Expert care for mental health disorders & emotional well-being."
            },
            {
                "title": "Radiology & Imaging",
                "href": "https://www.asgaralihospital.com/page/radiology-&-imaging",
                "description": "Advanced diagnostic imaging services for accurate diagnoses."
            },
            {
                "title": "Respiratory Medicine",
                "href": "https://www.asgaralihospital.com/page/respiratory-medicine",
                "description": "Specialized care for lung & breathing disorders."
            },
            {
                "title": "Thoracic Surgery",
                "href": "https://www.asgaralihospital.com/page/thoracic-surgery",
                "description": "Advanced surgical treatments for chest & lung conditions."
            },
            {
                "title": "Transfusion Medicine",
                "href": "https://www.asgaralihospital.com/page/transfusion-medicine",
                "description": "Expert management of blood transfusions & related therapies."
            },
            {
                "title": "Urology & &rology",
                "href": "https://www.asgaralihospital.com/page/urology-&-&rology",
                "description": "Specialized care for urinary tract & male reproductive system."
            },
            {
                "title": "Vascular Surgery",
                "href": "https://www.asgaralihospital.com/page/vascular-surgery",
                "description": "Advanced surgical care for blood vessel disorders."
            }
        ]
    },
    {
        "title": "Services",
        "href": "https://www.asgaralihospital.com/menu/services",
        "description": "Explore our range of hospital services & facilities.",
        "submenu": [
            {
                "title": "Ambulance Service",
                "href": "https://www.asgaralihospital.com/page/ambulance-service",
                "description": "24/7 emergency medical transportation services."
            },
            {
                "title": "ATM",
                "href": "https://www.asgaralihospital.com/page/atm",
                "description": "Convenient on-site banking services for patients & visitors."
            },
            {
                "title": "Blood Bank",
                "href": "https://www.asgaralihospital.com/page/blood-bank",
                "description": "Safe & reliable blood storage & transfusion services."
            },
            {
                "title": "Cafeteria",
                "href": "https://www.asgaralihospital.com/page/cafeteria",
                "description": "On-site dining options for patients, visitors, & staff."
            },
            {
                "title": "Car Parking",
                "href": "https://www.asgaralihospital.com/page/car-parking",
                "description": "Convenient parking facilities for patients & visitors."
            },
            {
                "title": "Day Care",
                "href": "https://www.asgaralihospital.com/page/day-care",
                "description": "Short-term medical care & treatment services."
            },
            {
                "title": "Laundry Service",
                "href": "https://www.asgaralihospital.com/page/laundry-service",
                "description": "On-site laundry facilities for patient comfort."
            },
            {
                "title": "Medical Records",
                "href": "https://www.asgaralihospital.com/page/medical-records",
                "description": "Secure management & access to patient medical information."
            },
            {
                "title": "Mortuary",
                "href": "https://www.asgaralihospital.com/page/mortuary",
                "description": "Respectful & dignified care for the deceased."
            },
            {
                "title": "Optical Shop",
                "href": "https://www.asgaralihospital.com/page/optical-shop",
                "description": "On-site eyewear & vision care services."
            },
            {
                "title": "Pharmacy",
                "href": "https://www.asgaralihospital.com/page/pharmacy",
                "description": "Convenient access to prescribed medications & health products."
            },
            {
                "title": "ROP Clinic",
                "href": "https://www.asgaralihospital.com/page/rop-clinic",
                "description": "Specialized care for Retinopathy of Prematurity in infants."
            },
            {
                "title": "Vaccination Center",
                "href": "https://www.asgaralihospital.com/page/vaccination-center",
                "description": "Comprehensive vaccination services for all age groups."
            },
            {
                "title": "Visiting Hours & Rules",
                "href": "https://www.asgaralihospital.com/page/visiting-hours-&-rules",
                "description": "Information on hospital visitation policies & timings."
            }
        ]
    },
    {
        "title": "Online Services",
        "href": "#",
        "description": "Access our convenient online healthcare services.",
        "submenu": [
            {
                "title": "Online Appointment",
                "href": "https://web.asgaralihospital.com/appointment",
                "description": "Schedule your doctor's appointment online.",
            },
            {
                "title": "Online Diagnostic Report",
                "href": "https://web.asgaralihospital.com/pportal",
                "description": "Access your medical test results online.",
            },
            {
                "title": "Online Payment",
                "href": "https://web.asgaralihospital.com/advance",
                "description": "Securely pay your medical bills online.",
            },
            {
                "title": "Online Registration",
                "href": "https://web.asgaralihospital.com/preg",
                "description": "Register as a new patient online.",
            }
        ]
    },
    {
        "title": "Health Check-Up Packages",
        "href": "https://www.asgaralihospital.com/page/health-check-up-packages",
        "description": "Explore our comprehensive health screening packages."
    },
    {
        "title": "About Us",
        "href": "https://www.asgaralihospital.com/menu/about-us",
        "description": "Learn more about Asgar Ali Hospital & our mission.",
        "submenu": [
            {
                "title": "Message from Chairman",
                "href": "https://www.asgaralihospital.com/page/0message-from-chairman",
                "description": "Read a message from our hospital's chairman."
            },
            {
                "title": "Message from President",
                "href": "https://www.asgaralihospital.com/page/1message-from-president",
                "description": "Read a message from our hospital's president."
            },
            {
                "title": "Message from CEO",
                "href": "https://www.asgaralihospital.com/page/2message-from-ceo",
                "description": "Read a message from our hospital's CEO."
            },
            {
                "title": "Board of Directors",
                "href": "https://www.asgaralihospital.com/page/board-of-directors",
                "description": "Meet our hospital's leadership team."
            },
            {
                "title": "Mission, Vision, Values",
                "href": "https://www.asgaralihospital.com/page/mission-vision-values",
                "description": "Learn about our guiding principles & goals."
            },
            {
                "title": "Who We Are",
                "href": "https://www.asgaralihospital.com/page/who-we-are",
                "description": "Discover the history & identity of Asgar Ali Hospital."
            }
        ]
    },

]
