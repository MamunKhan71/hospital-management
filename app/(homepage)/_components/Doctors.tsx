"use client"
import React from 'react';
import HeaderTitle from '@/components/headerTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hospital, MapPin, Link, Bookmark, MoreHorizontal } from 'lucide-react';
import { Check, ChevronsUpDown } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const Doctors = () => {
    const [branchOpen, setBranchOpen] = React.useState(false)
    const [departmentOpen, setDepartmentOpen] = React.useState(false)
    const [locationOpen, setLocationOpen] = React.useState(false)
    const [branchValue, setBranchValue] = React.useState("")
    const [departmentValue, setDepartmentValue] = React.useState("")
    const [locationValue, setLocationValue] = React.useState("")
    return (
        <div className='container mx-auto space-y-20'>
            <HeaderTitle title="Committed Doctors Team" />
            {/* Filter Section  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <Popover open={branchOpen} onOpenChange={setBranchOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between text-primary"
                        >
                            {branchValue
                                ? hospitalBranches.find((hospital) => hospital.value === branchValue)?.label
                                : "Select hospital..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No hospital found</CommandEmpty>
                                <CommandGroup>
                                    {hospitalBranches.map((hospital) => (
                                        <CommandItem
                                            key={hospital.value}
                                            value={hospital.value}
                                            onSelect={(currentValue) => {
                                                setBranchValue(currentValue === branchValue ? "" : currentValue)
                                                setBranchOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    branchValue === hospital.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            <span className='text-primary'>{hospital.label}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Popover open={departmentOpen} onOpenChange={setDepartmentOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between text-primary"
                        >
                            {departmentValue
                                ? departmentList.find((department) => department.name === departmentValue)?.name
                                : "Select department..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No department found</CommandEmpty>
                                <CommandGroup>
                                    {departmentList.map((department) => (
                                        <CommandItem
                                            key={department.id}
                                            value={department.name}
                                            onSelect={(currentValue) => {
                                                setDepartmentValue(currentValue === departmentValue ? "" : currentValue)
                                                setDepartmentOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    departmentValue === department.name ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            <span className='text-primary'>{department.name}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <Input type="text" placeholder="Search" />
                <Input type="text" placeholder="Search" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctorList.slice(0, 20).map((doctor, index) => (
                    <div key={index}>
                        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-32 bg-gradient-to-r from-primary to-blue-700">
                                <div className="absolute inset-0 opacity-50"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex gap-4 items-start">
                                        <img
                                            className="size-20 rounded-lg"
                                            src={doctor.image_url || "https://randomuser.me/api/portraits/men/64.jpg"} // Default image if no image is provided
                                            alt={doctor.name}
                                        />
                                        <div>
                                            <h2 className="text-md font-bold line-clamp-1">{doctor.name}</h2>
                                            <p className="text-sm opacity-90">{doctor.title}</p>
                                            <p className="text-sm opacity-90">{doctor.specialty}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="col-span-2 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <Hospital className="text-slate-600" size={16} />
                                            <div className="flex items-center justify-start gap-2 flex-wrap text-xs text-slate-500 font-medium">
                                                {doctor.qualifications.map((qualification, idx) => (
                                                    <p key={idx}>{qualification}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="flex items-center text-sm text-slate-500 font-medium">
                                            <MapPin className="h-4 w-4 mr-2" /> {doctor.institution}
                                        </p>
                                    </div>
                                    <div className="p-2 rounded-lg border bg-blue-50">
                                        <p className="text-xs text-justify text-slate-500 font-medium line-clamp-2">
                                            {doctor.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-4 bg-gray-50 flex justify-end">
                                <div className="relative w-full">
                                    <div className="flex gap-2 justify-between w-full">
                                        {doctor.actions.map((action, actionIdx) => (
                                            <Button
                                                key={actionIdx}
                                                className="bg-gradient-to-r from-primary to-blue-700 text-white inline-flex gap-2 items-center"
                                            >
                                                {action.icon === "Link" && <Link size={16} />}
                                                {action.icon === "Bookmark" && <Bookmark size={16} />}
                                                {action.label}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
            <div className='flex items-center justify-center w-full'>
                <a
                    href="#_"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="relative z-20 flex items-center gap-2 text-sm">
                        <MoreHorizontal size={20} />
                        Load More
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Doctors;


const doctorList = [
    {
        "name": "Dr. Eshita Biswas",
        "title": "Associate Consultant",
        "image_url": "https://randomuser.me/api/portraits/women/63.jpg",
        "specialty": "General Medicine",
        "qualifications": ["MBBS", "MD"],
        "institution": "National Health Institute",
        "description": "Dr. Eshita Biswas is an Associate Consultant specializing in general medicine, with years of experience in patient care.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Naznin Pervin",
        "title": "Sr. Dental Surgeon",
        "image_url": "https://randomuser.me/api/portraits/women/65.jpg",
        "specialty": "Dental Surgery",
        "qualifications": ["BDS", "FCPS (Dental Surgery)"],
        "institution": "Dental Care Hospital",
        "description": "Senior Dental Surgeon Dr. Naznin Pervin provides comprehensive dental care with expertise in advanced surgical techniques.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Sharmin Jahan",
        "title": "Consultant",
        "image_url": "https://randomuser.me/api/portraits/women/66.jpg",
        "specialty": "General & Breast Surgery",
        "qualifications": ["MBBS", "FCPS (Surgery)"],
        "institution": "City Medical Center",
        "description": "Consultant Dr. Sharmin Jahan specializes in general and breast surgery, offering advanced medical care and surgical interventions.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Mursheda Akter",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/women/67.jpg",
        "specialty": "Internal Medicine",
        "qualifications": ["MBBS", "FCPS"],
        "institution": "National Institute of Medicine",
        "description": "Prof. Dr. Mursheda Akter is a Senior Consultant in internal medicine, with a wealth of experience and dedication to patient health.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Shaila Sabrin",
        "title": "Chief Dietitian",
        "image_url": "https://randomuser.me/api/portraits/women/68.jpg",
        "specialty": "Dietetics",
        "qualifications": ["MSc (Nutrition)", "Registered Dietitian"],
        "institution": "Wellness and Nutrition Clinic",
        "description": "As the Chief Dietitian, Shaila Sabrin provides nutritional counseling and personalized diet plans to promote health and well-being.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. M. Akhter Hossain",
        "title": "Sr. Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/64.jpg",
        "specialty": "Cardiac Surgery",
        "qualifications": ["MBBS", "MS (Cardiac Surgery)"],
        "institution": "Heart Care Institute",
        "description": "Dr. M. Akhter Hossain is a Senior Consultant and Chief Cardiac Surgeon, renowned for his expertise in cardiac surgery and patient care.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Ahmed Ashab Ferdous",
        "title": "Coordinator",
        "image_url": "https://randomuser.me/api/portraits/men/65.jpg",
        "specialty": "General Medicine",
        "qualifications": ["MBBS", "MD"],
        "institution": "HealthCare Institute",
        "description": "Dr. Ahmed Ashab Ferdous is a dedicated coordinator with a passion for healthcare administration and improving patient care processes.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Khan Md. Yahia",
        "title": "Jr. Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/66.jpg",
        "specialty": "Orthopedics",
        "qualifications": ["MBBS", "FCPS (Orthopedics)"],
        "institution": "Orthopedic Hospital",
        "description": "Dr. Khan Md. Yahia is a Junior Consultant specializing in orthopedic treatments, focusing on bone and joint health.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Wahida Parveen",
        "title": "Sr. Dental Surgeon",
        "image_url": "https://randomuser.me/api/portraits/women/67.jpg",
        "specialty": "Dentistry",
        "qualifications": ["BDS", "MDS (Orthodontics)"],
        "institution": "Dental Care Clinic",
        "description": "Dr. Wahida Parveen is a Senior Dental Surgeon specializing in orthodontics and cosmetic dental procedures.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Shantanu Biswas",
        "title": "Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/68.jpg",
        "specialty": "Hepato-Gastro Surgery",
        "qualifications": ["MBBS", "MS (Gastro Surgery)"],
        "institution": "Gastro Health Institute",
        "description": "Dr. Shantanu Biswas is a Consultant specializing in Hepato-Gastro Surgery, particularly liver and digestive system surgeries.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Muhammad Rakib Uddin",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/69.jpg",
        "specialty": "Laparoscopic & Breast Surgery",
        "qualifications": ["MBBS", "MS (Surgery)", "FRCS"],
        "institution": "Surgical Excellence Center",
        "description": "Prof. Dr. Muhammad Rakib Uddin is a Senior Consultant specializing in laparoscopic and breast surgeries with vast experience in minimally invasive procedures.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Ruhul Hassan Joarder",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/70.jpg",
        "specialty": "General & Laparoscopic Surgery",
        "qualifications": ["MBBS", "MS (General Surgery)", "FACS"],
        "institution": "Surgical Solutions Clinic",
        "description": "Dr. Ruhul Hassan Joarder is a Senior Consultant specializing in general and laparoscopic surgery, known for his expertise in minimally invasive techniques.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Md. Sirazul Islam",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/71.jpg",
        "specialty": "General Surgery",
        "qualifications": ["MBBS", "MS (Surgery)", "FRCS"],
        "institution": "General Surgery Hospital",
        "description": "Prof. Dr. Md. Sirazul Islam is a Senior Consultant with years of experience in general surgery and a focus on complex surgical interventions.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Mohd. Tariqul Islam",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/72.jpg",
        "specialty": "Cardiology",
        "qualifications": ["MBBS", "MD (Cardiology)"],
        "institution": "Heart Care Hospital",
        "description": "Dr. Mohd. Tariqul Islam is a Senior Consultant specializing in cardiology, with a focus on heart diseases and preventive care.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Md. Nahid Hossen",
        "title": "Associate Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/73.jpg",
        "specialty": "Neuro Medicine",
        "qualifications": ["MBBS", "MD (Neurology)"],
        "institution": "Neurocare Clinic",
        "description": "Dr. Md. Nahid Hossen is an Associate Consultant specializing in neuro medicine, focused on treating neurological disorders.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Bidyut Kumar Saha",
        "title": "Senior Consultant & Coordinator",
        "image_url": "https://randomuser.me/api/portraits/men/74.jpg",
        "specialty": "Orthopedic Surgery",
        "qualifications": ["MBBS", "MS (Orthopedics)"],
        "institution": "Orthopedic Research Center",
        "description": "Dr. Bidyut Kumar Saha is a Senior Consultant and Coordinator, specializing in orthopedic surgeries with a focus on joint and bone health.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Md. Alamgir Hossain",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/75.jpg",
        "specialty": "Pulmonology",
        "qualifications": ["MBBS", "MD (Pulmonology)", "FRCP"],
        "institution": "Lung Care Institute",
        "description": "Prof. Dr. Md. Alamgir Hossain is a Senior Consultant specializing in pulmonology, with extensive experience in lung and respiratory disorders.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Mustafizur Rahman",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/76.jpg",
        "specialty": "Endocrinology",
        "qualifications": ["MBBS", "MD (Endocrinology)", "FRCP"],
        "institution": "Endocrine Care Hospital",
        "description": "Prof. Dr. Mustafizur Rahman is a Senior Consultant specializing in endocrinology, known for his expertise in hormone-related disorders.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Md. Didarul Alam",
        "title": "Associate Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/77.jpg",
        "specialty": "Gastroenterology",
        "qualifications": ["MBBS", "MD (Gastroenterology)"],
        "institution": "Gastro Health Center",
        "description": "Dr. Md. Didarul Alam is an Associate Consultant specializing in gastroenterology, with a focus on digestive disorders and treatments.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Mohammad Johirul Islam",
        "title": "Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/78.jpg",
        "specialty": "Pediatric Medicine",
        "qualifications": ["MBBS", "MD (Pediatrics)"],
        "institution": "Children's Health Clinic",
        "description": "Dr. Mohammad Johirul Islam is a Consultant specializing in pediatric medicine, dedicated to the health and care of children.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Fahim Feroz",
        "title": "Senior Aesthetic Dermatologist",
        "image_url": "https://randomuser.me/api/portraits/men/79.jpg",
        "specialty": "Aesthetic Dermatology",
        "qualifications": ["MBBS", "MD (Dermatology)"],
        "institution": "Aesthetic Dermatology Clinic",
        "description": "Dr. Fahim Feroz is a Senior Aesthetic Dermatologist, specializing in advanced skin treatments, cosmetic procedures, and dermatological care.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Arifa Billah",
        "title": "Clinical & Aesthetic Dermatologist",
        "image_url": "https://randomuser.me/api/portraits/women/80.jpg",
        "specialty": "Dermatology",
        "qualifications": ["MBBS", "MD (Dermatology)"],
        "institution": "Skin Care Center",
        "description": "Dr. Arifa Billah is a Clinical & Aesthetic Dermatologist, offering both medical and cosmetic dermatology services, focusing on skin health and beauty.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Mosharraf Ahmed Khasru",
        "title": "Clinical & Aesthetic Dermatologist",
        "image_url": "https://randomuser.me/api/portraits/men/81.jpg",
        "specialty": "Dermatology",
        "qualifications": ["MBBS", "MD (Dermatology)"],
        "institution": "Elite Dermatology Clinic",
        "description": "Dr. Mosharraf Ahmed Khasru is a Clinical & Aesthetic Dermatologist, specializing in skin care treatments, acne management, and aesthetic procedures.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Manzur Morshed",
        "title": "Senior Consultant - Clinical Haematology",
        "image_url": "https://randomuser.me/api/portraits/men/82.jpg",
        "specialty": "Clinical Haematology",
        "qualifications": ["MBBS", "MD (Haematology)", "FRCP"],
        "institution": "Haematology Care Institute",
        "description": "Prof. Dr. Manzur Morshed is a Senior Consultant in Clinical Haematology, specializing in blood disorders, leukemia, and other hematologic conditions.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Muhammad Nurul Farhad",
        "title": "Associate Consultant - Clinical Haematology",
        "image_url": "https://randomuser.me/api/portraits/men/83.jpg",
        "specialty": "Clinical Haematology",
        "qualifications": ["MBBS", "MD (Haematology)"],
        "institution": "Haematology Center",
        "description": "Dr. Muhammad Nurul Farhad is an Associate Consultant in Clinical Haematology, focusing on the diagnosis and treatment of blood-related diseases.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Dilshad Jahan",
        "title": "Consultant - Bone Marrow Transplant",
        "image_url": "https://randomuser.me/api/portraits/women/81.jpg",
        "specialty": "Bone Marrow Transplant",
        "qualifications": ["MBBS", "MD (Hematology)"],
        "institution": "Bone Marrow Transplant Center",
        "description": "Dr. Dilshad Jahan is a Consultant specializing in Bone Marrow Transplants, focused on treating hematologic malignancies and blood disorders.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Prof. Dr. Zabrul SM Haque",
        "title": "Senior Consultant – CEO & DMS",
        "image_url": "https://randomuser.me/api/portraits/men/84.jpg",
        "specialty": "General Medicine",
        "qualifications": ["MBBS", "MD", "FRCP"],
        "institution": "Medical Institute & Research",
        "description": "Prof. Dr. Zabrul SM Haque is a Senior Consultant, CEO & DMS with expertise in general medicine and healthcare management.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    },
    {
        "name": "Dr. Md. Mustafiz M. Rahman",
        "title": "Senior Consultant",
        "image_url": "https://randomuser.me/api/portraits/men/85.jpg",
        "specialty": "Gastroenterology",
        "qualifications": ["MBBS", "MD (Gastroenterology)"],
        "institution": "Gastro Care Center",
        "description": "Dr. Md. Mustafiz M. Rahman is a Senior Consultant specializing in gastroenterology, focusing on digestive disorders and treatments.",
        "actions": [
            {
                "label": "View Profile",
                "icon": "Link"
            },
            {
                "label": "Book Appointment",
                "icon": "Bookmark"
            }
        ]
    }

]

interface HospitalBranchList {
    value: string;
    label: string;
    location: string;
    specialties: string[];
    contact: {
        phone: string;
        email: string;
    };
    address: string;
    website: string;
    working_hours: string;
}
const hospitalBranches: HospitalBranchList[] = [
    {
        "value": "asgar-main",
        "label": "Asgar Main Branch, Dhanmondi-32 Dhaka, Dhaka",
        "location": "Dhaka, Bangladesh",
        "specialties": ["Cardiology", "Orthopedics", "Neurology"],
        "contact": {
            "phone": "+8801234567890",
            "email": "mainbranch@asgarhospital.com"
        },
        "address": "123 Main St, Dhaka, Bangladesh",
        "website": "https://www.asgarhospital.com/main",
        "working_hours": "9:00 AM - 5:00 PM"
    },
    {
        "value": "asgar-north",
        "label": "Asgar North Branch, Uttara, Dhaka 1341",
        "location": "Chittagong, Bangladesh",
        "specialties": ["Pediatrics", "Dermatology", "Dentistry"],
        "contact": {
            "phone": "+8809876543210",
            "email": "northbranch@asgarhospital.com"
        },
        "address": "456 North St, Chittagong, Bangladesh",
        "website": "https://www.asgarhospital.com/north",
        "working_hours": "8:00 AM - 4:00 PM"
    },
    {
        "value": "asgar-east",
        "label": "Asgar East Branch",
        "location": "Sylhet, Bangladesh",
        "specialties": ["General Medicine", "Surgery", "Gynecology"],
        "contact": {
            "phone": "+8801122334455",
            "email": "eastbranch@asgarhospital.com"
        },
        "address": "789 East Rd, Sylhet, Bangladesh",
        "website": "https://www.asgarhospital.com/east",
        "working_hours": "9:30 AM - 6:00 PM"
    },
    {
        "value": "asgar-south",
        "label": "Asgar South Branch",
        "location": "Khulna, Bangladesh",
        "specialties": ["Oncology", "Nephrology", "Endocrinology"],
        "contact": {
            "phone": "+8802233445566",
            "email": "southbranch@asgarhospital.com"
        },
        "address": "101 South Blvd, Khulna, Bangladesh",
        "website": "https://www.asgarhospital.com/south",
        "working_hours": "10:00 AM - 7:00 PM"
    }
]

interface Department {
    id: string,
    name: string
}

const departmentList: Department[] = [
    { "id": "0", "name": "All Department" },
    { "id": "154", "name": "Accident and Emergency" },
    { "id": "155", "name": "Anaesthesiology" },
    { "id": "156", "name": "Cardiac Surgery" },
    { "id": "157", "name": "Cardiology" },
    { "id": "158", "name": "Dental and Maxillofacial Surgery" },
    { "id": "159", "name": "Dermatology and Venereology" },
    { "id": "160", "name": "Diabetology and Endocrinology" },
    { "id": "161", "name": "Gastroenterology and Hepatology" },
    { "id": "162", "name": "General and Laparoscopic Surgery" },
    { "id": "163", "name": "Haematology" },
    { "id": "164", "name": "Internal Medicine" },
    { "id": "165", "name": "ENT, Head and Neck Surgery" },
    { "id": "166", "name": "Laboratory Medicine" },
    { "id": "167", "name": "Neonatology" },
    { "id": "168", "name": "Nephrology" },
    { "id": "169", "name": "Obstetrics and Gynaecology" },
    { "id": "170", "name": "Oncology" },
    { "id": "171", "name": "Orthopaedics and Trauma" },
    { "id": "172", "name": "Paediatrics" },
    { "id": "173", "name": "Paediatric Surgery" },
    { "id": "174", "name": "Radiology and Imaging" },
    { "id": "175", "name": "Respiratory Medicine" },
    { "id": "176", "name": "Transfusion Medicine" },
    { "id": "177", "name": "Urology and Andrology" },
    { "id": "178", "name": "Pain Clinic" },
    { "id": "179", "name": "Thoracic Surgery" },
    { "id": "180", "name": "Child Development Center" },
    { "id": "181", "name": "Critical Care" },
    { "id": "182", "name": "Dietetics And Nutrition" },
    { "id": "183", "name": "Neurology" },
    { "id": "184", "name": "Physical Medicine and Rehabilitation" },
    { "id": "185", "name": "Plastic, Reconstructive and Cosmetic Surgery" },
    { "id": "187", "name": "Ophthalmology" },
    { "id": "205", "name": "Vascular Surgery" },
    { "id": "207", "name": "Psychiatry" },
    { "id": "235", "name": "Neurosurgery" }
]

interface BranchLocation {
    location: {
        city: string;
        country: string;
        address: string;
    };
}
const branchLocation: BranchLocation[] = [
    {
        "location": {
            "city": "Dhaka",
            "country": "Bangladesh",
            "address": "123 Main St, Dhaka, Bangladesh"
        }
    },
    {
        "location": {
            "city": "Chittagong",
            "country": "Bangladesh",
            "address": "456 Second St, Chittagong, Bangladesh"
        }
    },
    {
        "location": {
            "city": "Sylhet",
            "country": "Bangladesh",
            "address": "789 Third Ave, Sylhet, Bangladesh"
        }
    }
]