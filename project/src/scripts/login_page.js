if (!window.accounts) {
  let accounts = JSON.parse(localStorage.getItem("accounts"));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Email:', email);
  console.log('Mật Khẩu:', password);
  
  // Check if the accounts data exists and is loaded correctly
  if (!accounts) {
    alert("Không có tài khoản nào trong hệ thống");
    return;
  }

  // Check xem tài khoản này có tồn tại trong hệ thống hay không
  let find = accounts.find(function (element) {
    return element.email === email;
  });

  if (!find) {
    alert(`Không có tài khoản với email: ${email} trong hệ thống`);
  } else {
    if (find.password !== password) {
      alert("Mật khẩu không đúng");
    } else {
      // Hiển thị đăng nhập thành công
      alert("Đăng nhập thành công");
      // Điều hướng người dùng sang trang chủ
      window.location.href = "homepage.html"; // Example of redirection
    }
  }
});