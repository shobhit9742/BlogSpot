let loginAd = document.getElementById("loginAd");

loginAd.addEventListener("click", () => {
    login();
})



// Dummy database to store user information
let users = [
    { username: 'sagar@1234.com', password: '123456' },
    { username: 'shobhit@123mail.com', password: '999999' },
    { username: 'jayant@hotmail.com', password: '000000' }
];
// Function to handle signup
function signup() {
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;

    // Check if username is already taken
    for (let user of users) {
        if (user.username === username) {
            alert('Username already taken!');
            return;
        }
    }

    // Add new user to the database
    users.push({ username, password });
    alert('Signup successful!');
}

// Function to handle login
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    // Check if user exists and password matches
    for (let user of users) {
        if (user.username === username && user.password === password) {
            window.location.href = "./admin.html";
            alert('Login successful!');
            return;
        }
        // else { 
        //     window.location.href = "./admin.html";
        // }
    }

    alert('Invalid username or password!');
}