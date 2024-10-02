import React from 'react'
import { SidebarDemo } from '../Sidebar'
import { FloatingDockDemo } from '@/components/user/FloatinDock'

const page = () => {
  return (
    <div>
     
      <FloatingDockDemo >
      <SidebarDemo />
      </FloatingDockDemo>
    </div>
  )
}

export default page