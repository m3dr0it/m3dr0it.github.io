import Image from "next/image"
import { Navbar } from "./NavBar"
import utilStyles from '@styles/utils.module.css';
import Link from "next/link";

export const Header = () => {
    return (
        <div className="top-10 flex flex-col mx-auto">
            <Link href="/" className="mx-auto pt-10">
              <Image
                priority
                src="/assets/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={150}
                width={150}
              />
            </Link>
            <h1 className=" mx-auto font-extralight text-2xl">Ahmad Mardiana</h1>
            <h1 className=" mx-auto font-extralight text-xl pb-4">4 Years Experienced Backend Developer</h1>          
            <div className=" flex flow-row mx-auto">
            <a href="#">
              <Image
                  className="mx-2 hover:placeholder:Test"
                  priority
                  src="/assets/icons/linkedin-logo.png"
                  height={25}
                  width={25}
                />
            </a>
            <a>
            <Image
                priority
                src="/assets/icons/github-logo.png"
                height={25}
                width={25}
              />
            </a>        
            </div>
              
          </div>
    )
}