import { Rocket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90%] max-w-7xl z-50'>
            <div className='flex justify-between items-center gap-1.5'>
                <Rocket className='text-[#9F80DA]'/>
                <h1 className='text-[#573e69] font-bold'>ERS Technologies</h1>
            </div>
            <div className='flex items-center justify-center gap-15 text-[#573e69] font-medium'>
                <Link href="#services">
                <h1>Services</h1>
                </Link>
                <Link href="#reviews">
                <h1>Reviews</h1>
                </Link>
                <Link href="#pricing">
                <h1>Pricing</h1>
                </Link>
                <Link href="#contact">
                <h1 style={{boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)'}} className="bg-linear-to-r from-[#9694fa] via-[#8a67d8] to-[#cb94eb] inline-block text-transparent bg-clip-text py-3 px-6 rounded-4xl shadow-inner animate-gradient">Get A Quote</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header