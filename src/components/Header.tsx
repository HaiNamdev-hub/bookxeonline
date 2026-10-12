import { useState, useEffect } from 'react';
import { PhoneCall, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dịch vụ', href: '#dich-vu' },
    { name: 'Tính cước xe', href: '#tinh-cuoc' },
    { name: 'Bảng giá', href: '#bang-gia' },
    { name: 'Đối tác tài xế', href: '#doi-tac' },
    { name: 'Về GoRide', href: '#ve-goride' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0d0f12]/80 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl shadow-black/80 py-3' 
        : 'bg-[#0d0f12] border-b border-gray-800/40 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gradient-to-tr from-orange-500 to-amber-400 text-black font-black p-2.5 rounded-xl flex items-center justify-center text-xl shadow-lg">
              G
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-wider block leading-none text-white group-hover:text-orange-400 transition-colors">GORIDE</span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase flex items-center gap-1 mt-0.5">
              <Sparkles className="w-2.5 h-2.5 text-orange-400" /> Di chuyển thông minh
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-1.5 hover:text-orange-400 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Hotline & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3 text-sm bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-800/80 shadow-inner">
            <PhoneCall className="w-4 h-4 text-orange-400 animate-pulse" />
            <div>
              <p className="text-[10px] text-gray-400 leading-none font-semibold">HOTLINE 24/7</p>
              <p className="font-bold text-white tracking-wider">1900 636 399</p>
            </div>
          </div>
          <a 
            href="#tinh-cuoc" 
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-black rounded-xl group bg-gradient-to-br from-orange-500 to-amber-400 group-hover:from-orange-600 group-hover:to-amber-500 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 active:scale-95"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-[10px] flex items-center gap-2">
              Đặt xe ngay 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-xl bg-gray-800/50 border border-gray-700/50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121418]/95 backdrop-blur-2xl border-b border-orange-500/20 px-6 py-6 space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-orange-400 text-base font-medium py-1 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm bg-gray-900/60 p-3 rounded-xl border border-gray-800">
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span className="font-bold text-white">1900 636 399</span>
            </div>
            <a 
              href="#tinh-cuoc"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-orange-500 to-amber-400 text-black font-bold py-3.5 rounded-xl text-center shadow-lg shadow-orange-500/20"
            >
              Đặt xe ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}