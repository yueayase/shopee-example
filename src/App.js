import {
  BrowserRouter,
  Routes, 
  Route,
  Navigate
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import { AuthProvider } from './components/auth/AuthContext';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/common/ScrollToTop';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/mall" />}></Route>
          <Route path="/mall" element={<HomePage />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          <Route path="/:productName" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
