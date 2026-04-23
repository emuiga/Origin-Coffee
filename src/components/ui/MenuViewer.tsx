'use client'

import { useState, useCallback } from 'react'
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

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
  }, [])

  const onDocumentLoadError = useCallback(() => {
    setError(true)
    setLoading(false)
  }, [])

  const goToPrev = () => setPageNumber(p => Math.max(1, p - 1))
  const goToNext = () => setPageNumber(p => Math.min(numPages, p + 1))

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-text-muted">Unable to load menu. Download it instead →</p>
        <a
          href={BRAND.menuPdf}
          download
          className="inline-flex items-center gap-2 bg-gold text-dark font-medium px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* PDF Document */}
      <div className="w-full max-w-3xl">
        {loading && (
          <div className="h-[80vh] w-full rounded-2xl bg-espresso/10 animate-pulse flex items-center justify-center">
            <span className="text-text-muted text-sm">Loading menu…</span>
          </div>
        )}
        <Document
          file={BRAND.menuPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className={loading ? 'hidden' : 'block'}
        >
          <Page
            pageNumber={pageNumber}
            width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 896) : 896}
            renderTextLayer
            renderAnnotationLayer
            className="mx-auto shadow-2xl rounded-lg overflow-hidden"
          />
        </Document>
      </div>

      {/* Navigation bar */}
      {!loading && !error && (
        <div className="sticky bottom-4 z-10 flex items-center gap-4 bg-espresso/95 backdrop-blur-md text-cream px-6 py-3 rounded-full shadow-xl">
          <button
            onClick={goToPrev}
            disabled={pageNumber <= 1}
            className="flex items-center gap-1 text-sm font-medium disabled:opacity-40 hover:text-gold transition-colors"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <span className="text-sm text-cream/70 px-2 border-x border-cream/20">
            Page {pageNumber} of {numPages}
          </span>

          <button
            onClick={goToNext}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-1 text-sm font-medium disabled:opacity-40 hover:text-gold transition-colors"
          >
            Next
            <ChevronRight size={18} />
          </button>

          <a
            href={BRAND.menuPdf}
            download
            className="flex items-center gap-1 text-sm font-medium text-gold hover:text-gold/80 transition-colors ml-2"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      )}
    </div>
  )
}
