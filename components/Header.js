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
            <h1 className=" mx-auto font-extralight text-2xl p-4">Ahmad Mardiana</h1>
            <Navbar />
        </div>
    )
}