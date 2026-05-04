import { Mail, Phone, MapPin, Instagram, Twitter, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              يسعدنا <span className="text-brand-primary">سماع</span> صوتكم
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              سواء كان لديكم استفسار عن منتج، أو ترغبون في تصميم قطعة خاصة، أو فقط تودون تحيتنا، نحن دائماً هنا.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">هاتفياً أو واتساب</h4>
                <p className="text-gray-500" dir="ltr">+966 50 000 0000</p>
              </div>
            </div>

            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">البريد الإلكتروني</h4>
                <p className="text-gray-500">hello@rowaa.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">الموقع</h4>
                <p className="text-gray-500">حي الملقا، الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand-primary/5 rounded-[2rem] space-y-4">
            <div className="flex items-center gap-3 text-brand-primary">
              <MessageSquare />
              <h4 className="font-black">هل أنت مصور أو بلوجر؟</h4>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              نحب التعاون مع المبدعين الذين يشاركوننا قيمنا. راسلنا إذا كنت مهتماً بالتعاون معنا لعرض منتجاتنا لجمهورك.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8"
        >
          <h3 className="text-2xl font-black text-gray-900">أرسل لنا رسالة</h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 mr-2">الاسم</label>
                <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 mr-2">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 mr-2">الموضوع</label>
              <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 mr-2">الرسالة</label>
              <textarea rows={4} className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium resize-none"></textarea>
            </div>
            <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-100 hover:scale-[1.02] active:scale-95 transition-all">
              إرسال الرسالة
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
