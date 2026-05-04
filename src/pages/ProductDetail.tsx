import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, ShieldCheck, Truck, RefreshCw, Star, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center space-y-4">
        <h1 className="text-2xl font-bold">عذراً، المنتج غير موجود</h1>
        <Link to="/products" className="text-brand-primary font-bold">العودة للتسوق</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm font-bold text-gray-400">
          <Link to="/" className="hover:text-gray-900 transition-colors">الرئيسية</Link>
          <ArrowRight size={14} className="rotate-180" />
          <Link to="/products" className="hover:text-gray-900 transition-colors">المنتجات</Link>
          <ArrowRight size={14} className="rotate-180" />
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-sm border border-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-brand-primary">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-brand-secondary/20 text-brand-secondary px-3 py-1 rounded-full text-xs font-bold">
                  {product.category === 'toys' ? 'صناعة يدوية' : 'كتاب أصلي'}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold">4.9 (42 تقييم)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900">{product.name}</h1>
              <p className="text-3xl font-black text-brand-primary">{product.price} ر.س</p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">مميزات المنتج:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                    <CheckCircle2 className="text-brand-accent flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleAdd}
                className={`flex-1 py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl ${
                  isAdded ? "bg-brand-accent text-white scale-[1.02]" : "bg-brand-primary text-white hover:scale-[1.02] shadow-red-100"
                }`}
              >
                {isAdded ? (
                  <>
                    <CheckCircle2 />
                    تمت الإضافة!
                  </>
                ) : (
                  <>
                    <ShoppingCart />
                    أضف إلى السلة
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                  <Truck size={24} />
                </div>
                <span className="text-xs font-bold text-gray-500">شحن سريع</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-bold text-gray-500">دفع آمن</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                  <RefreshCw size={24} />
                </div>
                <span className="text-xs font-bold text-gray-500">استبدال سهل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
