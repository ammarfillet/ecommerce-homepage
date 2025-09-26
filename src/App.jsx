import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import HotSalesCarousel from './components/HotSalesCarousel'
import BrowseByCategory from './components/BrowseByCategory'
import BestSellingProducts from './components/BestSellingProducts'
import DairyPromoBanner from './components/DairyPromoBanner'
import ExploreProducts from './components/ExploreProducts'
import NewArrival from './components/NewArrival'
import ServiceHighlights from './components/ServiceHighlights'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import ProtectedRoute from './components/ProtectedRoute'
import AdminPage from './components/AdminPage'
import OrdersPage from './components/OrdersPage'
import CancellationsPage from './components/CancellationsPage'
import ReviewsPage from './components/ReviewsPage'
import AccountPage from './components/AccountPage'
import CartPage from './components/CartPage'

export default function App() {
  console.log('App rendering');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <HotSalesCarousel />
              <BrowseByCategory />
              <BestSellingProducts />
              <DairyPromoBanner />
              <ExploreProducts />
              <NewArrival />
              <ServiceHighlights />
            </main>
          } />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
          <Route path="/cancellations" element={<ProtectedRoute><CancellationsPage /></ProtectedRoute>} />
          <Route path="/reviews" element={<ProtectedRoute><ReviewsPage /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}
