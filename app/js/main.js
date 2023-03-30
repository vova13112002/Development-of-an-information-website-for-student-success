// const $jq = jQuery.noConflict();

// $jq(document).ready(function () {
//   $jq(".header__slider").slick({
//     infinite: true,
//   });
// });
// $(function () {
//   $(".header__slider").slick({
//     infinite: true,

//     // dots: true,
//     infinite: true,
//     // speed: 500,
//     fade: true,
//     cssEase: "linear",
//     autoplay: true,
//     autoplaySpeed: 5000,
//   });
// });
//Зміна мови 
const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};

const homeTexts = {
  "home_page-title": {
    ua: "Розробка інформаційного веб-сайту для успішності студентів",
    en: "Development of an information website for student success",
  },
  "home_page-1": {
    ua: "Головна",
    en: "Home",
  },
    "home_page-2": {
    ua: "Навчання",
    en: "Education",
  },

    "home_page-3": {
    ua: "Навчальні заклади",
    en: "Educational institutions",
  },
    "home_page-4": {
    ua: "Керування часом",
    en: "Time management",
  },
    "home_page-5": {
    ua: "",
    en: "",
  },
    "home_page-6": {
    ua: "",
    en: "",
  },
 
};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    // case "/another_page.html":
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
function checkActiveLangButton() {
  switch (currentLang) {
    case "ua":
      document
        .querySelector('[data-btn="ua"]')
        .classList.add("header__btn_active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;
  }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log("navigator.language", checkBrowserLang());
//Тема

document.getElementById("myButton").addEventListener("click", (event) => {
  // event.preventDefault();
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }

  addDarkClassToHTML();
});

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector(".themetoggle span").textContent = "dark_mode";
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDarkTheme = true;
      // Оновлюємо відображення кнопки переключення теми

    } else {
      isDarkTheme = false;
      // Оновлюємо відображення кнопки переключення теми


      document.querySelector(".themetoggle span").textContent = "dark_mode";
    }
  } catch (err) {}
};

addDarkClassToHTML();
const button = document.getElementById("myButton");
// const image = document.getElementById(
  
// );

let isDarkTheme = false; // true, якщо встановлена темна тема, false - якщо встановлена світла тема
button.addEventListener("click", function () {
  if (isDarkTheme) {

  } else {

  }document.querySelector(".themetoggle").addEventListener("click", (event) => {
  // event.preventDefault();
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }

  addDarkClassToHTML();
});

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector(".themetoggle span").textContent = "dark_mode";
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDarkTheme = true;
      // Оновлюємо відображення кнопки переключення теми

    } else {
      isDarkTheme = false;
      // Оновлюємо відображення кнопки переключення теми


      document.querySelector(".themetoggle span").textContent = "dark_mode";
    }
  } catch (err) {}
};

addDarkClassToHTML();
const button = document.getElementById("myButton");
const image = document.getElementById(
  "myImageGitHub"
);

let isDarkTheme = false; // true, якщо встановлена темна тема, false - якщо встановлена світла тема
button.addEventListener("click", function () {
  if (isDarkTheme) {

  } else {

  }
  isDarkTheme = !isDarkTheme; // змінюємо тему сайту на протилежну
});

function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
}
  isDarkTheme = !isDarkTheme; // змінюємо тему сайту на протилежну
});

function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
}
