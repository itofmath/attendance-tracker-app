# 📋 Hệ Thống Quản Lý Điểm Danh

Một ứng dụng web hiện đại để quản lý điểm danh học sinh/nhân viên với các tính năng thống kê và xuất báo cáo.

## ✨ Tính Năng Chính

### 1. **Quản Lý Học Sinh/Nhân Viên**
- ✅ Thêm học sinh/nhân viên với mã số, tên và lớp
- ✅ Xóa học sinh/nhân viên khỏi danh sách
- ✅ Quản lý theo lớp/bộ phận

### 2. **Điểm Danh Hàng Ngày**
- ✅ Đánh dấu trạng thái: Có mặt, Vắng, Muộn
- ✅ Ghi chú cho từng buổi
- ✅ Lọc theo lớp
- ✅ Thay đổi ngày tùy ý

### 3. **Thống Kê Theo Kỳ**
- ✅ Tính toán số lần có mặt, vắng, muộn
- ✅ Tính chỉ số chuyên cần (%)
- ✅ Lọc theo kỳ học (Kỳ 1, Kỳ 2)
- ✅ Lọc theo lớp

### 4. **Xuất Báo Cáo**
- ✅ Xuất file PDF với định dạng chuyên nghiệp
- ✅ Xuất file Excel (.xlsx) có định dạng đẹp
- ✅ Xem trước báo cáo trước khi xuất

### 5. **Bảng Điều Khiển (Dashboard)**
- ✅ Thống kê tổng quan
- ✅ Số học sinh có mặt hôm nay
- ✅ Số học sinh vắng hôm nay
- ✅ Số học sinh chuyên cần trong kỳ

## 🚀 Cách Sử Dụng

### Bước 1: Mở ứng dụng
- Tải file `index.html` lên server hoặc mở trực tiếp trên trình duyệt
- Không cần cài đặt hay máy chủ backend

### Bước 2: Thêm học sinh
1. Vào tab **"Học Sinh"**
2. Nhập: Tên, Mã số, Lớp
3. Nhấn **"Thêm"**

### Bước 3: Điểm danh
1. Vào tab **"Điểm Danh"**
2. Chọn ngày và lớp (tuỳ chọn)
3. Đánh dấu trạng thái cho từng học sinh
4. Nhấn **"Lưu"** cho mỗi học sinh

### Bước 4: Xem thống kê
1. Vào tab **"Thống Kê"**
2. Chọn kỳ học (Kỳ 1 hoặc Kỳ 2)
3. Chọn lớp (tuỳ chọn)
4. Nhấn **"Tải Thống Kê"**

### Bước 5: Xuất báo cáo
1. Vào tab **"Báo Cáo"**
2. Chọn kỳ học và lớp
3. Chọn **"Xuất PDF"** hoặc **"Xuất Excel"**

## 📊 Chỉ Số Chuyên Cần

Chỉ số chuyên cần được tính dựa trên công thức:

```
Chuyên Cần (%) = (Số lần có mặt / Tổng số buổi) × 100
```

**Thang đánh giá:**
- 🟢 **≥ 90%**: Chuyên cần (Xanh)
- 🟡 **80-89%**: Bình thường (Vàng)
- 🔴 **< 80%**: Cần cải thiện (Đỏ)

## 💾 Lưu Trữ Dữ Liệu

- Tất cả dữ liệu được lưu trong **Local Storage** của trình duyệt
- Dữ liệu được lưu tự động khi bạn lưu điểm danh
- Không cần kết nối internet sau khi tải trang

**Lưu ý:** Dữ liệu sẽ bị mất nếu xóa cache trình duyệt. Hãy xuất báo cáo thường xuyên!

## 📁 Cấu Trúc Dự Án

```
attendance-tracker-app/
├── index.html       # Trang chính
├── styles.css       # Định dạng CSS
├── app.js           # Logic JavaScript
└── README.md        # Hướng dẫn này
```

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang web
- **CSS3** - Giao diện responsive
- **JavaScript (Vanilla)** - Logic xử lý
- **LocalStorage API** - Lưu trữ dữ liệu
- **html2pdf.js** - Xuất PDF
- **XLSX.js** - Xuất Excel

## 📋 Yêu Cầu Hệ Thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- JavaScript được bật
- LocalStorage hỗ trợ

## 🎨 Giao Diện

- **Responsive Design**: Tương thích với mọi kích thước màn hình
- **Modern UI**: Giao diện hiện đại với gradient màu
- **Dark Mode Compatible**: Thích ứng với theme của hệ thống
- **Print Friendly**: Có thể in trực tiếp từ trình duyệt

## 📝 Ví Dụ Sử Dụng

### Thêm học sinh mới
```
Tên: Nguyễn Văn A
Mã số: 001
Lớp: 10A1
```

### Điểm danh
```
Ngày: 2024-01-10
Trạng thái: Có mặt ✓
Ghi chú: (để trống)
```

### Xuất báo cáo
```
Kỳ: Kỳ 1
Lớp: 10A1
Format: PDF hoặc Excel
```

## 🐛 Khắc Phục Sự Cố

### Dữ liệu không lưu được
- Kiểm tra xem LocalStorage có bị vô hiệu hóa không
- Xóa cache trình duyệt và tải lại trang

### Không thể xuất PDF/Excel
- Kiểm tra kết nối internet (cần CDN libraries)
- Tắt AdBlock nếu có
- Thử trình duyệt khác

### Dữ liệu bị mất
- LocalStorage có thể bị xóa khi xóa cache
- Hãy xuất báo cáo thường xuyên để lưu bản sao

## 💡 Mẹo Sử Dụng

1. **Sao lưu dữ liệu**: Xuất báo cáo định kỳ
2. **Nhập dữ liệu nhanh**: Sử dụng Tab để di chuyển giữa các trường
3. **Lọc thông minh**: Chọn lớp để chỉ xem học sinh trong lớp đó
4. **Kiểm tra chuyên cần**: Dùng tab Thống kê để xem tình hình của mỗi học sinh

## 📞 Hỗ Trợ

Nếu gặp vấn đề hoặc có đề xuất cải tiến, vui lòng tạo issue trên GitHub.

## 📄 Giấy Phép

MIT License - Bạn có thể sử dụng, sửa đổi và phân phối ứng dụng này tự do.

## 🎯 Kế Hoạch Phát Triển Tương Lai

- [ ] Hỗ trợ máy chủ backend (Node.js)
- [ ] Đăng nhập với tài khoản
- [ ] Import dữ liệu từ Excel
- [ ] Biểu đồ thống kê nâng cao
- [ ] Gửi email báo cáo
- [ ] App mobile (React Native)
- [ ] Nhiều kỳ học trong năm

---

**Phiên bản**: 1.0.0  
**Cập nhật cuối**: 2024  
**Tác giả**: Attendance Management Team
