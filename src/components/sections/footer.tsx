'use client'

import React from 'react'
import Link from 'next/link'
import { GithubLogo, TwitterLogo, LinkedinLogo, DiscordLogo } from '@phosphor-icons/react'

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-background py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        MASTER<span className="text-muted-foreground font-medium">BOILER</span>
                    </Link>
                    <p className="max-w-xs text-lg text-muted-foreground leading-relaxed">
                        The ultimate foundation for high-performance, premium websites.
                        Built for those who refuse to settle for mediocrity.
                    </p>
                    <div className="flex gap-5">
                        <Link href="#" className="p-3 glass rounded-full hover:bg-accent transition-colors">
                            <GithubLogo size={22} />
                        </Link>
                        <Link href="#" className="p-3 glass rounded-full hover:bg-accent transition-colors">
                            <TwitterLogo size={22} />
                        </Link>
                        <Link href="#" className="p-3 glass rounded-full hover:bg-accent transition-colors">
                            <LinkedinLogo size={22} />
                        </Link>
                        <Link href="#" className="p-3 glass rounded-full hover:bg-accent transition-colors">
                            <DiscordLogo size={22} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-12">
                    <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Product</h4>
                        <nav className="flex flex-col gap-4">
                            {['Features', 'Pricing', 'Showcase', 'Blog'].map((item) => (
                                <Link key={item} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Company</h4>
                        <nav className="flex flex-col gap-4">
                            {['About', 'Privacy', 'Terms', 'Contact'].map((item) => (
                                <Link key={item} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-border flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
                <p>© 2026 Master Boilerplate. Crafted for scale.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-foreground transition-colors">Status</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">License</Link>
                </div>
            </div>
        </footer>
    )
}
