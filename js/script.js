// открытие меню
const sideMenu = document.querySelector('.left');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
    sideMenu.classList.toggle('animate');
})

closeBtn.addEventListener("click", () => {
      sideMenu.classList.add("fade-out");
    }
);
