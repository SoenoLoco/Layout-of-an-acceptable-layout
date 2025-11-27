// Ждем загрузки Swiper из CDN
document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, что Swiper загружен
  if (typeof Swiper === "undefined") {
    return;
  }

  // Слайдер для брендов
  const brandsSwiper = new Swiper(".brands", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        },
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        },
      },
    },
    pagination: {
      el: ".brands .swiper-pagination",
      clickable: true,
      enabled: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

  // Слайдер для техники
  const technicSwiper = new Swiper(".technic", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        },
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        },
      },
    },
    pagination: {
      el: ".technic .swiper-pagination",
      clickable: true,
      enabled: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

  // Слайдер для цен
  const priceSwiper = new Swiper(".price", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        },
      },
      1024: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".price .swiper-pagination",
      clickable: true,
      enabled: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

  // переключение по клику
  const swiper1Element = document.querySelector(".swiper1");

  const tabs = swiper1Element.querySelectorAll(".swiper1-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active-tab"));

      this.classList.add("active-tab");

      this.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  });
});

//burger

const burgerMenu = document.getElementById("burgerMenu");
const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("closeMenu");

burgerBtn.addEventListener("click", function () {
  burgerMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  burgerMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

//repair

const repairMenu = document.getElementById("repairMenu");
const repairBtn = document.getElementById("repair-btn");
const shutBtn = document.getElementById("shutMenu");

repairBtn.addEventListener("click", function () {
  repairMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

shutBtn.addEventListener("click", function () {
  repairMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

const repMenu = document.getElementById("repairMenu");
const repBtn = document.getElementById("repair");
const ofBtn = document.getElementById("shutMenu");

repBtn.addEventListener("click", function () {
  repMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

ofBtn.addEventListener("click", function () {
  repMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

//checkstatus

const checkstatusMenu = document.getElementById("checkstatusMenu");
const checkstatusBtn = document.getElementById("checkstatus-btn");
const offBtn = document.getElementById("offMenu");

checkstatusBtn.addEventListener("click", function () {
  checkstatusMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

offBtn.addEventListener("click", function () {
  checkstatusMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

const checstatusMenu = document.getElementById("checkstatusMenu");
const checstatusBtn = document.getElementById("checkstatus");
const offfBtn = document.getElementById("offMenu");

checstatusBtn.addEventListener("click", function () {
  checstatusMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

offfBtn.addEventListener("click", function () {
  checstatusMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});


// читать далее
document.addEventListener("DOMContentLoaded", function () {
  const readMoreContainer = document.querySelector(".read-more-container");
  const readMoreText = document.querySelector(".read-more-text");
  const arrow = document.querySelector(".arrow");
  const additionalTextContainer = document.querySelector(
    ".additional-text-container"
  );

  let isExpanded = false;

  readMoreContainer.addEventListener("click", function () {
    if (!isExpanded) {
      additionalTextContainer.innerHTML +=
        "<p>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>";

      readMoreText.textContent = "Скрыть";
      readMoreContainer.classList.add("expanded");
      isExpanded = true;
    } else {

      additionalTextContainer.innerHTML = "";

      readMoreText.textContent = "Читать далее";
      readMoreContainer.classList.remove("expanded");
      isExpanded = false;
    }
  });
});
