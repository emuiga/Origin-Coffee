'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { BRAND } from '@/lib/constants'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function MenuViewer() {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
      setIsMobile(window.innerWidth < 768)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
  }, [])

  const onDocumentLoadError = useCallback(() => {
    setError(true)
    setLoading(false)
  }, [])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-sm text-espresso/60">Unable to load menu. Download it instead.</p>
        <a
          href={BRAND.menuPdf}
          download
          className="inline-flex items-center gap-2 bg-teal text-cream font-medium px-6 py-3 rounded-full hover:bg-teal-dark transition-colors"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    )
  }

  const pageWidth = containerWidth > 0 ? containerWidth : undefined

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      {loading && (
        <div className="h-[80vh] w-full rounded-xl bg-espresso/8 animate-pulse flex items-center justify-center mt-4">
          <span className="text-sm text-espresso/40">Loading menu…</span>
        </div>
      )}

      <Document
        file={BRAND.menuPdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={`w-full ${loading ? 'hidden' : 'block'}`}
      >
        {isMobile ? (
          /* Mobile — all pages stacked, normal scroll */
          <div className="flex flex-col gap-3 py-4">
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                width={pageWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-md"
              />
            ))}
          </div>
        ) : (
          /* Desktop — single page */
          <div className="flex flex-col items-center gap-6 py-8">
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              renderTextLayer
              renderAnnotationLayer
              className="shadow-2xl rounded-lg overflow-hidden"
            />
          </div>
        )}
      </Document>

      {/* Desktop pagination — sticky bottom bar */}
      {!loading && !error && !isMobile && numPages > 0 && (
        <div className="sticky bottom-6 z-10 flex items-center gap-4 bg-dark/95 backdrop-blur-md text-cream px-6 py-3 rounded-full shadow-xl mb-8">
          <button
            onClick={() => setPageNumber(p => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="flex items-center gap-1 text-sm font-medium disabled:opacity-30 hover:text-gold transition-colors"
          >
            <ChevronLeft size={18} />
            Prev
          </button>

          <span className="text-sm text-cream/60 px-3 border-x border-cream/20">
            {pageNumber} / {numPages}
          </span>

          <button
            onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-1 text-sm font-medium disabled:opacity-30 hover:text-gold transition-colors"
          >
            Next
            <ChevronRight size={18} />
          </button>

          <a
            href={BRAND.menuPdf}
            download
            className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold/75 transition-colors ml-1 pl-3 border-l border-cream/20"
          >
            <Download size={15} />
            Save
          </a>
        </div>
      )}
    </div>
  )
}
