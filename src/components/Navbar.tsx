import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, MapPin, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from '@supabase/supabase-js';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, user, onLogin, onLogout }) => {
  const [searchCategory] = useState('All');

  const navItems = [
    "Today's Deals",
    "Best Sellers",
    "New Arrivals",
    "Sell on EXPRESS",
    "Customer Service",
    "Mobile Phones",
    "Laptops",
    "Computers",
    "Components"
  ];

  return (
    <header className="flex flex-col w-full sticky top-0 z-50 bg-[#131921] text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 gap-4 max-w-[1500px] mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer hover:outline hover:outline-1 outline-white p-1 rounded-sm">
          <span className="text-2xl font-bold tracking-tight text-white flex items-center">
            EXPRESS
            <span className="text-[#febd69] text-xs mt-2 ml-0.5">.com</span>
          </span>
        </div>

        {/* Deliver To */}
        <div className="hidden md:flex items-center gap-1 hover:outline hover:outline-1 outline-white p-1 rounded-sm cursor-pointer">
          <div className="mt-1">
            <MapPin size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-300 leading-none">Deliver to</span>
            <span className="text-sm font-bold leading-none">Worldwide</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex items-center h-10 group">
          <div className="hidden sm:flex items-center bg-[#f3f3f3] text-gray-700 text-[11px] px-3 h-full rounded-l-md border-r border-gray-300 cursor-pointer hover:bg-gray-200">
            {searchCategory} <ChevronDown size={12} className="ml-1" />
          </div>
          <Input 
            className="flex-1 h-full rounded-none border-none text-black focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
            placeholder="Search EXPRESS Electronics..."
          />
          <Button className="h-full bg-[#febd69] hover:bg-[#f3a847] text-black rounded-l-none rounded-r-md px-4 border-none shadow-none">
            <Search size={22} strokeWidth={2.5} />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <div className="hidden lg:flex items-center gap-1 hover:outline hover:outline-1 outline-white p-2 rounded-sm cursor-pointer">
            <Globe size={18} />
            <span className="text-sm font-bold uppercase">EN</span>
            <ChevronDown size={12} className="mt-1 text-gray-400" />
          </div>

          <div 
            className="flex flex-col hover:outline hover:outline-1 outline-white p-2 rounded-sm cursor-pointer"
            onClick={user ? onLogout : onLogin}
          >
            <span className="text-[11px] leading-none">
              Hello, {user ? user.email?.split('@')[0] : 'sign in'}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">{user ? 'Sign Out' : 'Account & Lists'}</span>
              <ChevronDown size={12} className="text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex flex-col hover:outline hover:outline-1 outline-white p-2 rounded-sm cursor-pointer">
            <span className="text-[11px] leading-none">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>

          <div 
            className="flex items-end gap-1 relative hover:outline hover:outline-1 outline-white p-2 rounded-sm cursor-pointer ml-1"
            onClick={onOpenCart}
          >
            <div className="relative">
              <ShoppingCart size={32} />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#f08804] text-base font-bold">
                {cartCount}
              </span>
            </div>
            <span className="text-sm font-bold hidden sm:block pb-1">Cart</span>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-[#232f3e] flex items-center px-4 py-1 gap-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 font-bold text-sm cursor-pointer hover:outline hover:outline-1 outline-white p-2 rounded-sm whitespace-nowrap">
          <Menu size={20} />
          <span>All</span>
        </div>
        {navItems.map((item) => (
          <span key={item} className="text-sm hover:outline hover:outline-1 outline-white p-2 rounded-sm cursor-pointer whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Navbar;