const steps = [
  { step: "1", title: "Đặt xe trong vài giây", desc: "Nhập điểm đi và điểm đến ngay trên ứng dụng di động." },
  { step: "2", title: "Rất nhanh có tài xế", desc: "Hệ thống tự động tìm và kết nối tài xế gần bạn nhất." },
  { step: "3", title: "An toàn, thanh toán linh hoạt", desc: "Theo dõi hành trình và thanh toán qua thẻ, ví điện tử hoặc tiền mặt." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">ĐƠN GIẢN & NHANH CHÓNG</span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-14 text-white">Đặt chuyến chỉ với 3 bước</h2>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 border border-orange-500/20 shadow-lg shadow-orange-500/5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
              {item.step}
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}