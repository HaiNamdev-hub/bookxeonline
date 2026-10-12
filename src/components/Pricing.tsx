import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="bang-gia" className="py-20 bg-[#121418] border-t border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            GIÁ CƯỚC MINH BẠCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-4 text-white">Biết trước giá, an tâm lên xe.</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Giá cước hiển thị chính xác ngay trên ứng dụng trước khi bạn bấm đặt chuyến.
          </p>
          <ul className="space-y-3.5 mb-8">
            {[
              "Không tăng giá vô lý giờ cao điểm",
              "Ưu đãi voucher đến 30% mỗi tuần",
              "Hỗ trợ xuất hóa đơn VAT nhanh chóng"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card 4 chỗ */}
          <div className="bg-[#1a1d24] p-7 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <span className="text-xs text-gray-400 uppercase font-semibold">XE 4 CHỖ NỘI THÀNH</span>
            <h3 className="text-3xl font-black text-white mt-2">12.000đ <span className="text-xs text-gray-400 font-normal">/ km</span></h3>
            <div className="mt-6 pt-6 border-t border-gray-800/80 space-y-2.5 text-xs text-gray-400">
              <div className="flex justify-between"><span>Giá mở cửa:</span><span className="text-white font-medium">20.000đ</span></div>
              <div className="flex justify-between"><span>Sau 10km:</span><span className="text-white font-medium">10.000đ/km</span></div>
            </div>
            <a href="#tinh-cuoc" className="block text-center w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-300">
              Chọn loại xe
            </a>
          </div>

          {/* Card 7 chỗ */}
          <div className="bg-[#1a1d24] p-7 rounded-3xl border border-orange-500/50 relative shadow-2xl hover:border-orange-400 transition-all duration-300 hover:-translate-y-1">
            <span className="absolute -top-3 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
              NHIỀU NGUỜI CHỌN
            </span>
            <span className="text-xs text-gray-400 uppercase font-semibold">XE 7 CHỖ RỘNG RÃI</span>
            <h3 className="text-3xl font-black text-white mt-2">16.000đ <span className="text-xs text-gray-400 font-normal">/ km</span></h3>
            <div className="mt-6 pt-6 border-t border-gray-800/80 space-y-2.5 text-xs text-gray-400">
              <div className="flex justify-between"><span>Giá mở cửa:</span><span className="text-white font-medium">25.000đ</span></div>
              <div className="flex justify-between"><span>Sau 10km:</span><span className="text-white font-medium">13.000đ/km</span></div>
            </div>
            <a href="#tinh-cuoc" className="block text-center w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-400 text-black text-sm font-extrabold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20">
              Chọn loại xe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}