import Image from 'next/image'

export default function BlogPostCard({ imageUrl, title, link, date, description }: { imageUrl: string, title: string, link: string, date: string, description: string }) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={340}
                    height={400}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-sm font-semibold">
                    {date}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h2>
                {/* <h3 className="text-lg font-medium mb-2">
                    <Link href={link} className="hover:underline line-clamp-2">
                        {description}
                    </Link>
                </h3> */}
                <p className="text-muted-foreground line-clamp-2">
                    {description}
                </p>
                

            </div>
        </div>
    )
}



