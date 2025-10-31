import { Rocket } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className='absolute top-13 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90%] max-w-7xl'>
            <div className='flex justify-between items-center gap-1.5'>
                <Rocket className='text-[#9F80DA]'/>
                <h1 className='text-[#573e69] font-bold'>Flowline</h1>
            </div>
            <div className='flex items-center justify-center gap-15 text-[#573e69] font-medium'>
                <h1>Home</h1>
                <h1>Features</h1>
                <h1>Compare</h1>
                <h1>Reviews</h1>
                <h1>FAQ</h1>
                <h1 style={{boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)'}} className="bg-linear-to-r from-[#9694fa] via-[#8a67d8] to-[#cb94eb] inline-block text-transparent bg-clip-text py-3 px-6 rounded-4xl shadow-inner">Get Flowline - it&apos;s Free</h1>
            </div>
        </header>
    )
}

export default Header