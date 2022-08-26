const menu = document.querySelector("#menu_navbar")
const menuToggle = document.querySelector('#icon_menu');
console.log(menu, menuToggle)

menuToggle.addEventListener("click", function(){menu.classList.toggle("menu_show")})
