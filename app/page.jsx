
import { FeaturesSectionDemo, InfiniteMovingCardsDemo } from '@/components/landingpage/Features'
import { HeroHighlightDemo } from '@/components/landingpage/Home'
import { NavbarDemo } from '@/components/landingpage/Navbar'
import { CardHoverEffectDemo } from '@/components/user/dashboard/Courses'




import React from 'react'

const page = () => {
  return (
    <div className=' bg-black '>
      <NavbarDemo />
      <HeroHighlightDemo >
      </HeroHighlightDemo>
      <FeaturesSectionDemo />
      
     

      
    </div>
  )
}

export default page