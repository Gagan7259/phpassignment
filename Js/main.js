const navItems = document.querySelector(".nav__items");
const openNavBtn = document.querySelector("#open_nav__btn");
const closeNavBtn = document.querySelector("#close_nav__btn");

const openNav = () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

// MANAGE CATEGORIES SIDE BUTTONS FUNCTIONALITY

const sidebar = document.querySelector("aside");
const showsidebtn = document.querySelector("#show__sidebar-btn");
const hidesidebtn = document.querySelector("#hide__sidebar-btn");

const showSidebar = () => {
  sidebar.style.left = "0";
  showsidebtn.style.display = "none";
  hidesidebtn.style.display = "inline-block";
};
const hideSidebar = () => {
  sidebar.style.left = "-100%";
  showsidebtn.style.display = "inline-block";
  hidesidebtn.style.display = "none";
};

showsidebtn.addEventListener("click", showSidebar);
hidesidebtn.addEventListener("click", hideSidebar);
