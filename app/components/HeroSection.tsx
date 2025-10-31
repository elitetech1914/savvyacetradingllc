import React from 'react'
import CTAButton from './CTAButton'

const HeroSection = () => {
  return (
    // <div className='min-h-[700px] rounded-4xl'min-h-[700px] rounded-4xl bg-linear-to-br from-[#ebeaff] via-10% via-[white] to-[#f7e9ff] m-5'>
       
    // </div>
    <section style={{boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)'}} className='min-h-[700px] m-5 bg-linear-to-br from-[#ebeaff] via-[white] to-[#f7e9ff] rounded-4xl flex flex-col items-center justify-center gap-6'>
      <h1 className='text-[#483953] text-7xl font-medium max-w-3xl text-center'>Devs which make your dream a reality</h1>
      <p className='text-[#8b6fa0] text-2xl max-w-3xl text-center'>Our mission is to empower businesses and individuals by harnessing the full potential of the digital landscape.</p>
        <CTAButton/>
    </section>
  )
}

export default HeroSection