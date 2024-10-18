let accounts = JSON.parse(localStorage.getItem("accounts"));

accounts = [
    {
        id: 1, 
        email: "admin1@gmail.com",
        password: "123123",
    },
    {
        id: 2, 
        email: "admin2@gmail.com",
        password: 123123
    },
];
localStorage.setItem("accounts", JSON.stringify(accounts));