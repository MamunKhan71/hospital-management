import HeaderTitle from '@/components/headerTitle'
import React from 'react'
import BlogPostCard from './BlogPostCard'
import { MoreHorizontal } from 'lucide-react'

const Articles = () => {
    return (
        <div className='container mx-auto space-y-20'>
            <HeaderTitle title='Articles and Newsletter' />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 w-full'>
                {blogPost?.map(post => <BlogPostCard date={post.date} imageUrl={post.imageUrl} title={post.title} key={post.id} description={post.description} link={post.link} />)}
            </div>
            <div className='w-full flex items-center justify-center'>
                <a
                    href="#_"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
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
    )
}

export default Articles

interface BlogPost {
    id: number,
    imageUrl: string,
    title: string,
    link: string,
    date: string,
    description: string
}
const blogPost: BlogPost[] = [
    {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Free Health Camp at Allied Mother & Child Specialized Hospital, Narayanganj",
        link: "https://www.asgaralihospital.com/page/free-health-camp-at-allied-mother-child-specialized-hospital-narayanganj",
        date: "Aug 31, 2023",
        description: "Asgar Ali Hospital organized & successfully completed the – 'Free Health Camp.'"
    },
    {
        id: 2,
        imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Medical Conference at ABC Hospital",
        link: "https://www.example.com",
        date: "Sept 10, 2023",
        description: "A medical conference was held to discuss new advancements in healthcare."
    },
    {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "New Surgical Techniques Seminar",
        link: "https://www.example.com",
        date: "Sept 15, 2023",
        description: "Seminar on the latest surgical techniques to improve patient outcomes."
    },
    {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Healthcare Innovations Expo",
        link: "https://www.example.com",
        date: "Oct 5, 2023",
        description: "Expo showcasing the latest innovations in healthcare technology."
    }
];