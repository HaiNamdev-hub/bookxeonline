import { Car, MapPin, ShieldCheck, ArrowRight, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-b border-gray-800/40">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-inner">
            <Zap className="w-3.5 h-3.5 fill-orange-400 text-orange-400" /> Đặt xe công nghệ thế hệ mới
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none text-white tracking-tight">
            Đặt xe nhanh, <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              an tâm & minh bạch
            </span>
          </h1>
          
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Hệ thống kết nối tài xế thông minh trong 30 giây. Giá cước cố định không ngại kẹt xe hay thời tiết.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a 
              href="#tinh-cuoc"
              className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-[length:200%_auto] hover:bg-right text-black font-extrabold px-8 py-4 rounded-2xl text-base transition-all duration-500 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 flex items-center gap-3 group active:scale-95"
            >
              Đặt chuyến ngay 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <button className="bg-gray-900/80 hover:bg-gray-800 text-white font-semibold px-7 py-4 rounded-2xl text-base transition-all duration-300 border border-gray-700/80 hover:border-gray-500 hover:-translate-y-1 backdrop-blur-md">
              Tải App iOS / Android
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800/80 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-[#0d0f12] object-cover" 
                  src={`https://images.unsplash.com/photo-${1534528741775 + i * 100}?auto=format&fit=crop&w=100&q=80`} 
                  alt="User Avatar" 
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-white font-bold text-sm ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">+50.000 khách hàng tin dùng mỗi tháng</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Card Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="w-full h-[400px] sm:h-[480px] bg-[#14171c]/90 rounded-3xl overflow-hidden border border-gray-800/80 relative shadow-2xl flex items-center justify-center backdrop-blur-xl">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80" 
              alt="GoRide Ride Experience" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent"></div>
            
            {/* Live Floating Status Box */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1a1d24]/90 backdrop-blur-xl p-5 rounded-2xl border border-gray-700/60 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-tr from-orange-500 to-amber-400 text-black rounded-xl shadow-lg shadow-orange-500/20">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Đang di chuyển</p>
                    <p className="font-bold text-sm text-white">Quận 1 ➔ Sân bay Tân Sơn Nhất</p>
                  </div>
                </div>
                <span className="font-black text-xl text-orange-400">128.000đ</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-800">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> 8.5 km (~18 phút)</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Tài xế: Nguyễn Văn A</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}