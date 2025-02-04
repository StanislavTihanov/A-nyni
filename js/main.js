"use strict"

//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз
window.addEventListener('scroll', () => {
  if(pageYOffset > 50) {
    document.querySelector('.header').classList.add('header__bg');
  } else {
    document.querySelector('.header').classList.remove('header__bg');
  }
});
//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз


//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его
//------------------------------------------------------------------------скролинг в статье
document.querySelectorAll('.article__nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const headerHeight = document.querySelector('header').offsetHeight; // Высота хедера

      if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
  });
});
//------------------------------------------------------------------------скролинг в статье


//------------------------------------------------------------------------Слайдер
const reviewsSlider = document.querySelector('.reviews-slider');
if (reviewsSlider) {
  new Swiper(reviewsSlider, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 4,
      }
    }
  });
}
const articlesSlider = document.querySelector('.articles-slider');
if (articlesSlider) {
  new Swiper(articlesSlider, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.art-button-next',
      prevEl: '.art-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
const popupSlider = document.querySelector('.popup-slider');
if (popupSlider) {
  new Swiper(popupSlider, {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.swiper-next-popup',
      prevEl: '.swiper-prev-popup',
    },
  });
}

const similarSlider = document.querySelector('.similar-slider');
if (similarSlider ) {
  new Swiper(similarSlider , {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 60,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.similar-button-next',
      prevEl: '.similar-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      }
    }
  });
}
//------------------------------------------------------------------------Слайдер

//------------------------------------------------------------------------select выпадающий список
document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Функция для закрытия текущего дропдауна
  function closeCurrentDropdown() {
    dropDownList.classList.remove('dropdown__list--active');
    dropDownBtn.classList.remove('dropdown__button--active');
  }

  // Открыть/закрыть текущий дропдаун
  dropDownBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Остановить всплытие события
    e.preventDefault(); // Предотвращаем отправку формы
    const isActive = dropDownList.classList.contains('dropdown__list--active');

    // Закрываем все дропдауны перед открытием текущего
    document.querySelectorAll('.dropdown__list--active').forEach(function(activeList) {
      activeList.classList.remove('dropdown__list--active');
    });
    document.querySelectorAll('.dropdown__button--active').forEach(function(activeButton) {
      activeButton.classList.remove('dropdown__button--active');
    });

    // Если текущий дропдаун не был активным, открываем его
    if (!isActive) {
      dropDownList.classList.add('dropdown__list--active');
      dropDownBtn.classList.add('dropdown__button--active');
    }
  });

  // Выбор элемента списка
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation(); // Остановить всплытие события
      e.preventDefault(); // Предотвращаем отправку формы
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      closeCurrentDropdown(); // Закрываем текущий дропдаун после выбора
    });
  });

  // Закрытие при клике снаружи
  document.addEventListener('click', function (e) {
    if (!dropDownWrapper.contains(e.target)) {
      closeCurrentDropdown(); // Закрываем только текущий дропдаун
    }
  });

  // Закрытие при нажатии Tab или Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      closeCurrentDropdown(); // Закрываем только текущий дропдаун
    }
  });
});

// Инициализация кнопки после загрузки
function initMyButton() {
  const myButton = document.getElementById('myButton');
  
  if (myButton && myButton.style.display !== 'none') {
    myButton.addEventListener('click', function(event) {
      event.preventDefault();
    });
  }
}
window.onload = initMyButton;

//------------------------------------------------------------------------select выпадающий список


//------------------------------------------------------------------------popup
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");


let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    })
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock () {
  setTimeout(function () {
    if(lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
  }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
//------------------------------------------------------------------------popup


//------------------------------------------------------------------------Проверка формы
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', formSend);
  });

  async function formSend(e) {
    e.preventDefault();
    const form = e.target;
    let error = formValidate(form);
    
    if (error === 0) {
      form.classList.add('_sending');
      // Здесь можно добавить логику отправки формы (например, AJAX-запрос)
    }
  }

  function formValidate(form) {
    let error = 0;
    const formReq = form.querySelectorAll('._req');

    formReq.forEach((input) => {
      formRemoveError(input);

      if (input.classList.contains('_number')) { 
        if (!phoneTest(input)) { 
          formAddError(input);
          error++;
        }
      } else if (input.value.trim() === '') { // Проверка, что поле не пустое
        formAddError(input);
        error++;
      }
    });
    
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function phoneTest(input) {
    return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(input.value);
  }
});
//------------------------------------------------------------------------проверка форм
//------------------------------------------------------------------------раскрытие карточек 
document.addEventListener("DOMContentLoaded", function () {
  const buttonMore = document.querySelector(".button-more");

  if (buttonMore) {
    buttonMore.addEventListener("click", function () {
      // Показываем все карточки, убирая у них класс card--none
      document.querySelectorAll(".card--none").forEach(card => {
        card.classList.remove("card--none");
      });

      // Скрываем кнопку "Показать еще"
      this.style.display = "none";
    });
  }
});

//------------------------------------------------------------------------раскрытие карточек 