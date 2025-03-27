document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".dark-mode-toggle");
  const modeIcon = document.getElementById("mode-icon");
  const body = document.body;

  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
    }
  });
});
