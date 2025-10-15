// Hardcoded credentials (for demo only - NOT SECURE)
const validUsername = "admin";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const errorMsg = document.getElementById("error");

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    alert("Login successful!");
    // Redirect or load dashboard
    window.location.href = "dashboard.html"; // You can create this page
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
