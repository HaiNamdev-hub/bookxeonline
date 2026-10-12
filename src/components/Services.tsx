import { Car, ShieldCheck, Navigation, ArrowRight } from 'lucide-react';

const services = [
  { 
    id: "01", 
    title: "Cơ động nội thành", 
    desc: "Di chuyển hàng ngày trong thành phố với giá rẻ nhất và thời gian chờ ngắn nhất.",
    icon: Car,
    highlight: false 
  },
  { 
    id: "02", 
    title: "Tài xế lái hộ", 
    desc: "Đã uống rượu bia? Đội ngũ tài xế chuyên nghiệp của chúng tôi sẽ đưa bạn và xe về nhà an toàn.",
    icon: ShieldCheck,
    highlight: true 
  },
  { 
    id: "03", 
    title: "Lên đường đường dài", 
    desc: "Đi tỉnh, du lịch, công tác với giá cước trọn gói ưu đãi, xe đời mới êm ái.",
    icon: Navigation,
    highlight: false 
  },
];

export default function Services() {
  return (
    <section id="dich-vu" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            DỊCH VỤ CỦA GORIDE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 text-white">Một nền tảng. Mọi hành trình.</h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Đáp ứng đa dạng nhu cầu di chuyển cá nhân, gia đình hoặc doanh nghiệp với trải nghiệm chuẩn 5 sao.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div 
              key={idx} 
              className={`group p-8 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between h-80 hover:-translate-y-2 ${
                card.highlight 
                  ? "bg-gradient-to-b from-[#222630] to-[#161820] border-orange-500/50 shadow-2xl shadow-orange-500/10 hover:border-orange-400" 
                  : "bg-[#161820] border-gray-800 hover:border-gray-600 hover:shadow-2xl"
              }`}
            >
              {card.highlight && (
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                  NỔI BẬT
                </span>
              )}

              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3.5 bg-gray-800/90 rounded-2xl text-orange-400 transition-colors duration-300 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-black shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-gray-700 group-hover:text-gray-500 transition-colors duration-300">{card.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>

              <a href="#tinh-cuoc" className="text-orange-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-4">
                Đặt dịch vụ <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}