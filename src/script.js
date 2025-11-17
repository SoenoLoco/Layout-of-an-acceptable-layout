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
        slidesPerView: 'auto',
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        }
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        }
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
        slidesPerView: 'auto',
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        }
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        }
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
        slidesPerView: 'auto',
        spaceBetween: 32,
        enabled: false,
        pagination: {
          enabled: false,
        }
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
