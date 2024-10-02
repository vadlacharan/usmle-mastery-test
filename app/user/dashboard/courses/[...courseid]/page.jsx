
import { ExpandableCardDemo } from '@/components/user/dashboard/courses/Course'
import { SidebarDemo } from '@/components/user/dashboard/Sidebar'
import { FloatingDockDemo } from '@/components/user/FloatinDock'
import React from 'react'

const page = () => {
  return (
    <div>
        <ExpandableCardDemo />
        <div className=" flex  w-full items-center   fixed z-50 bottom-5">
        <FloatingDockDemo />
        </div>
       

    </div>
  )
}

export default page