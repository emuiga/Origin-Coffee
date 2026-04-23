'use client'

import { useEffect, useRef } from 'react'

interface Branch {
  id: string
  name: string
  lat: number
  lng: number
}

interface MapProps {
  branch: Branch
}

export default function Map({ branch }: MapProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Build the embed URL — no API key needed for this endpoint
  const src = `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=15&output=embed`

  // When branch changes, update the iframe src directly to get a smooth transition
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = src
    }
  }, [src])

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={`${branch.name} map`}
      className="h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
