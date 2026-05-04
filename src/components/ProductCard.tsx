import { motion } from 'motion/react';
import { ShoppingCart, Plus, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product; key?: string }) {
  const { addItem } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100/50 group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square rounded-[1.5rem] overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={12} className="text-brand-secondary fill-brand-secondary" />
          <span className="text-[10px] font-bold">جديد</span>
        </div>
      </Link>

      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/products?category=${product.category}`} className="text-[10px] font-bold text-brand-accent bg-green-50 px-2 py-0.5 rounded-md">
            {product.category === 'toys' ? 'ألعاب يدوية' : 'كتب أصلية'}
          </Link>
          <span className="font-black text-gray-900">{product.price} ر.س</span>
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-brand-primary transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10 leading-relaxed">
          {product.description}
        </p>

        <div className="flex gap-2">
          <button 
            onClick={() => addItem(product)}
            className="flex-1 bg-gray-900 text-white rounded-2xl py-3 font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors active:scale-95 shadow-sm"
          >
            <Plus size={18} />
            إضافة للسلة
          </button>
        </div>
      </div>
    </motion.div>
  );
}
