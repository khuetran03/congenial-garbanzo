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
        Course: "RA01",
        Nameclass: "Khóa học 1",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 2,
        Course: "RA02",
        Nameclass: "Khóa học 2",
        Time: "2000",
        status1: "Không hoạt động",
        status: true,
    },
    {
        id: 3,
        Course: "RA03",
        Nameclass: "Khóa học 3",
        Time: "1500",
        status1: "Hoạt động",
        status: true,
    },
    {        
        id: 4,
        Course: "RA04",
        Nameclass: "Khóa học 4",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 5,
        Course: "RA05",
        Nameclass: "Khóa học 5",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 6,
        Course: "RA06",
        Nameclass: "Khóa học 6",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 7,
        Course: "RA07",
        Nameclass: "Khóa học 7",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {    
        id: 8,
        Course: "RA08",
        Nameclass: "Khóa học 8",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 9,
        Course: "RA09",
        Nameclass: "Khóa học 9",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },
    {
        id: 10,
        Course: "RA010",
        Nameclass: "Khóa học 10",
        Time: "1000",
        status1: "Hoạt động",
        status: true,
    },

];

let tbody = document.getElementById("tbody");
let addModal = document.getElementById("addModal");
let courseCodeInput = document.getElementById("courseCode");
let courseNameInput = document.getElementById("courseName");
let courseTimeInput = document.getElementById("courseTime");
let editingIndex = null;

// Render dữ liệu
function render() {
    tbody.innerHTML = "";
    employeeDatabase.forEach((course, index) => {
        let tr = `
            <tr>
                <td>${index + 1}</td>
                <td>${course.Course}</td>
                <td>${course.Nameclass}</td>
                <td>${course.Time}</td>
                <td>${course.status1}</td>
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
    document.getElementById("editCourseCode").value = course.Course;
    document.getElementById("editCourseName").value = course.Nameclass;
    document.getElementById("editCourseTime").value = course.Time;
    document.getElementById("editActiveStatus").checked = course.status1 === "Hoạt động";
    document.getElementById("editInactiveStatus").checked = course.status1 === "Không hoạt động";
    document.getElementById("editModal").style.display = "block";
}

// Đóng modal sửa
function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

// Thêm mới khóa học
function addNewCourse() {
    let code = document.getElementById("addCourseCode").value.trim();
    let name = document.getElementById("addCourseName").value.trim();
    let time = document.getElementById("addCourseTime").value.trim();
    let isActive = document.getElementById("addActiveStatus").checked;

    if (!code || !name || !time) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    employeeDatabase.push({
        id: employeeDatabase.length + 1,
        Course: code,
        Nameclass: name,
        Time: time,
        status1: isActive ? "Hoạt động" : "Không hoạt động",
        status: isActive
    });

    closeAddModal();
    render();
}

// Cập nhật khóa học
function updateCourse() {
    let code = document.getElementById("editCourseCode").value.trim();
    let name = document.getElementById("editCourseName").value.trim();
    let time = document.getElementById("editCourseTime").value.trim();
    let isActive = document.getElementById("editActiveStatus").checked;

    if (!code || !name || !time) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    employeeDatabase[editingIndex] = {
        ...employeeDatabase[editingIndex],
        Course: code,
        Nameclass: name,
        Time: time,
        status1: isActive ? "Hoạt động" : "Không hoạt động",
        status: isActive
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
                <td>${course.Course}</td>
                <td>${course.Nameclass}</td>
                <td>${course.Time}</td>
                <td>${course.status1}</td>
                <td>
                    <button class="button button-edit" onclick="showEditModal(${index})">Sửa</button>
                </td>
                <td>
                    <button class="button button-delete" onclick="showDeleteModal(${index})">Xóa</button>
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