import { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, Package, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  const categories = [
    { id: 'all', name: 'الكل', icon: <Package size={18} /> },
    { id: 'toys', name: 'ألعاب', icon: <SparkleIcon size={18} /> },
    { id: 'books', name: 'كتب', icon: <Book size={18} /> },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-right space-y-2">
            <h1 className="text-4xl font-black text-gray-900">مجموعتنا الكاملة</h1>
            <p className="text-gray-500 font-medium">اختر ما يناسب شغف طفلك بالتطور واللعب.</p>
          </div>

          <div className="w-full md:w-96 relative">
            <input 
              type="text"
              placeholder="ابحث عن لعبة أو كتاب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pr-12 pl-6 text-right focus:outline-none focus:border-brand-primary transition-all font-medium shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <div className="bg-gray-100 p-2 rounded-2xl flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  categoryFilter === cat.id 
                    ? "bg-white text-brand-primary shadow-sm" 
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center space-y-6"
            >
              <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                <Search size={64} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-800">لا توجد نتائج</h3>
                <p className="text-gray-500">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
              </div>
              <button 
                onClick={() => { setSearchQuery(''); setSearchParams({ category: 'all' }); }}
                className="text-brand-primary font-bold underline decoration-2 underline-offset-4"
              >
                عرض جميع المنتجات
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SparkleIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L14.5 9L21 12L14.5 15L12 21L9.5 15L3 12L9.5 9L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
