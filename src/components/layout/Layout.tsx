import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../ui/FloatingWhatsApp'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900 text-smoke-100 font-body antialiased">
      {/* Accessibility: skip to main content */}
      <a href="#home" className="skip-to-main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
