const themeSelector = document.querySelector("select");


function changeTheme() {
    const value = themeSelector.value;
    if (value == "dark") {
        document.body.classList.add("dark");
        document.querySelector("footer img").setattribute("src", "byui-logo-white.png");
    } else {
        document.body.classList.remove("dark");
    }
}

themeSelector.addEventListener('change', changeTheme);