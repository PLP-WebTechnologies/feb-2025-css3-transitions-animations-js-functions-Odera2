function savePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

// Apply Stored Preferences
const themeToggleBtn = document.getElementById("themeToggle");
const colorPicker = document.getElementById("colorPicker");
const currentTheme = getPreference("theme") || "light-theme";
const storedColor = getPreference("accentColor") || "#3498db";

document.body.classList.add(currentTheme);
document.documentElement.style.setProperty("--accent-color", storedColor);
colorPicker.value = storedColor;

// Theme Toggle
themeToggleBtn.addEventListener("click", function() {
    let newTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
    savePreference("theme", newTheme);
});

// Accent Color Picker
colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;
    document.documentElement.style.setProperty("--accent-color", selectedColor);
    savePreference("accentColor", selectedColor);
});

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", function() {
    sidebar.classList.add("open");
});

closeMenu.addEventListener("click", function() {
    sidebar.classList.remove("open");
});

// Modal Toggle
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
