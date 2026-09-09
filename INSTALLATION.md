# 🚀 Hướng Dẫn Cài Đặt & Triển Khai

Hướng dẫn chi tiết để cài đặt và chạy Hệ Thống Quản Lý Điểm Danh.

## 1️⃣ Cài Đặt Cơ Bản (Không cần Backend)

### Cách 1: Mở Trực Tiếp trên Trình Duyệt
1. **Tải file `index.html` từ repository**
2. **Double-click vào `index.html`** hoặc kéo vào trình duyệt
3. **Ứng dụng sẽ hoạt động ngay lập tức**

✅ **Ưu điểm:**
- Không cần cài đặt
- Không cần máy chủ
- Hoạt động offline

### Cách 2: Sử Dụng Server Local (Khuyến Nghị)

#### Với Python 3:
```bash
# Vào thư mục chứa file
cd /path/to/attendance-tracker-app

# Chạy server
python -m http.server 8000
```

Sau đó truy cập: `http://localhost:8000`

#### Với Node.js:
```bash
# Cài đặt http-server
npm install -g http-server

# Chạy server
http-server

# Truy cập: http://localhost:8080
```

#### Với PHP:
```bash
# Chạy server
php -S localhost:8000

# Truy cập: http://localhost:8000
```

## 2️⃣ Triển Khai trên Web Hosting

### Bước 1: Chuẩn Bị File
- ✅ index.html
- ✅ styles.css
- ✅ app.js
- ✅ README.md

### Bước 2: Upload lên Hosting
1. Kết nối FTP với hosting của bạn
2. Tạo thư mục mới: `/attendance-app`
3. Upload tất cả file vào thư mục đó
4. Truy cập: `https://yourdomain.com/attendance-app/`

### Bước 3: Hỗ Trợ Hosting Phổ Biến

#### GitHub Pages (Miễn Phí)
```bash
# 1. Push code lên GitHub (đã được làm)
# 2. Vào Settings > Pages
# 3. Chọn Branch: main
# 4. Save
# 5. Truy cập: https://yourusername.github.io/attendance-tracker-app/
```

#### Netlify (Miễn Phí)
```bash
# 1. Kết nối GitHub repository
# 2. Build Command: (để trống)
# 3. Publish Directory: . (root)
# 4. Deploy
# 5. Ứng dụng sẽ có URL tự động
```

#### Firebase Hosting (Miễn Phí)
```bash
# 1. Cài Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Initialize project
firebase init hosting

# 4. Deploy
firebase deploy
```

#### Shared Hosting Thông Thường
1. Upload via FTP/SFTP
2. Không cần cấu hình đặc biệt
3. Truy cập qua URL của hosting

## 3️⃣ Cài Đặt Nâng Cao (Với Backend)

### Chuẩn Bị
- Node.js & npm
- MongoDB (tuỳ chọn) hoặc SQLite

### Bước 1: Clone Repository
```bash
git clone https://github.com/yourusername/attendance-tracker-app.git
cd attendance-tracker-app
```

### Bước 2: Cài Đặt Dependencies
```bash
npm install
```

### Bước 3: Tạo Backend (Node.js + Express)

Tạo file `server.js`:
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoints sẽ được thêm sau

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### Bước 4: Chạy Server
```bash
node server.js
```

## 4️⃣ Troubleshooting

### ❌ Lỗi: "CORS Error"
**Giải pháp:**
- Chạy qua localhost server (Python/Node.js)
- Hoặc deploy lên hosting có CORS hỗ trợ

### ❌ Lỗi: "LocalStorage not available"
**Giải pháp:**
- Chắc chắn JavaScript được bật
- Không ở trong private/incognito mode
- Kiểm tra storage quota

### ❌ Không thể xuất PDF/Excel
**Giải pháp:**
- Kiểm tra kết nối internet
- Tắt AdBlock
- Xóa cache và reload trang
- Thử trình duyệt khác

### ❌ Dữ liệu bị mất
**Giải pháp:**
- Xuất báo cáo định kỳ
- Tránh xóa cache trình duyệt
- Nếu cần, restore từ backup

## 5️⃣ Backup & Restore Dữ Liệu

### Xuất Dữ Liệu (Manual Backup)
```javascript
// Chạy trong Console trình duyệt
const data = {
    students: localStorage.getItem('attendanceApp_students'),
    attendance: localStorage.getItem('attendanceApp_attendance')
};
console.log(JSON.stringify(data, null, 2));
// Copy và lưu vào file JSON
```

### Restore Dữ Liệu
```javascript
// Chạy trong Console
const data = {/* paste từ backup file */};
localStorage.setItem('attendanceApp_students', data.students);
localStorage.setItem('attendanceApp_attendance', data.attendance);
location.reload();
```

## 6️⃣ Tối Ưu Hóa

### Tối Ưu CSS
```bash
# Cài CSSNano
npm install cssnano postcss-cli -g

# Minify CSS
postcss styles.css -o styles.min.css
```

### Tối Ưu JavaScript
```bash
# Cài Terser
npm install terser -g

# Minify JS
terser app.js -o app.min.js
```

### Tối Ưu HTML
```bash
# Cài html-minifier
npm install html-minifier -g

# Minify HTML
html-minifier --input-dir . --output-dir dist
```

## 7️⃣ Bảo Mật

### Khuyến Nghị
- ✅ Luôn sử dụng HTTPS khi deploy
- ✅ Không lưu dữ liệu nhạy cảm trong LocalStorage
- ✅ Validate tất cả input từ người dùng
- ✅ Backup dữ liệu thường xuyên

### Cấu Hình HTTPS (Netlify/GitHub Pages)
- Tự động được bật
- Không cần cấu hình thêm

### Cấu Hình HTTPS (Hosting Thông Thường)
- Mua SSL Certificate
- Hoặc sử dụng Let's Encrypt (miễn phí)

## 8️⃣ Performance Monitoring

### Kiểm Tra Kích Thước File
```bash
# Kiểm tra kích thước
du -sh *

# Output ví dụ:
# 7.8K  index.html
# 5.5K  styles.css
# 14K   app.js
# 27K   README.md
```

### Kiểm Tra Thời Gian Load
- F12 > Network tab
- Reload trang
- Xem thời gian loading

## 📚 Tài Liệu Thêm

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Deployment](https://docs.netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Express.js Guide](https://expressjs.com/)

## 🆘 Cần Giúp?

- 📧 Email: support@example.com
- 💬 GitHub Issues: https://github.com/itofmath/attendance-tracker-app/issues
- 📞 Hotline: +84 xxx xxx xxx

---

**Cập nhật:** 2024
**Phiên bản:** 1.0.0
