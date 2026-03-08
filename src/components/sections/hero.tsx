'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lightning, ShieldCheck, Sparkle, Wind, ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-muted-foreground blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-4"
                    >
                        <Sparkle weight="fill" size={14} />
                        Trusted by 500+ engineering teams
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter max-w-4xl mx-auto leading-tight"
                    >
                        Build Anything <br />
                        <span className="text-muted-foreground italic">Beyond Perfect</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        The ultimate foundation for your Next.js project. Type-safe,
                        high-performance, and designed to scale without technical debt.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full h-12 px-8 text-base">
                            Start Building <ArrowRight className="ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                            View Boilerplate
                        </Button>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Lightning size={24} weight="bold" />
                            </div>
                            <h3 className="text-2xl font-bold">Turbo-charged Performance</h3>
                            <p className="text-muted-foreground">Optimized for LCP and SEO from day one. Reach 100 on PageSpeed Insights instantly.</p>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                        <div className="h-40 bg-accent/50 rounded-2xl mt-8 border border-border/50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 glass rounded-3xl p-8 flex items-center gap-6 group"
                    >
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-secondary flex items-center justify-center text-foreground group-hover:rotate-12 transition-transform">
                            <ShieldCheck size={24} weight="bold" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Secure by Default</h3>
                            <p className="text-sm text-muted-foreground">Enterprise-grade security with Supabase Auth and RLS policies.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass rounded-3xl p-8 flex flex-col justify-center gap-4 group text-center"
                    >
                        <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse">
                            <Sparkle size={20} weight="fill" />
                        </div>
                        <h3 className="text-lg font-bold italic">Elegant DX</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass rounded-3xl p-8 flex flex-col justify-center gap-4 group text-center"
                    >
                        <div className="w-10 h-10 mx-auto rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:scale-125 transition-transform">
                            <Wind size={20} weight="bold" />
                        </div>
                        <h3 className="text-lg font-bold underline decoration-primary/50 underline-offset-4">Cloud Ready</h3>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
