'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = ()=>{
    const pathName = usePathname()
    console.log(pathName);
    return (
        <div className="flex mt-10">
            <div className="flex flex-row mx-auto text-lg font-bold">
                <Link
                className={ pathName === "/about" ? "p-6 underline" : "p-6"}
                href="/about"
                >ABOUT ME</Link>
                <Link
                className={ pathName === "/blog" ? "p-6 underline" : "p-6"}
                href="/blog"
                >BLOG</Link>
                <Link
                className={ pathName === "/projects" ? "p-6 underline" : "p-6"}
                href="/projects"
                >PROJECTS</Link>
            </div>
        </div>
    )
}