import { Mail, ArrowRight, Facebook, Twitter, Instagram, MapPin, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br mt-24 from-primary via-blue-800 to-primary text-white py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <h2 className="text-5xl font-bold mb-6 ">Asgar Hospital</h2>
                        <p className="max-w-md mb-8 text-lg">
                            Asgar Ali Hospital is a multi-disciplinary, tertiary-care corporate Hospital.
                        </p>
                        <div className="flex space-x-4 mb-8">
                            <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                                <Instagram className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerNavigationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:underline flex items-center">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                                <span>111/1/A Distillery Road, Gandaria (Beside Dhupkhola Playground) Dhaka-1204, Bangladesh</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <span>Hotline: 10602, +880 9666710602</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href="mailto:info@asgaralihospital.com" className="hover:underline">info@asgaralihospital.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 mb-8 space-y-4">
                        <h4 className="text-xl font-semibold mb-4">Site Map</h4>
                        <iframe className="aspect-square w-full h-40 rounded-lg shadow-md border" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8990.079907794838!2d90.423681!3d23.7077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b1a2cf9cf1%3A0x40c9c38899727082!2sAsgar%20Ali%20Medical%20College%20%26%20Hospital!5e1!3m2!1sen!2sus!4v1731398963603!5m2!1sen!2sus" width="600" height="450" style={{"border" : 0}} loading="lazy"></iframe>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow bg-blue-800 border-blue-900 placeholder:text-white placeholder-white text-white"
                        />
                        <Button type="submit" className="bg-white text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700">
                            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Asgar Ali Hospital | All Rights Reserved.</p>
                    <div className="flex space-x-4 text-sm">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/50 to-transparent pointer-events-none"></div>
        </footer>
    )
}

const footerNavigationLinks = [
    {
        name: "About Us",
        href: '/about'
    },
    {
        name: "Services",
        href: '/hospital-services',
    }
    ,
    {
        name: "Doctors",
        href: "/search-doctors"
    }
    ,
    {
        name: "Appointments",
        href: '/'
    }
    ,
    {
        name: "Contact",
        href: '/contact-us'
    }
]