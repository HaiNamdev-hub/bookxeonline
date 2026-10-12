import { Users, Car, Star, Clock } from 'lucide-react';

const statsData = [
  { icon: Users, stat: "10,000+", label: "Chuyến đi mỗi ngày" },
  { icon: Car, stat: "500+", label: "Tài xế sẵn sàng" },
  { icon: Star, stat: "4.9/5", label: "Đánh giá từ khách hàng" },
  { icon: Clock, stat: "24/7", label: "Hỗ trợ khách hàng" },
];

export default function Stats() {
  return (
    <section className="py-10 bg-[#16181b] border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-5 rounded-2xl bg-[#1c1f24] border border-gray-800/80 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="p-3 bg-gray-800/90 text-orange-400 rounded-xl">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{item.stat}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}