'use client'

import dynamic from 'next/dynamic'

const MenuViewer = dynamic(() => import('@/components/ui/MenuViewer'), { ssr: false })

export default function MenuPageClient() {
  return <MenuViewer />
}
