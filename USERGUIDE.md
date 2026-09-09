# 📖 Hướng Dẫn Sử Dụng Chi Tiết

Tài liệu hướng dẫn đầy đủ về cách sử dụng Hệ Thống Quản Lý Điểm Danh.

## 📋 Mục Lục

1. [Giao Diện Chính](#giao-diện-chính)
2. [Quản Lý Học Sinh](#quản-lý-học-sinh)
3. [Điểm Danh](#điểm-danh)
4. [Báo Cáo & Thống Kê](#báo-cáo--thống-kê)
5. [Cài Đặt](#cài-đặt)
6. [Mẹo & Thủ Thuật](#mẹo--thủ-thuật)

---

## 🎨 Giao Diện Chính

### Các Tab Chính

```
┌─────────────────────────────────────────────────────┐
│  📚 Quản Lý Học Sinh  │  ✓ Điểm Danh  │  📊 Báo Cáo │
└─────────────────────────────────────────────────────┘
```

Ứng dụng có 3 tab chính:
- **Quản Lý Học Sinh**: Thêm, sửa, xóa thông tin học sinh
- **Điểm Danh**: Ghi nhận điểm danh hàng ngày
- **Báo Cáo**: Xem thống kê và xuất báo cáo

---

## 👥 Quản Lý Học Sinh

### Thêm Học Sinh Mới

**Bước 1:** Chuyển sang tab **Quản Lý Học Sinh**

**Bước 2:** Nhập thông tin:
```
Mã học sinh: HS001 (có thể để trống, hệ thống tự sinh)
Họ và tên: Nguyễn Văn A
Lớp: 10A1
Email: nguyenvana@school.edu.vn (tuỳ chọn)
Số điện thoại: 0123456789 (tuỳ chọn)
```

**Bước 3:** Nhấn **"Thêm Học Sinh"**

✅ **Học sinh sẽ được thêm vào danh sách ngay lập tức**

### Sửa Thông Tin Học Sinh

1. Tìm học sinh trong danh sách
2. Nhấn nút **"Sửa"** (biểu tượng ✏️)
3. Chỉnh sửa thông tin cần thay đổi
4. Nhấn **"Cập Nhật"**

### Xóa Học Sinh

1. Tìm học sinh trong danh sách
2. Nhấn nút **"Xóa"** (biểu tượng 🗑️)
3. Xác nhận xóa

⚠️ **Cảnh báo**: Xóa học sinh sẽ xóa toàn bộ dữ liệu điểm danh của họ

### Tìm Kiếm Học Sinh

- Sử dụng thanh tìm kiếm
- Tìm theo tên, mã HS, hoặc lớp
- Tìm kiếm không phân biệt hoa thường

---

## ✓ Điểm Danh

### Ghi Nhận Điểm Danh Ngày

**Bước 1:** Chuyển sang tab **Điểm Danh**

**Bước 2:** Chọn ngày
- Mặc định là hôm nay
- Có thể chọn ngày khác bằng lịch

**Bước 3:** Ghi nhận trạng thái
- ✅ **Có Mặt** (Present)
- ❌ **Vắng Mặt** (Absent)
- ⚠️ **Muộn** (Late)
- 🏥 **Phép** (Excused)

**Bước 4:** Nhấn **"Lưu Điểm Danh"**

### Chỉnh Sửa Điểm Danh

1. Chọn ngày cần chỉnh sửa
2. Thay đổi trạng thái học sinh
3. Nhấn **"Lưu Điểm Danh"** để cập nhật

### Xem Lịch Sử Điểm Danh

- Chọn học sinh
- Nhấn **"Xem Chi Tiết"**
- Xem toàn bộ lịch sử điểm danh

---

## 📊 Báo Cáo & Thống Kê

### Xem Thống Kê Tổng Quát

Tab **Báo Cáo** hiển thị:
- 📈 Biểu đồ tỷ lệ điểm danh
- 📋 Bảng thống kê chi tiết
- 👤 Thống kê theo học sinh
- 📅 Thống kê theo ngày

### Bộ Lọc Báo Cáo

```
Lựa chọn Lớp: [Chọn]
Từ Ngày: [YYYY-MM-DD]
Đến Ngày: [YYYY-MM-DD]
Trạng Thái: [Tất Cả / Có Mặt / Vắng / Muộn / Phép]
```

### Xuất Báo Cáo

#### 📄 Xuất PDF
1. Chọn ngày/lớp cần xuất
2. Nhấn **"Xuất PDF"**
3. Chọn vị trí lưu file

**Nội dung PDF:**
- Tiêu đề báo cáo
- Ngày xuất
- Bảng điểm danh chi tiết
- Thống kê tổng hợp

#### 📊 Xuất Excel
1. Chọn ngày/lớp cần xuất
2. Nhấn **"Xuất Excel"**
3. File sẽ được tải về

**Định dạng Excel:**
- Cột: Mã HS, Tên, Lớp, Ngày, Trạng Thái
- Có thể chỉnh sửa và phân tích thêm

#### 📋 In Báo Cáo
1. Nhấn **"In"** (Ctrl+P)
2. Chọn máy in
3. Chọn định dạng giấy (A4)
4. Nhấn **"In"**

### Thống Kê Chi Tiết

#### Theo Học Sinh
```
Nguyễn Văn A
├── Tổng ngày: 20
├── Có mặt: 18 (90%)
├── Vắng: 1 (5%)
├── Muộn: 1 (5%)
└── Phép: 0 (0%)
```

#### Theo Lớp
```
Lớp 10A1
├── Tổng HS: 40
├── Có mặt TB: 38 (95%)
├── Vắng TB: 1.5 (3.75%)
└── Muộn TB: 0.5 (1.25%)
```

---

## ⚙️ Cài Đặt

### Tùy Chỉnh Trạng Thái Điểm Danh

1. Vào **Cài Đặt** (nếu có)
2. Chỉnh sửa danh sách trạng thái
3. Lưu thay đổi

### Tùy Chỉnh Giao Diện

- **Chế Độ Sáng/Tối**: Click biểu tượng mặt trăng/mặt trời
- **Kích Thước Font**: Điều chỉnh trong cài đặt
- **Ngôn Ngữ**: Chọn tiếng Việt hoặc English

### Quản Lý Dữ Liệu

#### Sao Lưu Dữ Liệu
```javascript
// Trong Console (F12)
const backup = {
    students: localStorage.getItem('attendanceApp_students'),
    attendance: localStorage.getItem('attendanceApp_attendance')
};
console.log(JSON.stringify(backup));
// Copy và lưu vào file .json
```

#### Khôi Phục Dữ Liệu
```javascript
// Paste dữ liệu backup
const data = {/* paste here */};
localStorage.setItem('attendanceApp_students', data.students);
localStorage.setItem('attendanceApp_attendance', data.attendance);
location.reload();
```

#### Xóa Tất Cả Dữ Liệu
⚠️ **Cảnh báo**: Hành động này không thể hoàn tác!

```javascript
localStorage.clear();
location.reload();
```

---

## 💡 Mẹo & Thủ Thuật

### Các Phím Tắt

| Phím Tắt | Chức Năng |
|----------|----------|
| `Ctrl+P` | In báo cáo |
| `Ctrl+S` | Lưu dữ liệu |
| `Ctrl+F` | Tìm kiếm |
| `Tab` | Di chuyển giữa các trường |
| `Enter` | Xác nhận |

### Tối Ưu Hiệu Suất

**Với nhiều học sinh (>500):**
- Sử dụng bộ lọc để giảm dữ liệu
- Chia dữ liệu theo lớp
- Xuất báo cáo định kỳ và xóa dữ liệu cũ

### Xử Lý Tình Huống Thường Gặp

#### ❓ Quên ghi điểm danh hôm nay?
- Chọn ngày hôm nay
- Ghi nhận trạng thái
- Nhấn "Lưu Điểm Danh"
- Có thể chỉnh sửa bất kỳ lúc nào

#### ❓ Học sinh vắng nhiều ngày liên tiếp?
- Chọn từng ngày và ghi "Vắng"
- Hoặc ghi "Phép" nếu có giấy phép

#### ❓ Cần thay đổi thông tin học sinh cũ?
- Vào tab "Quản Lý Học Sinh"
- Tìm học sinh
- Nhấn "Sửa" và chỉnh sửa

#### ❓ Muốn xem học sinh nào vắng nhất?
- Vào tab "Báo Cáo"
- Lọc theo trạng thái "Vắng Mặt"
- Sắp xếp theo số lần vắng

### Công Thức Tính Phần Trăm

```
Tỷ lệ Có Mặt (%) = (Số lần Có Mặt / Tổng ngày) × 100
Tỷ lệ Vắng (%) = (Số lần Vắng / Tổng ngày) × 100
Tỷ lệ Muộn (%) = (Số lần Muộn / Tổng ngày) × 100
```

---

## 🔒 Bảo Mật & Quyền Riêng Tư

- ✅ Dữ liệu được lưu trên máy tính của bạn
- ✅ Không gửi dữ liệu đến máy chủ
- ✅ Để bảo vệ quyền riêng tư, sao lưu dữ liệu định kỳ
- ✅ Không chia sẻ file localStorage với người khác

---

## ❓ FAQ (Câu Hỏi Thường Gặp)

**Q: Dữ liệu có bị mất khi tắt trình duyệt?**
A: Không, dữ liệu được lưu trong LocalStorage và vẫn tồn tại.

**Q: Có thể sử dụng trên nhiều thiết bị?**
A: Có, nhưng dữ liệu trên mỗi thiết bị là độc lập. Sử dụng sao lưu/khôi phục để đồng bộ.

**Q: Tối đa bao nhiêu học sinh?**
A: Có thể quản lý hàng nghìn học sinh, nhưng hiệu suất tốt nhất với <5000.

**Q: Có hỗ trợ tiếng Anh?**
A: Có, chọn ngôn ngữ trong cài đặt.

**Q: Có thể truy cập offline?**
A: Có, ứng dụng hoạt động hoàn toàn offline.

---

## 📞 Hỗ Trợ & Phản Hồi

- 📧 Email: support@example.com
- 🐛 Báo cáo lỗi: https://github.com/itofmath/attendance-tracker-app/issues
- 💬 Trao đổi ý kiến: https://github.com/itofmath/attendance-tracker-app/discussions

---

**Cập nhật:** 2024
**Phiên bản:** 1.0.0
**Tác giả:** itofmath
