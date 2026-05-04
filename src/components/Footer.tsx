import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">ر</span>
            </div>
            <span className="text-2xl font-black text-gray-800 tracking-tight">رواء</span>
          </Link>
          <p className="text-gray-500 font-medium leading-relaxed">
            نحن هنا لنضيف لمسة من الجمال والأصالة إلى عالم أطفالكم من خلال ألعاب وكتب مصنوعة بالحب واليد.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-gray-900">روابط سريعة</h4>
          <ul className="space-y-4 font-medium text-gray-500">
            <li><Link to="/products" className="hover:text-brand-primary transition-colors">منتجاتنا</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">عن رواء</Link></li>
            <li><Link to="/shipping" className="hover:text-brand-primary transition-colors">سياسة الشحن</Link></li>
            <li><Link to="/returns" className="hover:text-brand-primary transition-colors">الاستبدال والرفاع</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-gray-900">الأقسام</h4>
          <ul className="space-y-4 font-medium text-gray-500">
            <li><Link to="/products?category=toys" className="hover:text-brand-primary transition-colors">ألعاب الخيوط والصوف</Link></li>
            <li><Link to="/products?category=toys" className="hover:text-brand-primary transition-colors">ألعاب خشبية</Link></li>
            <li><Link to="/products?category=books" className="hover:text-brand-primary transition-colors">كتب الذكاء</Link></li>
            <li><Link to="/products?category=books" className="hover:text-brand-primary transition-colors">قصص مصورة</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-gray-900">تواصل معنا</h4>
          <ul className="space-y-4 font-medium text-gray-500">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-primary" />
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary" />
              <span dir="ltr">+966 50 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-primary" />
              <span>hello@rowaa.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400">
        <p>© 2026 رواء. جميع الحقوق محفوظة بكل حب.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900">شروط الاستخدام</a>
          <a href="#" className="hover:text-gray-900">سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  );
}
