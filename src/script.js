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

// Десктопные кнопки repair и checkstatus
const desktopRepairBtn = document.getElementById("repair");
const desktopCheckstatusBtn = document.getElementById("checkstatus");

if (desktopRepairBtn) {
  desktopRepairBtn.addEventListener("click", function () {
    openModal(repairMenu);
  });
}

if (desktopCheckstatusBtn) {
  desktopCheckstatusBtn.addEventListener("click", function () {
    openModal(checkstatusMenu);
  });
}

//call

const callMenu = document.getElementById("callMenu");
const callBtn = document.getElementById("call-btn");
const of3Btn = document.getElementById("off3Menu");

callBtn.addEventListener("click", function () {
  callMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

of3Btn.addEventListener("click", function () {
  callMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

//chat
const chatMenu = document.getElementById("chatMenu");
const chatBtn = document.getElementById("chat-btn");
const off4Btn = document.getElementById("off4Menu");

chatBtn.addEventListener("click", function () {
  chatMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

off4Btn.addEventListener("click", function () {
  chatMenu.classList.remove("open");
  document.documentElement.style.overflow = "";
});

//profile
const profileMenu = document.getElementById("profileMenu");
const profileBtn = document.getElementById("profile-btn");
const off5Btn = document.getElementById("off5Menu");

profileBtn.addEventListener("click", function () {
  profileMenu.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

off5Btn.addEventListener("click", function () {
  profileMenu.classList.remove("open");
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

//показать все
document.addEventListener("DOMContentLoaded", function () {
  const showAllContainer = document.querySelector(".show-all");
  const readMore = document.querySelector(".read-more");
  const additionalImageContainer = document.querySelector(
    ".additional-image-container"
  );

  let isExpanded = false;

  showAllContainer.addEventListener("click", function () {
    // Получаем базовый URL сайта
    const baseUrl = window.location.origin;

    if (!isExpanded) {
      additionalImageContainer.innerHTML = `
        <div class="swiper-slide slide2">
          <img class="brand-image" src="${baseUrl}/src/image/vitek.png" alt="" />
          <img class="brand-go" src="${baseUrl}/src/image/go.svg" alt="" />
        </div>
        <div class="swiper-slide slide2">
          <img class="brand-image" src="${baseUrl}/src/image/Phillips-Logo-2008.png" alt="" />
          <img class="brand-go" src="${baseUrl}/src/image/go.svg" alt="" />
        </div>
        <div class="swiper-slide slide2">
          <img class="brand-image" src="${baseUrl}/src/image/HansaLogo.png" alt="" />
          <img class="brand-go" src="${baseUrl}/src/image/go.svg" alt="" />
        </div>
      `;

      readMore.textContent = "Скрыть";
      showAllContainer.classList.add("expanded");
      isExpanded = true;
    } else {
      additionalImageContainer.innerHTML = "";

      readMore.textContent = "Показать все";
      showAllContainer.classList.remove("expanded");
      isExpanded = false;
    }
  });
});

//показать все 2
document.addEventListener("DOMContentLoaded", function () {
  const showAllCont = document.querySelector(".show-all2");
  const readMore2 = document.querySelector(".read-more2");
  const additionalSlideContainer = document.querySelector(
    ".additional-slide-container"
  );

  let isExpanded = false;

  showAllCont.addEventListener("click", function () {
    if (!isExpanded) {
      additionalSlideContainer.innerHTML = `
        <div class="swiper-slide slide3">
            <div class="technic-view">Ремонт телевизоров</div>
            <img class="brand-go-technic" src="./src/image/go.svg" alt="" />
          </div>
        <div class="swiper-slide slide3">
            <div class="technic-view">Ремонт видеоняни</div>
            <img class="brand-go-technic" src="./src/image/go.svg" alt="" />
          </div>
        <div class="swiper-slide slide3">
            <div class="technic-view">Ремонт кофемашины</div>
            <img class="brand-go-technic" src="./src/image/go.svg" alt="" />
          </div>
      `;

      readMore2.textContent = "Скрыть";
      showAllCont.classList.add("expanded");
      isExpanded = true;
    } else {
      additionalSlideContainer.innerHTML = "";

      readMore2.textContent = "Показать все";
      showAllCont.classList.remove("expanded");
      isExpanded = false;
    }
  });
});

//оверлей

const modalOverlay = document.getElementById("modalOverlay");

// Функции для показа/скрытия модалок с оверлеем
function openModal(modal) {
  modal.classList.add("open");
  modalOverlay.classList.add("active");
  document.documentElement.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modalOverlay.classList.remove("active");
  document.documentElement.style.overflow = "";
}

// Burger menu
burgerBtn.addEventListener("click", function () {
  openModal(burgerMenu);
});

closeBtn.addEventListener("click", function () {
  closeModal(burgerMenu);
});

// Repair menu
repairBtn.addEventListener("click", function () {
  openModal(repairMenu);
});

shutBtn.addEventListener("click", function () {
  closeModal(repairMenu);
});

// Checkstatus menu
checkstatusBtn.addEventListener("click", function () {
  openModal(checkstatusMenu);
});

offBtn.addEventListener("click", function () {
  closeModal(checkstatusMenu);
});

// Call menu
callBtn.addEventListener("click", function () {
  openModal(callMenu);
});

of3Btn.addEventListener("click", function () {
  closeModal(callMenu);
});

// Chat menu
chatBtn.addEventListener("click", function () {
  openModal(chatMenu);
});

off4Btn.addEventListener("click", function () {
  closeModal(chatMenu);
});

// Profile menu
profileBtn.addEventListener("click", function () {
  openModal(chatMenu);
});

off5Btn.addEventListener("click", function () {
  closeModal(chatMenu);
});
