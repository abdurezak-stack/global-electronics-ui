import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { Toaster } from 'sonner';
import { supabase } from './lib/supabase';
import { AuthModal } from './components/AuthModal';
import { User } from '@supabase/supabase-js';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    // Get session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const mainCategories = ['Mobiles', 'Laptops', 'Desktops', 'Tablets', 'Accessories', 'Components'];

  return (
    <div className="min-h-screen bg-[#eaeded] font-sans selection:bg-[#febd69]/30">
      <Toaster position="top-center" richColors />
      
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        user={user}
        onLogin={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
      />
      
      <main className="max-w-[1500px] mx-auto relative">
        <Hero />

        {/* Home Content Cards Overlay */}
        <div className="relative -mt-16 md:-mt-64 z-10 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          <div className="bg-white p-5 flex flex-col shadow-sm">
            <h2 className="text-xl font-bold mb-4">Latest Mobiles</h2>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {products.filter(p => p.category === 'Mobiles').slice(0, 4).map(p => (
                <div key={p.id} className="cursor-pointer group">
                  <div className="overflow-hidden bg-gray-50 mb-1 h-24 flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[11px] line-clamp-1 group-hover:text-[#c45500] font-medium">{p.name}</span>
                </div>
              ))}
            </div>
            <a href="#" className="text-sm text-[#007185] hover:underline mt-4 hover:text-[#c45500]">Shop now</a>
          </div>

          <div className="bg-white p-5 flex flex-col shadow-sm">
            <h2 className="text-xl font-bold mb-4">High Performance Laptops</h2>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {products.filter(p => p.category === 'Laptops').slice(0, 4).map(p => (
                <div key={p.id} className="cursor-pointer group">
                  <div className="overflow-hidden bg-gray-50 mb-1 h-24 flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[11px] line-clamp-1 group-hover:text-[#c45500] font-medium">{p.name}</span>
                </div>
              ))}
            </div>
            <a href="#" className="text-sm text-[#007185] hover:underline mt-4 hover:text-[#c45500]">See all laptops</a>
          </div>

          <div className="bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Express Gaming</h2>
            <div className="h-64 overflow-hidden mb-4">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/desktop-pc-banner-3bf80535-1771682320899.webp" 
                alt="Gaming" 
                className="h-full w-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <a href="#" className="text-sm text-[#007185] hover:underline hover:text-[#c45500]">Explore gaming gear</a>
          </div>

          <div className="bg-white p-5 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              {user ? `Welcome, ${user.email?.split('@')[0]}` : 'Sign in for best experience'}
            </h2>
            {!user ? (
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="w-full bg-[#ffd814] py-2 rounded-lg text-sm font-semibold mb-4 shadow-sm border border-[#fcd200] hover:bg-[#f7ca00]"
              >
                Sign in securely
              </button>
            ) : (
              <button 
                onClick={handleLogout}
                className="w-full bg-[#f3f3f3] py-2 rounded-lg text-sm font-semibold mb-4 shadow-sm border border-gray-300 hover:bg-gray-200"
              >
                Sign out
              </button>
            )}
            <div className="h-48 flex items-center justify-center bg-gray-100 rounded border border-dashed border-gray-300">
               <span className="text-gray-400 text-sm text-center px-4">
                 {user ? 'View your order history and manage your account details' : 'Sign in to see personalized offers and track orders'}
               </span>
            </div>
          </div>
        </div>

        {/* Product Sections */}
        {mainCategories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat);
          if (catProducts.length === 0) return null;
          
          return (
            <section key={cat} className="mt-6 px-4 md:px-8 mb-8">
              <div className="bg-white p-6 shadow-sm rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recommended in {cat}</h2>
                  <a href="#" className="text-sm text-[#007185] hover:underline hover:text-[#c45500]">Shop more</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {catProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Best Sellers Scrollable */}
        <section className="mt-6 px-4 md:px-8 mb-12">
          <div className="bg-white p-6 shadow-sm rounded-sm overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Today's Best Sellers</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {products
                .filter((p) => p.isBestSeller)
                .map((product) => (
                  <div key={product.id} className="min-w-[240px] max-w-[240px]">
                    <ProductCard
                      product={product}
                      onAddToCart={addToCart}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </div>
  );
};

export default App;