import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import CertificatesPage from './pages/CertificatesPage'
import BlogsPage from './pages/BlogsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/products"     element={<ProductsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/blogs"        element={<BlogsPage />} />
          <Route path="/contact"      element={<ContactPage />} />
          <Route path="/privacy"      element={<PrivacyPage />} />
          <Route path="/terms"        element={<TermsPage />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
