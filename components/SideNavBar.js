'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from "@node_modules/react-icons/gi";

export const SideNavBar = () => {
  return (
       <Disclosure as="nav">
        <Disclosure.Button className='absolute top-4 right inline-flex items-center peer justify-center rounded-md p-2'>
            <GiHamburgerMenu
                className='block lg:hidden h-6 w-6'
                aria-hidden='true'
            />
        </Disclosure.Button>
        <div className='p-6 h-screen w-1/3 bg-white fixed  z-20 top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
          <h1 className='p-6 font-semibold'>
            Dashboard
          </h1>
          <h1 className='p-6'>
            Home
          </h1>
          <h1 className='p-6'>
            Test 1
          </h1>
          <h1 className='p-6'>
            Test 2
          </h1>
        </div>
      </Disclosure>
  )
}
