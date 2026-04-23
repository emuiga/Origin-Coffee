'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#offerings' },
  { label: 'Locations',  href: '#locations' },
  { label: 'View Menu',  href: '/menu', isCTA: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-dark/90 border-b border-cream/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Origin Coffee"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.label}>
              {link.isCTA ? (
                <Link
                  href={link.href}
                  className="bg-teal text-cream text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-dark transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-cream/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-cream"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-dark/95 border-t border-cream/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <li key={link.label}>
                  {link.isCTA ? (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-center bg-teal text-cream text-sm font-semibold px-5 py-3 rounded-full"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm font-medium text-cream/80 py-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
