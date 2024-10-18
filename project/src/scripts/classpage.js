function showLogoutModal() {
    document.getElementById("logoutModal").style.display = "block";
}

function closeLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout() {
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "http://127.0.0.1:5501/login_page.html"; 
};
function openhomepage () {
    // Chuyển hướng đến trang điều khiển
    window.location.href = "http://127.0.0.1:5501/home_page.html";
};
function opencoursepage () {
    // Chuyển hướng đến trang Quản lí khóa học
    window.location.href = "http://127.0.0.1:5501/course_page.html";
};
function openstudentpage () {
    // Chuyển hướng đến trang quản lí học viên
    window.location.href = "http://127.0.0.1:5501/student_page.html";
};
function openaccountpage () {
    // Chuyển hướng đến trang quản lí tài khoản
    window.location.href = "http://127.0.0.1:5501/account_page.html";
};
function openclasspage () {
    // Chuyển hướng đến trang quản lí lớp học
    window.location.href = "http://127.0.0.1:5501/class_page.html";
};
let employeeDatabase = [
    {
        id: 1,
        Code: "C001",
        Nameclass: "HN-JV230508",
        Teachername: "QuangND",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 1",
        status: true,
    },
    {
        id: 2,
        Code: "C002",
        Nameclass: "ĐN-JS230407",
        Teachername: "AnNV",
        Decription: "Javascript",
        NoS: "22",
        status1: "Hoạt động",
        Course: "Khóa học 1",
        status: true,
    },
    {
        id: 3,
        Code: "C003",
        Nameclass: "HCM-JV230425",
        Teachername: "BìnhBV",
        Decription: "Front-end",
        NoS: "25",
        status1: "Kết thúc",
        Course: "Khóa học 1",
        status: true,
    },
    {        
        id: 4,
        Code: "C004",
        Nameclass: "FK-JV230627",
        Teachername: "BìnhBV",
        Decription: "Back-end",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 2",
        status: true,
    },
    {
        id: 5,
        Code: "C005",
        Nameclass: "HN-JV230509",
        Teachername: "BìnhBV",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 1",
        status: true,
    },
    {
        id: 6,
        Code: "C006",
        Nameclass: "HN-JV230510",
        Teachername: "BìnhBV",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 3",
        status: true,
    },
    {
        id: 7,
        Code: "C007",
        Nameclass: "HN-JV230511",
        Teachername: "BìnhBV",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 3",
        status: true,
    },
    {    
        id: 8,
        Code: "C008",
        Nameclass: "HN-JV230512",
        Teachername: "BìnhBV",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 2",
        status: true,
    },
    {
        id: 9,
        Code: "C009",
        Nameclass: "HN-JV230508",
        Teachername: "Quang ND",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 2",
        status: true,
    },
    {
        id: 10,
        Code: "C010",
        Nameclass: "HN-JV230508",
        Teachername: "BìnhBV",
        Decription: "Java fullstack",
        NoS: "20",
        status1: "Chờ lớp",
        Course: "Khóa học 3",
        status: true,
    },

];

let tbody = document.getElementById("tbody"); 
let addModal = document.getElementById("addModal"); 
let editingIndex = null; // Biến để lưu chỉ mục lớp học đang chỉnh sửa


// Render dữ liệu
function render() {
    tbody.innerHTML = "";
    employeeDatabase.forEach((course, index) => {
        let tr = `
            <tr>
                <td>${index + 1}</td>
                <td>${course.Code}</td>
                <td>${course.Nameclass}</td>
                <td>${course.Teachername}</td>
                <td>${course.Decription}</td>
                <td>${course.NoS}</td>
                <td>${course.status1}</td>
                <td>${course.Course}</td>
                <td>
                    <span class="button button-edit" onclick="showEditModal(${index})">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="deleteCourse(${index})">Xóa</span>
                </td>
            </tr>`;
        tbody.innerHTML += tr;
    });
}

// Hiển thị modal thêm mới
function showAddModal() {
    document.getElementById("addModal").style.display = "block";
}

// Đóng modal thêm mới
function closeAddModal() {
    document.getElementById("addModal").style.display = "none";
}

// Hiển thị modal sửa và điền thông tin khóa học cần sửa
function showEditModal(index) {
    editingIndex = index;
    let course = employeeDatabase[index];

    // Điền thông tin vào các trường trong modal sửa
    document.getElementById("editCourseCode").value = course.Code; // Mã lớp học
    document.getElementById("editCourseName").value = course.Nameclass; // Tên lớp học
    document.getElementById("editTeacherName").value = course.Teachername; // Giảng viên
    document.getElementById("editNoS").value = course.NoS; // Sĩ số
    document.getElementById("editDescription").value = course.Decription; // Mô tả

    // Thiết lập trạng thái
    if (course.status1 === "Hoạt động") {
        document.getElementById("editStatus").value = "hoạt động";
    } else if (course.status1 === "Chờ lớp") {
        document.getElementById("editStatus").value = "chờ lớp";
    } else {
        document.getElementById("editStatus").value = "kết thúc";
    }

    // Hiển thị modal sửa
    document.getElementById("editModal").style.display = "block";
}

// Đóng modal sửa
function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

// Thêm mới lớp học
function addNewCourse() {
    let code = document.getElementById("addCourseCode").value.trim();
    let name = document.getElementById("addCourseName").value.trim();
    let teacher = document.getElementById("addTeacherName").value.trim();
    let nos = document.getElementById("addNoS").value.trim();
    let description = document.getElementById("addDescription").value.trim();
    let status = document.getElementById("addStatus").value;

    if (!code || !name || !teacher || !nos) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
    }

    employeeDatabase.push({
        id: employeeDatabase.length + 1,
        Code: code,
        Nameclass: name,
        Teachername: teacher,
        NoS: nos,
        Decription: description,
        status1: status,
        Course: "Khóa học", 
        status: status === "Hoạt động"
    });

    closeAddModal();
    render();
}

// Cập nhật khóa học sau khi chỉnh sửa
function updateCourse() {
    let code = document.getElementById("editCourseCode").value.trim();
    let name = document.getElementById("editCourseName").value.trim();
    let teacher = document.getElementById("editTeacherName").value.trim(); // Giảng viên
    let nuOfStudents = document.getElementById("editNoS").value.trim(); // Sĩ số
    let description = document.getElementById("editDescription").value.trim();
    let status = document.getElementById("editStatus").value; // Trạng thái
    // Kiểm tra xem người dùng có điền đầy đủ thông tin không
    if (!code || !name || !teacher || !nuOfStudents) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Cập nhật thông tin trong mảng employeeDatabase
    employeeDatabase[editingIndex] = {
        ...employeeDatabase[editingIndex],
        Code: code,
        Nameclass: name,
        Teachername: teacher,
        NoS: nuOfStudents,
        Decription: description,
        status1: status
    };

    render();
    closeEditModal();
}

let deleteIndex = null;

// Xóa khóa học
function deleteCourse(index) {
    deleteIndex = index; 
    document.getElementById("deleteModal").style.display = "block"; // Hiện modal xác nhận xóa
}

// Xác nhận xóa
function confirmDelete() {
    if (deleteIndex !== null) {
        employeeDatabase.splice(deleteIndex, 1); 
        render(); 
        closeDeleteModal(); // Đóng modal
    }
}

// Đóng modal xóa
function closeDeleteModal() {
    deleteIndex = null;
    document.getElementById("deleteModal").style.display = "none"; 
}
// Tìm kiếm khóa học
function searchCourses() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredCourses = employeeDatabase.filter(course => 
        course.Course.toLowerCase().includes(searchInput) || 
        course.Nameclass.toLowerCase().includes(searchInput)
    );
    
    tbody.innerHTML = "";
    filteredCourses.forEach((course, index) => {
        let tr = `
            <tr>
                <td>${index + 1}</td>
                <td>${course.Code}</td>
                <td>${course.Nameclass}</td>
                <td>${course.Teachername}</td>
                <td>${course.Course}</td>
                <td>${course.NoS}</td>
                <td>${course.status1}</td>
                <td>${course.Course}</td>
                <td>
                    <span class="button button-edit" onclick="showEditModal(${index})">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="deleteCourse(${index})">Xóa</span>
                </td>
            </tr>`; 
        tbody.innerHTML += tr;
    });
    if (filteredCourses.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">Không tìm thấy kết quả nào</td></tr>`;
    }
}

// render
render();