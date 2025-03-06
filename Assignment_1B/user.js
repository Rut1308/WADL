document.addEventListener("DOMContentLoaded", () => {
  const userTbody = document.getElementById("user-tbody");
  const clearAllBtn = document.getElementById("clear-all-btn");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.address}</td>
          <td>${user.gender}</td>
      `;
      userTbody.appendChild(row);
  });

  clearAllBtn.addEventListener("click", () => {
      localStorage.removeItem("users");
      userTbody.innerHTML = "";
  });
});
