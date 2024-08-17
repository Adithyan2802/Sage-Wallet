'use client'

import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { useUser,UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header(){
    const {user,isSignedIn} = useUser()
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <div className='flex flex-row items-center '>
                <Image src={'/logo.svg'} alt='logo' width={50} height={25}/>
                <span className='text-black-800 font-bold text-xl '>Sage Wallet</span>
            </div>
            { 
                isSignedIn ? (<UserButton/>) : (
                <div className='flex gap-2 items-center'>
                    <Link href='/dashboard'>
                        <Button>Dashboard</Button>
                    </Link>
                    <Link href='/dashboard'>
                        <Button>Get Started</Button>
                    </Link>
                </div>
                )
            }
        </div>
    )
}

export default Header;