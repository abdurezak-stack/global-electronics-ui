import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-[#131921]" />
                <h2 className="text-xl font-bold">Shopping Cart</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={24} />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <ShoppingBag size={64} className="mb-4 opacity-20" />
                  <p className="text-lg">Your EXPRESS cart is empty</p>
                  <Button variant="link" onClick={onClose} className="text-[#007185]">
                    Shop today's deals
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b pb-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold line-clamp-2">{item.name}</h3>
                        <p className="text-xs text-green-700 font-semibold mb-2">In Stock</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-md">
                            <button 
                              className="px-2 py-1 hover:bg-gray-100"
                              onClick={() => onUpdateQuantity(item.id, -1)}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-4 text-sm font-bold">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 hover:bg-gray-100"
                              onClick={() => onUpdateQuantity(item.id, 1)}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                            <button 
                              onClick={() => onRemove(item.id)}
                              className="text-xs text-[#007185] hover:underline flex items-center gap-1 mt-1"
                            >
                              <Trash2 size={12} /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            {items.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Subtotal ({items.length} items):</span>
                  <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black border border-[#fcd200] rounded-full font-bold h-12 shadow-none">
                  Proceed to Checkout
                </Button>
                <p className="text-[10px] text-center text-gray-500">
                  By continuing, you agree to EXPRESS Conditions of Use and Privacy Notice.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;