export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'toys' | 'books';
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'toy-1',
    name: 'صديق الأحلام الصوفي',
    description: 'لعبة الفيل الصوفية المصنوعة يدوياً من القطن الطبيعي 100%. مصممة بعناية لتكون الصديق المثالي لطفلك أثناء النوم.',
    price: 150,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1544208447-c0e8666579b6?auto=format&fit=crop&q=80&w=400',
    features: ['شغل يدوي بالكامل', 'قطن طبيعي مرخص', 'قابل للغسل في الغسالة']
  },
  {
    id: 'book-1',
    name: 'مغامرات في الغابة الملونة',
    description: 'كتاب تعليمي تفاعلي يساعد الأطفال على تعلم الألوان والحيوانات من خلال رسومات يدوية وحكايات شيقة.',
    price: 85,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    features: ['قصص مكتوبة بلغة عربية فصحى بسيطة', 'رسومات يدوية أصلية', 'مناسب لأعمار 3-7 سنوات']
  },
  {
    id: 'toy-2',
    name: 'مجموعة البناء الخشبية',
    description: 'مكعبات خشبية من خشب السرو الطبيعي، مصقولة بعناية ومطلية بألوان مائية آمنة للأطفال.',
    price: 220,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1587654780291-39c940c174ad?auto=format&fit=crop&q=80&w=400',
    features: ['خشب طبيعي مستدام', 'طلاء غير سام', 'تعزز مهارات التنسيق بين العين واليد']
  },
  {
    id: 'book-2',
    name: 'رحلة إلى النجوم والقمر',
    description: 'كتاب "ذكاء" يحفز الخيال العلمي لدى الأطفال، مع أنشطة تفاعلية وألغاز بسيطة في نهاية كل صفحة.',
    price: 95,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1532012197367-2836fb3ee8f2?auto=format&fit=crop&q=80&w=400',
    features: ['تحفيز التفكير المنطقي', 'حقائق علمية مبسطة', 'تفاعلي بالكامل']
  },
  {
    id: 'toy-3',
    name: 'دمية الحكواتي القماشية',
    description: 'دمية قماشية ترتدي الزي التقليدي، تأتي مع كتاب قصص صغير. رفيقة مثالية لسرد قصص ما قبل النوم.',
    price: 180,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1615486511484-6fb0ee19741e?auto=format&fit=crop&q=80&w=400',
    features: ['هوية ثقافية عربية', 'منسوجات فاخرة', 'قصة فريدة لكل دمية']
  },
  {
    id: 'book-3',
    name: 'كتاب الأشغال اليدوية الأول',
    description: 'دليل مبسط للأطفال للبدء في صنع ألعابهم الخاصة باستخدام مواد من الطبيعة والمنزل.',
    price: 70,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
    features: ['يعزز الاعتماد على النفس', 'صديق للبيئة', 'خطوات مصورة سهلة']
  }
];
