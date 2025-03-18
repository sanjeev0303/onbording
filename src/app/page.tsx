"use client"

import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

const HomePage = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen min-w-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-green-400">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center space-y-6"
            >
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                    Welcome to the Opexn!
                </h1>

                <HoverBorderGradient
                    containerClassName="rounded-full bg-black shadow-lg shadow-purple-600"
                    as="button"
                    className="bg-black text-white px-6 py-3 flex items-center space-x-2 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                    onClick={() => router.push("http://localhost:3000/public/auth/google?provider=google")}
                >
                    Continue With Google 🚀
                </HoverBorderGradient>
            </motion.div>
        </div>
    )
}

export default HomePage
