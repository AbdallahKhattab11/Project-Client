import { motion } from 'motion/react';
import { Sparkles, Heart, Users, MapPin, Mail, Instagram, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Story Intro */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            حكاية بدأت من <span className="text-brand-primary">القلب</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            نحن لسنا مجرد متجر يبيع الألعاب والكتب، نحن عائلة فنية نؤمن بأن كل طفل يستحق عالماً مليئاً بالجمال والأصالة.
          </p>
        </div>

        {/* The Founders */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-brand-secondary rounded-[3rem] rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600" 
              alt="المؤسسين" 
              className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-xl shadow-gray-200"
            />
          </div>
          <div className="space-y-6 text-right">
            <h2 className="text-3xl font-black text-gray-900">المؤسسون والمصممون</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              بدأت رحلتنا عندما لم نجد في الأسواق ألعاباً تشبه خيال أطفالنا أو كتباً تحاكي ذكاءهم الفطري. قررنا حينها أن نأخذ زمام المبادرة.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <StarIcon />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg underline decoration-brand-secondary decoration-2 underline-offset-4">نحن الفكرة</h4>
                  <p className="text-sm text-gray-500">نبتكر المفهوم ونرسم المسودة الأولى باليد.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg underline decoration-brand-primary decoration-2 underline-offset-4">نحن التصميم</h4>
                  <p className="text-sm text-gray-500">نختار الألوان والخامات التي تليق ببشرة طفلك.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg underline decoration-brand-accent decoration-2 underline-offset-4">نحن الإنتاج</h4>
                  <p className="text-sm text-gray-500">خياطة، صقل، وجمع المكونات يدوياً قطعة بقطعة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-black text-white relative z-10">فلسفتنا في "رواء"</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
            "رواء" ليست مجرد اسم، بل هي تجربة الارتواء بالجمال والمعرفة. نسعى لإعادة الطفل إلى الطبيعة، بعيداً عن الشاشات والقطع البلاستيكية الباردة. كل منتج نقدمه يحمل قصة، روحاً، وحباً يكفي للعالم أجمع.
          </p>
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
