'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = ()=>{
    const pathName = usePathname()
    console.log(pathName);
    return (
        <div className="flex mt-10">
            Test
        </div>
    )
}