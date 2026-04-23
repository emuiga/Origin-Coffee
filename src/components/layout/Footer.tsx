import Link from 'next/link'
import Image from 'next/image'
import { BRAND, BRANCHES } from '@/lib/constants'
import { Clock, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <Image
        src="/images/photoofrestaurant.jpg"
        alt="Origin Coffee restaurant"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-75 saturate-110"
      />
      {/* Overlay — dark enough for legibility, not so dark the image disappears */}
      <div className="absolute inset-0 bg-dark/82" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-cream/15">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Origin Coffee"
              width={140}
              height={50}
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-sm leading-relaxed text-cream/70 max-w-xs mb-5">
              A homegrown Kenyan fusion restaurant. Six dining concepts, three locations, one unforgettable experience.
            </p>
            <span className="inline-flex items-center gap-2 text-xs text-teal font-medium">
              <Clock size={12} />
              {BRAND.hours}
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about" className="text-cream/75 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="#offerings" className="text-cream/75 hover:text-gold transition-colors">Our Experience</Link></li>
              <li><Link href="#locations" className="text-cream/75 hover:text-gold transition-colors">Locations</Link></li>
              <li><Link href="/menu" className="text-cream/75 hover:text-gold transition-colors">Full Menu</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Locations</h4>
            <ul className="space-y-4 text-sm">
              {BRANCHES.map(b => (
                <li key={b.id}>
                  <p className="text-cream font-semibold mb-0.5">{b.name}</p>
                  <a href={b.tel} className="flex items-center gap-1.5 text-cream/65 hover:text-teal transition-colors text-xs">
                    <Phone size={11} />
                    {b.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Deals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Contact</h4>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-cream/75 hover:text-gold transition-colors mb-6">
              <Mail size={13} className="text-teal shrink-0" />
              {BRAND.email}
            </a>
            <p className="text-xs text-gold font-bold uppercase tracking-widest mb-3">Weekly Deals</p>
            <ul className="space-y-2 text-xs text-cream/75">
              <li><span className="text-teal font-bold">Daily</span> — BOGO Cocktails</li>
              <li><span className="text-gold font-bold">Tuesdays</span> — BOGO Pizza</li>
              <li><span className="text-teal font-bold">Wednesdays</span> — BOGO Burgers</li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Origin Coffee Kenya. All rights reserved.</p>
          <p className="text-cream/60">Nakuru · Eldoret · Sobea</p>
        </div>
      </div>
    </footer>
  )
}
