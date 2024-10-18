function showLogoutModal() {
  document.getElementById("logoutModal").style.display = "block";
}

function closeLogoutModal() {
  document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout() {
  // Chuyển hướng đến trang đăng nhập
  window.location.href = "http://127.0.0.1:5501/login_page.html";
}
function openhomepage() {
  // Chuyển hướng đến trang điều khiển
  window.location.href = "http://127.0.0.1:5501/home_page.html";
}
function opencoursepage() {
  // Chuyển hướng đến trang Quản lí khóa học
  window.location.href = "http://127.0.0.1:5501/course_page.html";
}
function openstudentpage() {
  // Chuyển hướng đến trang quản lí học viên
  window.location.href = "http://127.0.0.1:5501/student_page.html";
}
function openaccountpage() {
  // Chuyển hướng đến trang quản lí tài khoản
  window.location.href = "http://127.0.0.1:5501/account_page.html";
}
function openclasspage() {
  // Chuyển hướng đến trang quản lí lớp học
  window.location.href = "http://127.0.0.1:5501/class_page.html";
}
let employeeDatabase = [
  {
    id: 1,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn A",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 2,
    Email: "anv@rikkeiacademy.edu.vn",
    Password: "654321",
    Fullname: "Nguyễn Văn B",
    status1: "Đang bị khóa",
    status: true,
  },
  {
    id: 3,
    Email: "anv@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn văn C",
    status1: "Đang bị khóa",
    status: true,
  },
  {
    id: 4,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn D",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 5,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn E",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 6,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn F",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 7,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn G",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 8,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn H",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 9,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn I",
    status1: "Đang hoạt động",
    status: true,
  },
  {
    id: 10,
    Email: "any@rikkeiacademy.edu.vn",
    Password: "123456",
    Fullname: "Nguyễn Văn K",
    status1: "Đang hoạt động",
    status: true,
  },
];
let tbody = document.getElementById("tbody");
let selectedIndex = -1;
let selectedAction = "";

// Render danh sách tài khoản
function render() {
  tbody.innerHTML = "";
  employeeDatabase.forEach((course, index) => {
    let tr = `
            <tr>
                <td>${index + 1}</td>
                <td>${course.Email}</td>
                <td>${course.Password}</td>
                <td>${course.Fullname}</td>
                <td>${course.status1}</td>
                <td>
                    <span class="button button-edit" onclick="showLockModal(${index})" ${
      course.status1 === "Đang bị khóa" ? "disabled" : ""
    }>Khóa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="showUnlockModal(${index})" ${
      course.status1 === "Đang hoạt động" ? "disabled" : ""
    }>Mở khóa</span>
                </td>
            </tr>`;
    tbody.innerHTML += tr;
  });
}

// Hiển thị modal xác nhận khóa tài khoản
function showLockModal(index) {
  selectedIndex = index;
  selectedAction = "lock";
  const email = employeeDatabase[index].Email;
  document.getElementById(
    "lockModalText"
  ).innerText = `Bạn chắc chắn muốn khóa tài khoản ${email}?`;
  document.getElementById("lockModal").style.display = "block";
}

// Hiển thị modal xác nhận mở khóa tài khoản
function showUnlockModal(index) {
  selectedIndex = index;
  selectedAction = "unlock";
  const email = employeeDatabase[index].Email;
  document.getElementById(
    "unlockModalText"
  ).innerText = `Bạn chắc chắn muốn mở khóa tài khoản ${email}?`;
  document.getElementById("unlockModal").style.display = "block";
}

// Khóa tài khoản
function confirmLock() {
  if (selectedIndex !== -1) {
    employeeDatabase[selectedIndex].status1 = "Đang bị khóa";
    employeeDatabase[selectedIndex].status = false;
    render();
    closeModal("lockModal");
  }
}

// Mở khóa tài khoản
function confirmUnlock() {
  if (selectedIndex !== -1) {
    employeeDatabase[selectedIndex].status1 = "Đang hoạt động";
    employeeDatabase[selectedIndex].status = true;
    render();
    closeModal("unlockModal");
  }
}

// Đóng modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  selectedIndex = -1;
}

function searchCourses() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    tbody.innerHTML = ""; // Xóa nội dung cũ trong tbody

    // Lọc danh sách tài khoản dựa trên từ khóa
    const filteredAccounts = employeeDatabase.filter((account) => {
        return (
            account.Email.toLowerCase().includes(searchInput) ||
            account.Fullname.toLowerCase().includes(searchInput)
        );
    });

    // Hiển thị danh sách tài khoản đã lọc
    filteredAccounts.forEach((account, index) => {
        let tr = `
            <tr>
                <td>${index + 1}</td>
                <td>${account.Email}</td>
                <td>${account.Password}</td>
                <td>${account.Fullname}</td>
                <td>${account.status1}</td>
                <td>
                    <span class="button button-edit" onclick="showLockModal(${employeeDatabase.indexOf(account)})" ${account.status1 === "Đang bị khóa" ? 'disabled' : ''}>Khóa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="showUnlockModal(${employeeDatabase.indexOf(account)})" ${account.status1 === "Đang hoạt động" ? 'disabled' : ''}>Mở khóa</span>
                </td>
            </tr>`;
        tbody.innerHTML += tr;
    });

    // Nếu không tìm thấy tài khoản nào, có thể hiển thị một thông báo
    if (filteredAccounts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Không tìm thấy tài khoản nào.</td></tr>`;
    }
}
// Render
render();
