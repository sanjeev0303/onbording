"use client"

import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {

    const router = useRouter()

  return (
    <div className='min-h-screen min-w-full flex items-center justify-center'>
        <HoverBorderGradient
        containerClassName="rounded-full bg-black"
        as="button"
        className=" bg-black text-white flex items-center space-x-2"
        onClick={() => {
            router.push("/onbording-form")
        }}>
            Login With Google
        </HoverBorderGradient>
    </div>
  )
}

export default HomePage
