'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, User, List, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 md:p-8">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass flex items-center justify-between w-full max-w-7xl px-8 py-4 rounded-[2rem] shadow-sm shadow-black/5"
            >
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground transform -rotate-12">
                        <span className="text-lg">M</span>
                    </div>
                    <span>MASTER<span className="text-muted-foreground font-medium">BOILER</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Pricing', 'Docs', 'Showcase'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <User size={20} />
                    </Button>
                    <Button className="rounded-full px-6">
                        Get Started
                    </Button>
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-24 left-6 right-6 glass p-6 rounded-2xl md:hidden flex flex-col gap-4"
                >
                    {['Features', 'Pricing', 'Docs', 'Showcase'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                    <hr className="border-border" />
                    <Button className="w-full">Get Started</Button>
                </motion.div>
            )}
        </nav>
    )
}
