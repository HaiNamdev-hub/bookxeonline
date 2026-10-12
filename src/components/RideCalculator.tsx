import { useState } from 'react';
import { Car, Navigation, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RideCalculator() {
  const [distance, setDistance] = useState<number>(10);
  const [vehicleType, setVehicleType] = useState<'car4' | 'car7' | 'valet'>('car4');
  const [isPeak, setIsPeak] = useState<boolean>(false);

  const calculateFare = () => {
    let baseRate = 12000;
    if (vehicleType === 'car7') baseRate = 16000;
    if (vehicleType === 'valet') baseRate = 22000;

    let total = distance * baseRate;
    if (isPeak) total *= 1.15; // Giờ cao điểm tăng 15%
    return Math.round(total).toLocaleString('vi-VN');
  };

  return (
    <section id="tinh-cuoc" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b from-[#181b22] to-[#121418] rounded-3xl border border-orange-500/30 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
            ƯỚC TÍNH CƯỚC PHÍ TRỰC TIẾP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">Tính giá cước minh bạch trong 1 giây</h2>
          <p className="text-gray-400 text-sm mt-2">Chọn lộ trình và loại xe để xem cước phí dự kiến không phát sinh</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Form controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">1. Chọn loại dịch vụ xe</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'car4', label: 'Xe 4 chỗ', icon: Car, desc: '12k/km' },
                  { id: 'car7', label: 'Xe 7 chỗ', icon: Navigation, desc: '16k/km' },
                  { id: 'valet', label: 'Lái hộ', icon: ShieldCheck, desc: '22k/km' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVehicleType(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-24 ${
                      vehicleType === item.id
                        ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                        : 'bg-[#1a1d24] border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${vehicleType === item.id ? 'text-orange-400' : 'text-gray-500'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">{item.label}</p>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                <span>2. Khoảng cách di chuyển:</span>
                <span className="text-orange-400 font-bold">{distance} km</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>1 km</span>
                <span>50 km</span>
                <span>100 km</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#1a1d24] rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3">
                <Zap className={`w-5 h-5 ${isPeak ? 'text-amber-400' : 'text-gray-500'}`} />
                <div>
                  <p className="text-xs font-bold text-white">Chế độ giờ cao điểm (+15%)</p>
                  <p className="text-[10px] text-gray-400">Áp dụng giờ tan tầm 17h-19h</p>
                </div>
              </div>
              <button
                onClick={() => setIsPeak(!isPeak)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  isPeak ? 'bg-orange-500' : 'bg-gray-800'
                }`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isPeak ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
          </div>

          {/* Result card */}
          <div className="lg:col-span-5 bg-[#1f232c] p-8 rounded-3xl border border-gray-700/80 shadow-2xl flex flex-col justify-between h-full relative">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">TỔNG CƯỚC DỰ KIẾN</span>
              <div className="mt-2 mb-6">
                <span className="text-4xl font-black text-white">{calculateFare()}</span>
                <span className="text-orange-400 font-bold text-xl ml-1">đ</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-800/80 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Giá cố định suốt hành trình</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Miễn phí hủy chuyến trong 5 phút đầu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bảo hiểm chuyến đi lên tới 100.000.000đ</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-black font-extrabold py-4 rounded-2xl text-sm transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
              Xác nhận đặt chuyến xe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}