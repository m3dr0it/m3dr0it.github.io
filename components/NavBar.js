import Link from "next/link"

export const Navbar = ()=>{
    return (
        <div className="flex flex-row mx-auto text-xl font-semibold">
            <Link
            className="p-6"
            href="/about"
            >ABOUT</Link>
            
            <Link
            className="p-6"
            href="/blog"
            >BLOG</Link>

            <Link
            className="p-6"
            href="/projects"
            >PROJECTS</Link>
        </div>
    )
}