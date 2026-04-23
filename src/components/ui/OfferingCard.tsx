'use client'

import Image from 'next/image'

interface OfferingCardProps {
  tag: string
  name: string
  image: string
}

export default function OfferingCard({ tag, name, image }: OfferingCardProps) {
  return (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover brightness-125 saturate-110 transition-transform duration-700 group-hover:scale-105"
      />
      {/* Only bottom gradient for text — rest of image fully visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="self-start bg-dark/40 backdrop-blur-sm border border-cream/10 text-[10px] font-bold uppercase tracking-widest text-cream/80 px-3 py-1 rounded-full">
          {tag}
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold text-cream leading-tight">{name}</h3>
          <div className="mt-2 w-8 h-0.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  )
}
