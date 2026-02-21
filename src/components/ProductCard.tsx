import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white p-4 rounded-sm flex flex-col h-full group hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200">
      <div className="relative h-48 mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
        {product.isBestSeller && (
          <Badge className="absolute top-0 left-0 bg-[#e47911] text-white rounded-r-sm rounded-l-none">
            Best Seller
          </Badge>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-1 hover:text-[#c45500] cursor-pointer">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-[#ffa41c] text-[#ffa41c]' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-[#007185]">{product.reviewsCount.toLocaleString()}</span>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xs align-top mt-1">$</span>
          <span className="text-2xl font-bold leading-none">{Math.floor(product.price)}</span>
          <span className="text-xs font-bold leading-none">{(product.price % 1).toFixed(2).substring(1)}</span>
          <span className="text-xs text-gray-500 line-through ml-2">
            ${product.originalPrice.toFixed(2)}
          </span>
          <Badge variant="outline" className="text-[#c45500] border-[#c45500] text-[10px] h-4">
            {discount}% off
          </Badge>
        </div>

        <div className="text-xs text-gray-600 mb-4 space-y-1">
          {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
            <p key={key} className="truncate">
              <span className="font-semibold capitalize">{key}:</span> {value}
            </p>
          ))}
        </div>

        <Button 
          className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black border border-[#fcd200] rounded-full text-xs font-semibold mt-auto"
          onClick={() => {
            onAddToCart(product);
            toast.success(`Added ${product.name} to cart`);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;