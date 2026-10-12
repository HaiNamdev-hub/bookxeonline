export default function Footer() {
  return (
    <footer className="bg-[#090a0c] border-t border-gray-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-tr from-orange-500 to-amber-400 text-black font-black p-2 rounded-lg text-lg">G</div>
            <span className="font-bold text-lg tracking-wider text-white">GORIDE</span>
          </div>
          <p className="text-gray-400 text-xs max-w-sm leading-relaxed mb-4">
            Ứng dụng đặt xe công nghệ di chuyển thông minh hàng đầu Việt Nam. An toàn, minh bạch và tiết kiệm.
          </p>
          <p className="text-xs text-orange-400 font-semibold">HOTLINE HỖ TRỢ: 1900 636 399</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-4">Dịch vụ</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#tinh-cuoc" className="hover:text-white transition-colors">Xe 4 chỗ nội thành</a></li>
            <li><a href="#tinh-cuoc" className="hover:text-white transition-colors">Xe 7 chỗ rộng rãi</a></li>
            <li><a href="#tinh-cuoc" className="hover:text-white transition-colors">Dịch vụ Lái hộ</a></li>
            <li><a href="#tinh-cuoc" className="hover:text-white transition-colors">Xe đi đường dài</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-4">Công ty</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Giới thiệu GoRide</a></li>
            <li><a href="#doi-tac" className="hover:text-white transition-colors">Trở thành đối tác</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tin tức sự kiện</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cơ hội việc làm</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-4">Hỗ trợ</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Quy chế hoạt động</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2026 GoRide Vietnam. Tất cả quyền được bảo lưu.</p>
        <p>Thiết kế bởi GoRide Tech Team</p>
      </div>
    </footer>
  );
}