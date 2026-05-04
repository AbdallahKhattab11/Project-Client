import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, BookOpen, Heart, ShieldCheck, Truck, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center lg:text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-brand-primary px-4 py-2 rounded-full font-bold text-sm">
              <Sparkles size={16} />
              <span>مصنوع يدوياً بكل فخر في مرسمنا</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              نصنع <span className="text-brand-primary">الخيال</span><br /> ليكون بين يدي طفلك
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              نحن فريق من المصممين والصناع نؤمن بأن أجمل الألعاب هي تلك التي تحمل روح صانعها، وأغنى الكتب هي تلك التي تدغدغ فضول طفلك وتنمي ذكاءه.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/products"
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                اكتشف مجموعتنا
                <ArrowLeft size={22} />
              </Link>
              <Link 
                to="/about"
                className="bg-white text-gray-800 border-2 border-gray-100 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
              >
                قصتنا هكذا بدأت
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">500+</div>
                <div className="text-sm text-gray-500 font-bold">أم سعيدة</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">100%</div>
                <div className="text-sm text-gray-500 font-bold">صناعة يدوية</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative order-1 lg:order-2 px-8 lg:px-0"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-brand-secondary rounded-[3rem] rotate-6"></div>
              <div className="absolute inset-0 bg-brand-accent rounded-[3rem] -rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" 
                alt="الألعاب والكتب" 
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600">
                  <Star fill="currentColor" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-400">تقييم عالي</div>
                  <div className="text-sm font-black">ألعابنا محبوبة</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                  <Heart fill="currentColor" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-400">ثقة</div>
                  <div className="text-sm font-black">جودة مضمونة</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-24 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 max-w-xl text-right">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">منتجات مختارة بعناية</h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                نختار لكم أجمل القطع التي صممناها ونفذناها بكل حب في الورشة، لتكون هدية تعبر عن اهتمامكم.
              </p>
            </div>
            <Link to="/products" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              مشاهدة كل المنتجات
              <ArrowLeft />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-24 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-red-100 text-brand-primary rounded-2xl flex items-center justify-center">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900">أصالة التصميم</h3>
            <p className="text-gray-500 font-medium">كل فكرة تبدأ برسمة على الورق في مرسمنا، لا ننسخ التصاميم بل نبتكرها من الصفر.</p>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900">بناء الذكاء</h3>
            <p className="text-gray-500 font-medium">كتبنا ليست مجرد حكايات، بل أدوات تعليمية تفاعلية مصممة لتطوير مهارات طفلك الذهنية.</p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900">أمان طفلك</h3>
            <p className="text-gray-500 font-medium">نستخدم فقط الأخشاب الطبيعية، والأقطان المعتمدة، والألوان المائية غير السامة.</p>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[4rem] px-8 py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                أكثر من مجرد متجر، نحن عائلة تحب الإبداع
              </h2>
              <p className="text-gray-400 text-lg font-medium">
                انضم إلى قائمتنا البريدية لتصلك قصص خلف الكواليس وأحدث ابتكاراتنا قبل الجميع.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all whitespace-nowrap">
                  اشترك الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
