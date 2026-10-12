import { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

export default function DriverRegistration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="doi-tac" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-950/80 via-blue-900/40 to-[#181a20] p-8 sm:p-12 rounded-3xl border border-blue-500/30 grid lg:grid-cols-2 gap-10 items-center shadow-2xl relative overflow-hidden">
        <div>
          <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-500/30">
            ĐỒNG HÀNH CÙNG GORIDE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-4 text-white leading-tight">Chủ động thời gian. <br />Tối ưu thu nhập.</h2>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Gia nhập cộng đồng tài xế chuyên nghiệp của GoRide để nhận nhiều ưu đãi đặc quyền và mức chiết khấu tốt nhất thị trường.
          </p>
          <div className="flex gap-6 pt-2">
            <div><p className="text-2xl font-black text-white">85%</p><p className="text-xs text-gray-400 mt-1">Thu nhập giữ lại</p></div>
            <div className="border-r border-gray-700/80"></div>
            <div><p className="text-2xl font-black text-white">Hằng tuần</p><p className="text-xs text-gray-400 mt-1">Rút tiền tự động</p></div>
            <div className="border-r border-gray-700/80"></div>
            <div><p className="text-2xl font-black text-white">24/7</p><p className="text-xs text-gray-400 mt-1">Hỗ trợ khẩn cấp</p></div>
          </div>
        </div>

        <div className="bg-[#14171d] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-white">Đăng ký thành công!</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">Bộ phận tuyển dụng GoRide sẽ liên hệ với bạn trong vòng 24 giờ tới.</p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-extrabold mb-1 text-white">ĐĂNG KÝ TRỞ THÀNH TÀI XẾ</h3>
              <p className="text-xs text-gray-400 mb-6">Nhận thưởng đến 2.000.000đ cho 50 chuyến đầu tiên</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  required
                  placeholder="Họ và tên" 
                  className="w-full bg-[#1c2027] border border-gray-700/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300" 
                />
                <input 
                  type="tel" 
                  required
                  placeholder="Số điện thoại Zalo" 
                  className="w-full bg-[#1c2027] border border-gray-700/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300" 
                />
                <div className="relative">
                  <select required className="w-full bg-[#1c2027] border border-gray-700/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 text-gray-300 appearance-none transition-all duration-300">
                    <option value="">Khu vực hoạt động</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                    <option value="dn">Đà Nẵng</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-4 pointer-events-none" />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-black font-extrabold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Gửi hồ sơ đăng ký ngay ➔
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}