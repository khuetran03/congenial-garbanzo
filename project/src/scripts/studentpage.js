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