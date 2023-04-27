window.addEventListener("load", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header-menu");
  menuToggle && menuToggle.addEventListener("click", handleMenuToggle);
  function handleMenuToggle(e) {
    menu && menu.classList.add("is-active");
  }
  document.addEventListener("click", handleClickOutSide);
  function handleClickOutSide(e) {
    if(e.target.matches(".menu-toggle") ||  e.target.matches(".header-menu, .header-menu *")){
      return;
    }
    menu && menu.classList.remove("is-active");
  }
})
const footerTitle = document.querySelectorAll(".footer-title");
const footerMenus = document.querySelectorAll(".footer-menu");
const footerIcons = document.querySelectorAll(".footer-icon");
let footerMenu = "";
let footerIcon = "";
for(let i = 0 ; i < footerTitle.length ; i++) {
  
  
  footerTitle[i].onclick = function (e) {
    footerMenu = footerMenus[i];
    footerIcon = footerIcons[i];
    footerMenu.classList.toggle("is-active");
    footerIcon.classList.toggle("is-active"); 
  }
}
$(document).ready(function(){
  $('.review-main-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidestoScroll: 1,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left-long' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right-long' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
});
