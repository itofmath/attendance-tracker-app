// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadStudents();
    loadAttendance();
    setTodayDate();
    updateDashboard();
});

// Local Storage Management
const STORAGE_KEY = {
    STUDENTS: 'attendanceApp_students',
    ATTENDANCE: 'attendanceApp_attendance'
};

// ==================== Students Management ====================

function addStudent() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    const studentClass = document.getElementById('studentClass').value;

    if (!name || !id || !studentClass) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    let students = getStudents();
    
    // Check if ID already exists
    if (students.some(s => s.id === id)) {
        alert('Mã số này đã tồn tại!');
        return;
    }

    const student = {
        id: id,
        name: name,
        class: studentClass,
        createdAt: new Date().toISOString()
    };

    students.push(student);
    localStorage.setItem(STORAGE_KEY.STUDENTS, JSON.stringify(students));
    
    // Clear inputs
    document.getElementById('studentName').value = '';
    document.getElementById('studentId').value = '';
    document.getElementById('studentClass').value = '';

    loadStudents();
    updateDashboard();
    alert('Thêm học sinh thành công!');
}

function deleteStudent(studentId) {
    if (confirm('Bạn có chắc muốn xóa học sinh này?')) {
        let students = getStudents();
        students = students.filter(s => s.id !== studentId);
        localStorage.setItem(STORAGE_KEY.STUDENTS, JSON.stringify(students));
        loadStudents();
        updateDashboard();
        alert('Xóa thành công!');
    }
}

function loadStudents() {
    const students = getStudents();
    const tbody = document.getElementById('studentsList');
    tbody.innerHTML = '';

    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #999;">Chưa có học sinh nào</td></tr>';
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>
                <button class="delete" onclick="deleteStudent('${student.id}')">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ==================== Attendance Management ====================

function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('attendanceDate').value = today;
}

function loadAttendance() {
    const students = getStudents();
    const date = document.getElementById('attendanceDate').value;
    const selectedClass = document.getElementById('attendanceClass').value;
    
    const tbody = document.getElementById('attendanceList');
    tbody.innerHTML = '';

    let filteredStudents = students;
    if (selectedClass) {
        filteredStudents = students.filter(s => s.class === selectedClass);
    }

    if (filteredStudents.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #999;">Không có học sinh nào</td></tr>';
        return;
    }

    filteredStudents.forEach(student => {
        const attendance = getAttendanceRecord(student.id, date);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <input type="radio" name="status_${student.id}" value="present" 
                    ${attendance.status === 'present' ? 'checked' : ''}>
            </td>
            <td>
                <input type="radio" name="status_${student.id}" value="absent" 
                    ${attendance.status === 'absent' ? 'checked' : ''}>
            </td>
            <td>
                <input type="radio" name="status_${student.id}" value="late" 
                    ${attendance.status === 'late' ? 'checked' : ''}>
            </td>
            <td>
                <input type="text" id="note_${student.id}" value="${attendance.note}" placeholder="Ghi chú">
            </td>
            <td>
                <button onclick="saveAttendance('${student.id}', '${date}')">Lưu</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterAttendanceByClass() {
    loadAttendance();
}

function saveAttendance(studentId, date) {
    const status = document.querySelector(`input[name="status_${studentId}"]:checked`)?.value || 'present';
    const note = document.getElementById(`note_${studentId}`).value;

    let attendance = JSON.parse(localStorage.getItem(STORAGE_KEY.ATTENDANCE)) || [];
    
    // Remove existing record for this student on this date
    attendance = attendance.filter(a => !(a.studentId === studentId && a.date === date));
    
    // Add new record
    attendance.push({
        studentId: studentId,
        date: date,
        status: status,
        note: note,
        timestamp: new Date().toISOString()
    });

    localStorage.setItem(STORAGE_KEY.ATTENDANCE, JSON.stringify(attendance));
    updateDashboard();
    alert('Lưu thành công!');
}

function getAttendanceRecord(studentId, date) {
    const attendance = JSON.parse(localStorage.getItem(STORAGE_KEY.ATTENDANCE)) || [];
    const record = attendance.find(a => a.studentId === studentId && a.date === date);
    return record || { status: 'present', note: '' };
}

// ==================== Statistics ====================

function loadStatistics() {
    const term = document.getElementById('statsTermSelect').value;
    const selectedClass = document.getElementById('statsClassSelect').value;
    const students = getStudents();
    const attendance = JSON.parse(localStorage.getItem(STORAGE_KEY.ATTENDANCE)) || [];
    
    const tbody = document.getElementById('statisticsTable');
    tbody.innerHTML = '';

    let filteredStudents = students;
    if (selectedClass) {
        filteredStudents = students.filter(s => s.class === selectedClass);
    }

    filteredStudents.forEach(student => {
        const stats = calculateStudentStats(student.id, attendance, term);
        const diligence = stats.total > 0 
            ? ((stats.present / stats.total) * 100).toFixed(1) 
            : 'N/A';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${stats.present}</td>
            <td>${stats.absent}</td>
            <td>${stats.late}</td>
            <td style="font-weight: bold; color: ${diligence >= 90 ? '#27ae60' : diligence >= 80 ? '#f39c12' : '#e74c3c'}">
                ${diligence}%
            </td>
        `;
        tbody.appendChild(row);
    });
}

function calculateStudentStats(studentId, attendance, term) {
    const termDates = getTermDates(term);
    
    const records = attendance.filter(a => 
        a.studentId === studentId && 
        a.date >= termDates.start && 
        a.date <= termDates.end
    );

    let stats = { present: 0, absent: 0, late: 0, total: records.length };
    
    records.forEach(record => {
        if (record.status === 'present') stats.present++;
        else if (record.status === 'absent') stats.absent++;
        else if (record.status === 'late') stats.late++;
    });

    return stats;
}

function getTermDates(term) {
    const currentYear = new Date().getFullYear();
    if (term === '1') {
        return {
            start: `${currentYear}-08-01`,
            end: `${currentYear}-12-31`
        };
    } else {
        return {
            start: `${currentYear}-01-01`,
            end: `${currentYear}-07-31`
        };
    }
}

// ==================== Reports ====================

function prepareReportData() {
    const term = document.getElementById('reportTermSelect').value;
    const selectedClass = document.getElementById('reportClassSelect').value;
    const students = getStudents();
    const attendance = JSON.parse(localStorage.getItem(STORAGE_KEY.ATTENDANCE)) || [];
    
    let filteredStudents = students;
    if (selectedClass) {
        filteredStudents = students.filter(s => s.class === selectedClass);
    }

    const data = filteredStudents.map(student => {
        const stats = calculateStudentStats(student.id, attendance, term);
        const diligence = stats.total > 0 
            ? ((stats.present / stats.total) * 100).toFixed(1) 
            : 'N/A';

        return {
            id: student.id,
            name: student.name,
            class: student.class,
            present: stats.present,
            absent: stats.absent,
            late: stats.late,
            diligence: diligence
        };
    });

    return data;
}

function updateReportPreview() {
    const data = prepareReportData();
    const tbody = document.getElementById('reportTableBody');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
        return;
    }

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.class}</td>
            <td>${row.present}</td>
            <td>${row.absent}</td>
            <td>${row.late}</td>
            <td>${row.diligence}%</td>
        `;
        tbody.appendChild(tr);
    });
}

function exportPDF() {
    updateReportPreview();
    const element = document.getElementById('reportPreview');
    const term = document.getElementById('reportTermSelect').value;
    const termText = term === '1' ? 'Kỳ 1' : 'Kỳ 2';

    const opt = {
        margin: 10,
        filename: `bao-cao-diem-danh-${termText}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'landscape', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(element).save();
    alert('Xuất PDF thành công!');
}

function exportExcel() {
    updateReportPreview();
    const data = prepareReportData();
    const term = document.getElementById('reportTermSelect').value;
    const termText = term === '1' ? 'Kỳ 1' : 'Kỳ 2';

    // Prepare data for Excel
    const excelData = [
        ['BÁO CÁO ĐIỂM DANH - ' + termText],
        ['Ngày xuất:', new Date().toLocaleDateString('vi-VN')],
        [],
        ['Mã Số', 'Tên', 'Lớp', 'Có Mặt', 'Vắng', 'Muộn', 'Chuyên Cần (%)']
    ];

    data.forEach(row => {
        excelData.push([
            row.id,
            row.name,
            row.class,
            row.present,
            row.absent,
            row.late,
            row.diligence
        ]);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    worksheet['!cols'] = [
        { wch: 12 },
        { wch: 20 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 15 }
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, termText);
    XLSX.writeFile(workbook, `bao-cao-diem-danh-${termText}.xlsx`);
    alert('Xuất Excel thành công!');
}

// ==================== Dashboard ====================

function updateDashboard() {
    const students = getStudents();
    const attendance = JSON.parse(localStorage.getItem(STORAGE_KEY.ATTENDANCE)) || [];
    const today = new Date().toISOString().split('T')[0];

    // Total students
    document.getElementById('totalStudents').textContent = students.length;

    // Present today
    const presentToday = attendance.filter(a => 
        a.date === today && a.status === 'present'
    ).length;
    document.getElementById('presentToday').textContent = presentToday;

    // Absent today
    const absentToday = attendance.filter(a => 
        a.date === today && a.status === 'absent'
    ).length;
    document.getElementById('absentToday').textContent = absentToday;

    // Diligent this term (90% or higher)
    const term = '1';
    let diligentCount = 0;
    students.forEach(student => {
        const stats = calculateStudentStats(student.id, attendance, term);
        if (stats.total > 0) {
            const diligence = (stats.present / stats.total) * 100;
            if (diligence >= 90) diligentCount++;
        }
    });
    document.getElementById('diligent').textContent = diligentCount;
}

// ==================== Tab Navigation ====================

function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Load data based on tab
    if (tabName === 'attendance') {
        loadAttendance();
    } else if (tabName === 'statistics') {
        loadStatistics();
    } else if (tabName === 'reports') {
        updateReportPreview();
    } else if (tabName === 'dashboard') {
        updateDashboard();
    }
}

// ==================== Helper Functions ====================

function getStudents() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.STUDENTS)) || [];
}

// Set default date on page load
window.addEventListener('load', function() {
    setTodayDate();
});

// Auto-update dashboard when attendance date changes
document.addEventListener('change', function(e) {
    if (e.target.id === 'attendanceDate') {
        loadAttendance();
    }
    if (e.target.id === 'reportTermSelect' || e.target.id === 'reportClassSelect') {
        updateReportPreview();
    }
    if (e.target.id === 'statsTermSelect' || e.target.id === 'statsClassSelect') {
        loadStatistics();
    }
});
