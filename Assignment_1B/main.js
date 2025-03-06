document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registration-form");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const gender = document.getElementById("gender").value;
      const termsChecked = document.getElementById("terms").checked;

      if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }

      if (!termsChecked) {
          alert("You must agree to the terms and conditions!");
          return;
      }

      const newUser = { name, phone, email, address, gender };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      registrationForm.reset();
      window.location.href = "user.html";
  });
});
