// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile,  bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle  } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import SplitType from 'split-type'

// import lightGallery from 'lightgallery';

// Plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'



// var videoHero = document.getElementById("heroVideo");
// function setPosterForMobile() {
//   if (window.innerWidth > 500) {
//     videoHero.setAttribute("poster", "files/video.webp");
//   }
// }
// if (videoHero) {
//   setPosterForMobile();
// }


document.addEventListener("DOMContentLoaded", function() {


    // ОСТАНОВИТЬ/ВОСПРОИЗВЕСТИ ГЛАВНОЕ ВИДЕО ПО КЛИКУ ===========================================
    var video = document.getElementById('heroVideo');
    var playPauseButton = document.querySelector('.hero__control');

    if (playPauseButton) {
      playPauseButton.addEventListener('click', function () {
        if (video.paused) {
          video.play();
          playPauseButton.classList.remove('paused');
          video.classList.remove('paused');
        } else {
                video.pause();
                playPauseButton.classList.add('paused');
                video.classList.add('paused');
            }
        });
    }
// -------------------------------------------------------------------------------------

  // == ЗАПУС ВИДЕО ЭЛЕМЕНТОВ ЕСЛИ IPHONE В РЕЖИМЕ LOWE MODE ===============================
  if (isMobile.iOS()) {
        const videoElements = document.querySelectorAll('video');
  
        if (videoElements.length > 0) {
        
            Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
                get: function () {
                    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
                }
            });
          
            videoElements.forEach(videoElement => {
                if (!videoElement.hasAttribute('playsinline')) {
                    videoElement.setAttribute('playsinline', '');
                }
            });
          
            function attemptPlay(videoElement) {
                if (!videoElement.playing) {
                    videoElement.play().catch(error => {
                        console.error('Failed to play video:', error);
                    });
                }
            }
          
            document.body.addEventListener('click', () => {
                videoElements.forEach(videoElement => attemptPlay(videoElement));
            });
          
            document.body.addEventListener('touchstart', () => {
                videoElements.forEach(videoElement => attemptPlay(videoElement));
            });
        }
  }
  
  // =====================================================================


  // const splitTextLines = document.querySelectorAll('.split-lines');
  // const splitTextWords = document.querySelectorAll('.split-words');
  // const splitTextBoth = document.querySelectorAll('.split-both');

  // if (splitTextLines.length > 0) {
  //   splitTextLines.forEach(element => {
  //     const splitText = new SplitType(element, { types: 'lines' });
  
  //     window.addEventListener("resize", function() {
  //       splitText.split();
  //     });
  //   });
  // }
  // if (splitTextWords.length > 0) {
  //   splitTextWords.forEach(element => {
  //     const splitText = new SplitType(element, { types: 'words' });
  
  //     window.addEventListener("resize", function() {
  //       splitText.split();
  //     });
  //   });
  // }
  // if (splitTextBoth.length > 0) {
  //   splitTextBoth.forEach(element => {
  //     const splitText = new SplitType(element, { types: 'lines, words' });
  
  //     window.addEventListener("resize", function() {
  //       splitText.split();
  //     });
  //   });
  // }
  const splitTextLines = document.querySelectorAll('.split-lines');
  const splitTextWords = document.querySelectorAll('.split-words');
  const splitTextBoth = document.querySelectorAll('.split-both');
  const splitSetSpan = document.querySelectorAll('.split-words.set-span');
  
  function initSplitType() {
    // Если существуют элементы с классом .split-lines
    if (splitTextLines.length > 0) {
      splitTextLines.forEach(element => {
        new SplitType(element, { types: 'lines' });
      });
    }
  
    // Если существуют элементы с классом .split-words
    if (splitTextWords.length > 0) {
      splitTextWords.forEach(element => {
        new SplitType(element, { types: 'words' });

        // Проставляем индексы для всех слов
        const words = element.querySelectorAll('.word');
        words.forEach((word, index) => {
          word.style.setProperty('--index', index);
        });
      });
    }
  
    // Если существуют элементы с классом .split-both
    if (splitTextBoth.length > 0) {
      splitTextBoth.forEach(element => {
        new SplitType(element, { types: 'lines, words' });

        // Проставляем индексы для всех слов
        const words = element.querySelectorAll('.word');
        words.forEach((word, index) => {
          word.style.setProperty('--index', index);
        });
      });
    }

    // Добавляем <span> для каждого слова внутри .split-words.set-span
    if (splitSetSpan.length > 0) {
      splitSetSpan.forEach(splitSetSpan => {
        const words = splitSetSpan.querySelectorAll('.word');
        
        words.forEach(word => {
          const text = word.textContent.trim();
          word.innerHTML = `<span class="word-span">${text}</span>`;
        });
      });
    }
  }
  
  // Инициализация SplitType при загрузке
  initSplitType();




  // // Функция для обновления индексов и расстановки их заново
  // const splitBoth = document.querySelectorAll('.split-both');
  // const splitWords = document.querySelectorAll('.split-words');
  // // const blockContents = document.querySelectorAll('.block-about__content');

  // function updateIndexes() {
    
  //   splitBoth.forEach((splitElement) => {
  //     const words = splitElement.querySelectorAll('.word');
      
  //     words.forEach((word, index) => {
  //       word.style.setProperty('--index', index);
  //     });
  //   });
  //   splitWords.forEach((splitElement) => {
  //     const words = splitElement.querySelectorAll('.word');
      
  //     words.forEach((word, index) => {
  //       word.style.setProperty('--index', index);
  //     });
  //   });
  // }
  
  // if (splitBoth || splitWords) {
  //   updateIndexes();
  // }
  

    // ИНДЕКСЫ ДЛЯ TRANSITION-DELAY (блок services-main) ========================================================
    const leftItems = document.querySelectorAll('.items-serv-left__item');
    const rightItems = document.querySelectorAll('.items-serv-right__item');
    const brandsRelationship = document.querySelectorAll('.relationship__brand');
    const lastIndex = leftItems.length > 0 ? leftItems.length - 1 : 0;
    const startIndex = lastIndex + 1;
    
    if (leftItems && rightItems && brandsRelationship) {
      leftItems.forEach((item, index) => {
        item.style.setProperty('--index', index);
      });
      
      const isWideScreen = window.matchMedia('(min-width: 30.061em)').matches;
      if (isWideScreen) {
        brandsRelationship.forEach((item, index) => {
          item.style.setProperty('--index', index);
        });
      }
      
      rightItems.forEach((item, index) => {
        item.style.setProperty('--index', startIndex + index);
      });
    }
    
    function updateIndexesRel() {
      const brandsRelationship = document.querySelectorAll('.relationship__brand');
      if (brandsRelationship.length > 0) {
        const isWideScreen = window.matchMedia('(min-width: 30.061em)').matches;
      
        brandsRelationship.forEach((item, index) => {
          if (isWideScreen) {
            item.style.setProperty('--index', index);
          } else {
            item.style.removeProperty('--index'); 
          }
        });

      }
    }


    const splitWordsElements = document.querySelectorAll('.split-words.txt-anim');
    function createSpanInWord() {
      if (splitWordsElements) {
        splitWordsElements.forEach(splitWordsElement => {
          const words = splitWordsElement.querySelectorAll('.word');
          
          words.forEach(word => {
            const text = word.textContent.trim();
            word.innerHTML = `<span class="word-span">${text}</span>`;
          });
        });
      }
    }
    createSpanInWord();

     // Добавление слушателя события resize к окну
    // window.addEventListener("resize", function() {
    //   createSpanInWord();
    //   updateIndexes();
    // });

    let lastWidth = window.innerWidth;
    const resizeObserver = new ResizeObserver(entries => {
        requestAnimationFrame(() => {
            entries.forEach(entry => {
                const currentWidth = entry.contentRect.width;
                // Запускаем initSplitType() только если изменилась ширина
                if (currentWidth !== lastWidth) {
                  initSplitType();
                  createSpanInWord();
                  updateIndexesRel(); // Вызов функции обновления индексов
                  // updateIndexes();
                    lastWidth = currentWidth; // Обновляем lastWidth
                }
            });
        });
    });
    // Наблюдаем за изменениями в элементе body
    resizeObserver.observe(document.body);

    // HOVER HEADER - OPACITY HERO SECTION VIDEO ==============================================================
    const header = document.querySelector('header');
    const heroBg = document.querySelector('.hero__bg');
    const heroBody = document.querySelector('.hero__body');
    const heroControlButton = document.querySelector('.hero__control');

    if (heroBg) {
        const addHoverClass = () => {
            if (window.innerWidth > 30.06125 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
                heroBg.classList.add('hover');
            }
        };
      
        const removeHoverClass = () => {
            if (window.innerWidth > 30.06125 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
                heroBg.classList.remove('hover');
            }
        };
      
        header.addEventListener('mouseover', addHoverClass);
        heroBody.addEventListener('mouseover', addHoverClass);
        heroControlButton.addEventListener('mouseover', addHoverClass);
      
        header.addEventListener('mouseout', removeHoverClass);
        heroBody.addEventListener('mouseout', removeHoverClass);
        heroControlButton.addEventListener('mouseout', removeHoverClass);
    }
    // -------------------------------------------------------------------------------------




    // КЛОНИРОВАНИЕ КНОПОК .btn-mask ==============================================================
        var btnMaskElements = document.querySelectorAll('.btn-mask');
        if (btnMaskElements.length > 0) {
            btnMaskElements.forEach(function(btnMaskElement) {
                var clone = btnMaskElement.querySelector('.btn-mask__body').cloneNode(true);
                clone.classList.add('btn-mask-clone');
                btnMaskElement.appendChild(clone);
            });
        }
    // -------------------------------------------------------------------------------------

    // TYPED.JS ==============================================================
    var typedElement = document.getElementById('typed');
    var typed;
    var startDelay = 1200; // Задержка в миллисекундах
  
    if (typedElement) {
      // Создаем Typed при загрузке страницы
      typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
        smartBackspace: false,
        startDelay: startDelay,
      });
  
   
      var stepsAElements = document.querySelectorAll('.steps-a');
      stepsAElements.forEach(function(stepsAElement) {
        var stepsAObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (stepsAElement.classList.contains('_watcher-view')) {
              setTimeout(function () {
                typed.start();
                typedElement.setAttribute('data-typed-started', 'true');
              }, startDelay);
            } else {
              typed.stop();
              typedElement.setAttribute('data-typed-started', 'false');
            }
          });
        });
      
        stepsAObserver.observe(stepsAElement, { attributes: true, attributeFilter: ['class'] });
      });      
    }
      
      // ANIMATION SVG MASSAGE (FOOTER) ==============================================================
    function setupGroupAnimation(groupSelector, circleId, hoverRadius) {
        const group = document.querySelector(groupSelector);
        const animCircle = group.querySelector(`#${circleId}`); // Используем querySelector внутри группы
      
        function handleMouseEnter(event) {
            const rect = group.getBoundingClientRect(); // Получаем координаты группы
            const mouseX = event.clientX - rect.left; // Позиция мыши по X относительно группы
            const mouseY = event.clientY - rect.top; // Позиция мыши по Y относительно группы
        
            // Устанавливаем координаты начала анимации в месте ховера мыши внутри группы
            animCircle.setAttribute('cx', mouseX);
            animCircle.setAttribute('cy', mouseY);
    
            // Увеличиваем радиус при наведении мыши
            animCircle.setAttribute('r', hoverRadius);
        
            // Отключаем обработчик события mouseenter после определения координаты
            group.removeEventListener('mouseenter', handleMouseEnter);
        }
      
        function handleMouseLeave(event) {
            // Включаем отслеживание координат мыши при выходе указателя из области группы
            group.addEventListener('mouseenter', handleMouseEnter);
    
            // Возвращаем радиус к изначальному значению при уходе мыши
            animCircle.setAttribute('r', '0');
        }
      
        group.addEventListener('mouseenter', handleMouseEnter);
        group.addEventListener('mouseleave', handleMouseLeave);
    }
    
    setupGroupAnimation('.msg__first-group', 'animCircle', '60');
    setupGroupAnimation('.msg__second-group', 'animCircleSec', '80');
    


     // -------------------------------------------------------------------------------------
    

     // ANIMATION BUTTON TXT (FOOTER) ==============================================================
     const buttonForm = document.querySelector('.button-form');
     const classes = ['move-up-a', 'move-up-b', 'move-up-c'];
     let currentIndex = 0;
     let intervalId;
     let watcherClassAdded = false;
     let animationInProgress = false; // Флаг для отслеживания процесса анимации
     
     function changeClassForInterval() {
       if (!animationInProgress) return; // Если анимация не активна, выходим из функции
       buttonForm.classList.remove(classes[currentIndex]);
       currentIndex = (currentIndex + 1) % classes.length;
       buttonForm.classList.add(classes[currentIndex]);
       intervalId = setTimeout(changeClassForInterval, 1500);
     }
     
     function startIntervalForWatcher() {
       if (!animationInProgress) {
         animationInProgress = true;
         changeClassForInterval(); // Начинаем анимацию
       }
     }
     
     function stopIntervalForWatcher() {
       clearTimeout(intervalId);
       animationInProgress = false; // Останавливаем анимацию
     }
     
     function handleWatcherClassChange(mutationsList, observer) {
       for (let mutation of mutationsList) {
         if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
           if (buttonForm.classList.contains('_watcher-view')) {
             if (!watcherClassAdded) {
               watcherClassAdded = true;
               setTimeout(() => {
                 startIntervalForWatcher();
               }, 1000);
             }
           } else {
             if (watcherClassAdded) {
               watcherClassAdded = false;
               stopIntervalForWatcher();
             }
           }
         }
       }
     }
     
     const watcherObserver = new MutationObserver(handleWatcherClassChange);
     watcherObserver.observe(buttonForm, { attributes: true });
     
     buttonForm.addEventListener('mouseenter', stopIntervalForWatcher);
     buttonForm.addEventListener('mouseleave', startIntervalForWatcher);
     
    // -------------------------------------------------------------------------------------


     // UPLOAD FILE (FORM) ==============================================================
     const fileInputBody = document.querySelector('.file-upload');
     const fileInput = document.getElementById('file-upload-input');
     let fileErrorSpan = null; // Переменная для хранения ссылки на элемент span ошибки
     
     let previousFile = null;
     
     if (fileInput) {
         fileInput.addEventListener('change', function(event) {
             if (this.files && this.files.length > 0) {
                 const fileSizeInMB = this.files[0].size / (1024 * 1024); // конвертируем размер файла в МБ
                 if (fileSizeInMB > 10) {
                     const errorMessage = this.getAttribute('data-fe');
                     fileInput.classList.add('error');
                     
                     // Создаем элемент span для ошибки, если он еще не был создан
                     if (!fileErrorSpan) {
                         fileErrorSpan = document.createElement('span');
                         fileErrorSpan.classList.add('file-error');
                         fileInputBody.appendChild(fileErrorSpan); // Добавляем созданный элемент span в контейнер .file-upload
                     }
                     
                     fileErrorSpan.textContent = errorMessage;
                     fileErrorSpan.style.display = 'block'; // Показываем элемент span с ошибкой
                     
                     // Устанавливаем задержку для удаления ошибки через 3 секунды
                     setTimeout(() => {
                         fileInputBody.removeChild(fileErrorSpan);
                         fileErrorSpan = null;
                     }, 3000);
                     
                     // Отменяем стандартное действие браузера (загрузку файла)
                     event.preventDefault();
                 } else {
                     // Если размер файла в норме, удаляем класс ошибки и очищаем текст ошибки
                     fileInput.classList.remove('error');
                     
                     // Удаляем элемент span ошибки, если он был создан ранее
                     if (fileErrorSpan) {
                         fileInputBody.removeChild(fileErrorSpan);
                         fileErrorSpan = null;
                     }
                     
                     // Проверяем наличие класса _upload и добавляем его, если он отсутствует
                     if (!fileInputBody.classList.contains('_upload')) {
                         fileInputBody.classList.add('_upload');
                     }
                     
                     // Сохраняем предыдущий файл, чтобы позже проверить, нужно ли его удалить
                     previousFile = this.files[0];
                    //  console.log(`Загружено файлов: ${this.files.length}`);
                 }
     
             } else {
                 // Если файл не выбран, очищаем текст ошибки
                 fileInput.classList.remove('error');
                 
                 // Удаляем элемент span ошибки, если он был создан ранее
                 if (fileErrorSpan) {
                     fileInputBody.removeChild(fileErrorSpan);
                     fileErrorSpan = null;
                 }
                 
                 fileInputBody.classList.remove('_upload');
     
                //  console.log('Файл не выбран');
                //  console.log(`Загружено файлов: ${this.files.length}`);
             }
         });
     }
     
      // -------------------------------------------------------------------------------------
     
      // TAPING TXT in input (FORM) ==============================================================
      const inputElements = document.querySelectorAll('.input');

       if (inputElements) {
         inputElements.forEach(input => {
             // Добавляем обработчик события input для каждого инпута
             input.addEventListener('input', function() {
                 // Если значение инпута не пустое, добавляем классы
                 if (this.value.trim() !== '') {
                     this.classList.add('_text-input');
                     this.parentElement.classList.add('_text-input');
                 } else {
                     // Если значение инпута пустое, удаляем классы
                     this.classList.remove('_text-input');
                     this.parentElement.classList.remove('_text-input');
                 }
             });
         });
       }
      // -------------------------------------------------------------------------------------

      // OPEN FORM POPUP, PAGE HOME (FORM) ==============================================================
      const pageContacts = document.querySelector('.page-contacts');
      const buttonFormElement = document.querySelector('.button-form');
      const closeFromBtn = document.querySelector('.form-footer__close');
      const footerContainer = document.querySelector('.form-footer__container form');
      if (!pageContacts) {
        let formFooter, footerMainBody;
    
        function updateFooterHeight() {
            const formFooterHeight = formFooter.offsetHeight;
            footerMainBody.style.height = `${formFooterHeight}px`;
        }
    
        if (buttonFormElement && closeFromBtn) {
          let buttonDisabled = false;
  
          function handleClick() {
              if (buttonDisabled) {
                  return; // Если кнопка неактивна, игнорируем клик
              }
          
              buttonDisabled = true; // Делаем кнопку неактивной
          
              formFooter = document.querySelector('.form-footer');
              footerMainBody = document.querySelector('.footer-main__body');
              if (formFooter && footerMainBody) {
                  formFooter.classList.add('form-open');
                  footerMainBody.classList.add('form-open');
                  setTimeout(function() {
                      updateFooterHeight();
                  }, 400);
                  footerContainer.classList.add('popup-open');
                  window.addEventListener('orientationchange', updateFooterHeight);
                  window.addEventListener('resize', updateFooterHeight);
              }
          
              setTimeout(function() {
                  buttonDisabled = false; // После 1 секунды делаем кнопку снова активной
              }, 1500);
          }
          
          buttonFormElement.addEventListener('click', handleClick);
          
    
            closeFromBtn.addEventListener('click', function(event) {
                if (formFooter && footerMainBody) {
                    formFooter.classList.remove('form-open');
                    footerMainBody.classList.remove('form-open');
                    setTimeout(function() {
                        footerMainBody.style.height = 'initial';
                    }, 400);
                    setTimeout(function() {
                      footerContainer.classList.remove('popup-open');
                    }, 800);
                    window.removeEventListener('orientationchange', updateFooterHeight);
                    window.removeEventListener('resize', updateFooterHeight);
                }
            });
        }
      }
      // -------------------------------------------------------------------------------------


      // CASES MOBILE MENU FOR BUTTONS (CASES, CASE PAGES) ==============================================================
      const casesFooter = document.querySelector('.footer');
      const headNav = document.querySelector('.head-section .cases-nav');
      const footerNav = document.querySelector('.footer__case-nav');
      const casesNav = document.querySelector('.cases-nav');
      let casesMobButtons = document.querySelectorAll('.cases-nav__mob'); 
      let casesNavWrappers = document.querySelectorAll('.cases-nav__wrapper'); 
      const casesCloseButton = document.querySelector('.cases-nav__close');
      const lockWidthThreshold = 30.06125; // задаем пороговое значение для ширины экрана в em
      if (headNav) {
          const clonedNav = casesNav.cloneNode(true);
          clonedNav.classList.add('cases-nav-clone');
          casesFooter.insertBefore(clonedNav, casesFooter.firstChild);
          const clonedWrapper = clonedNav.querySelector('.cases-nav__wrapper');
          if (clonedWrapper) {
              clonedWrapper.classList.remove('origin-wrapper');
              clonedWrapper.classList.add('wrapper-clone');
          }
          // Обновлено после клонирования:
          casesMobButtons = document.querySelectorAll('.cases-nav__mob'); 
          casesNavWrappers = document.querySelectorAll('.cases-nav__wrapper'); 
          // вызываем функцию открытия/закрытия меню категорий на мобилке:
          openCategories();
      }
      if (footerNav) {
        openCategories();
      }
      function openCategories() {
        casesMobButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              casesNavWrappers.forEach(function(wrapper) {
                  if (wrapper.classList.contains('origin-wrapper')) {
                      wrapper.classList.add('_active');
                  }
              });
              if (window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) <= lockWidthThreshold) {
                  document.documentElement.classList.add('lock');
              }
              window.addEventListener('resize', function() {
                  document.documentElement.classList.remove('lock');
                  casesNavWrappers.forEach(function(wrapper) {
                    if (wrapper.classList.contains('origin-wrapper')) {
                        wrapper.classList.remove('_active');
                    }
                });
              });
          });
        });
        casesCloseButton.addEventListener('click', function() {
            casesNavWrappers.forEach(function(wrapper) {
                wrapper.classList.remove('_active');
            });
            if (window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) <= lockWidthThreshold) {
                document.documentElement.classList.remove('lock');
            }
        });
      }
      
   
      // == ISOTOP СЕТКА НА СТРАНИЦЕ PARTNERS ==========================
      const itemsPartners = document.querySelector('[data-iso-items]');
      if (itemsPartners) {
        const itemsGrid = new Isotope(itemsPartners, {
          itemSelector: '[data-iso-item]',
          layoutMode: 'fitRows'
        });
      
        document.addEventListener("click", documentActions);
      
        function documentActions(e) {
          const targetElement = e.target;
          if (targetElement.closest(".filter-partners__btn")) {
            const filterItem = targetElement.closest(".filter-partners__btn");
            const filterValue = filterItem.dataset.filter;
            const filterActiveItem = document.querySelector('.filter-partners__btn.active');

            const filterPartnersElement = document.querySelector('.filter-partners');
            const filterPartnersTitle = document.querySelector('.filter-partners__title');
          
            if (filterValue === "*") {
              itemsGrid.arrange({ filter: '' });
            } else {
              itemsGrid.arrange({
                // filter: function(itemElem) {
                  //   const filters = itemElem.getAttribute('data-filter').split(' ');
                  //   return filters.includes(filterValue);
                  // }



                  // ВАЖНО ДЛЯ JQUERY! 1) закоментируем строчки выше, и добавляем строчку ниже 2) в html добавляем точку ко всем data-filter=". и дублируем значение в виде классов к элементам.
                  filter: filterValue
              });
            }
          
            filterActiveItem.classList.remove("active");
            filterItem.classList.add("active");

         
             // Прокрутка на 80px от верхней части страницы, если необходимо
            const topOffset = filterPartnersElement.getBoundingClientRect().top + window.scrollY - 80;
            const currentScrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;
            const elementTopPosition = filterPartnersElement.getBoundingClientRect().top;

            // Проверка, если элемент выше центра экрана
            if (elementTopPosition < screenHeight / 3 && Math.abs(currentScrollPosition - (topOffset + 80)) > 1) {
              window.scrollTo({ top: topOffset, behavior: "auto" });
            }

            // Замена текста внутри filter-partners__title на текст кнопки
            filterPartnersTitle.textContent = filterItem.textContent;
          
            e.preventDefault();
          }
        }
      }

      

      // === страница CLIETNS - движение картинок ======================= 
      const clientsItems = document.querySelectorAll('.clients__item');

      if (clientsItems.length > 0) {
          clientsItems.forEach(item => {
          
              item.addEventListener('mousemove', function(event) {
                  const img = item.querySelector('.clients__img');
                  const rect = item.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
              
                  img.style.left = `${x + 10}px`;
                  img.style.top = `${y + 10}px`;
              });
            
          });
      }
      // =============================================================


      // страница SERVICES - запус видео из слайдеров ================
      const videoContainers = document.querySelectorAll('.slide-serv');    
      if (videoContainers.length > 0) {
          videoContainers.forEach(container => {
              const buttonService = container.querySelector('.slide-serv__video-btn');
              const video = container.querySelector('.slide-serv__video');
    
              if (buttonService && video) {
                  buttonService.addEventListener('click', function() {
                      video.play();
                      video.controls = true;
                      video.muted = false; // Включаем звук
                      buttonService.classList.add('_play');
                  });
              }
          });
      }
      // ===================================================================

      // === страница OUR-SERVICES === добавляем класс _sticky =======
      const navElement = document.querySelector('.our-serv__nav');
      const navLinks = document.querySelectorAll('.nav-serv__link');
      const sliderElement = document.querySelector('.our-serv__slider');
      const ourServPhotos = document.querySelector('.our-serv__photos');
      const lastServItem = document.querySelector('.our-serv__item:last-child');
      const headerElOur = document.querySelector('.header');
      const sliderWrapper = document.querySelector('.our-serv__slider-wr');

      // function scrollToTarget(targetElement, sliderElement) {
      //   const sliderRect = sliderElement.getBoundingClientRect();
      //   const sliderCenter = sliderRect.top + sliderRect.height / 2;
      
      //   const targetRect = targetElement.getBoundingClientRect();
      //   const targetCenter = targetRect.top + targetRect.height / 2;
      
      //   const offset = targetCenter - sliderCenter;
      
      //   window.scrollBy({
      //     top: offset,
      //     behavior: 'smooth'
      //   });
      // }
// function scrollToTarget(targetElement, sliderElement) {
//   const sliderRect = sliderElement.getBoundingClientRect();
//   const sliderCenter = window.scrollY + sliderRect.top + sliderRect.height / 2;

//   const targetRect = targetElement.getBoundingClientRect();
//   const targetCenter = window.scrollY + targetRect.top + targetRect.height / 2;

//   // Корректировка для центрирования
//   const correction = targetCenter - sliderCenter;

//   window.scrollTo({
//     top: window.scrollY + correction,
//     behavior: 'smooth'
//   });
// }

        function scrollToTarget(targetElement, sliderElement, adjustment = 0) {
          const sliderRect = sliderElement.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();
        
          const sliderCenter = window.scrollY + sliderRect.top + sliderRect.height / 2;
        
          const targetCenter = window.scrollY + targetRect.top + targetRect.height / 2;
        
          const correction = targetCenter - sliderCenter;
        
          window.scrollTo({
            top: window.scrollY + correction + adjustment,
            behavior: 'smooth'
          });
        
          requestAnimationFrame(() => {
            const newTargetRect = targetElement.getBoundingClientRect();
            const newTargetCenter = window.scrollY + newTargetRect.top + newTargetRect.height / 2;
            const newSliderRect = sliderElement.getBoundingClientRect();
            const newSliderCenter = window.scrollY + newSliderRect.top + newSliderRect.height / 2;

            const newCorrection = newTargetCenter - newSliderCenter;
          
            if (Math.abs(newCorrection) > 1) { 
              window.scrollTo({
                top: window.scrollY + newCorrection + adjustment,
                behavior: 'smooth'
              });
            }
          });
        }

  
      

      if (navElement) {
        if (navLinks.length > 0) {
          navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
              event.preventDefault();
            
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
            
              const navElementPosition = navElement.getBoundingClientRect().top;
              if (targetElement) {
                if (navElementPosition > 0) {
                  window.scrollTo({
                    top: window.scrollY + navElementPosition,
                    behavior: 'smooth'
                  });
                
                  setTimeout(() => {
                    scrollToTarget(targetElement, sliderElement);
                  }, 500);
                
                } else {
                  scrollToTarget(targetElement, sliderElement);
                }
              }
            });
          });
        }
      

        function handleScrollEvents() {
          // Adjust Padding Bottom ==========================================
          const sliderRect = sliderElement.getBoundingClientRect();
          const sliderCenter = sliderRect.top + sliderRect.height / 2;
          const lastItemRect = lastServItem.getBoundingClientRect();
          const lastItemCenter = lastItemRect.top + lastItemRect.height / 2;
          const offset = lastItemCenter - sliderCenter;
          
          if (offset <= 0) {
            const distanceToBottom = ourServPhotos.getBoundingClientRect().bottom - sliderRect.bottom;
            const paddingBottom = Math.abs(distanceToBottom);
            ourServPhotos.style.paddingBottom = `${paddingBottom}px`;
          } else {
            ourServPhotos.style.paddingBottom = '0';
          }
 
          const stickyPositionSliderWr = sliderWrapper.getBoundingClientRect().top;
          
          // Sticky Navigation ===============================================
          if (stickyPositionSliderWr <= 0) {
            headerElOur.classList.add('_hidden-header');
          } else {
            headerElOur.classList.remove('_hidden-header');
          }
          
          
          // Check Nav Position ===============================================
          const navRect = navElement.getBoundingClientRect();
          if (navRect.top >= 0) {
            navElement.classList.add('_sticky');
          } else {
            navElement.classList.remove('_sticky');
            headerElOur.classList.remove('_hidden-header');
          }
          
        }

        if (window.matchMedia("(min-width: 48.061em)").matches) {
          window.addEventListener('scroll', handleScrollEvents);
          handleScrollEvents();
        }
        
        

        // const items = document.querySelectorAll('.our-serv__item');
    
        // items.forEach(item => {
        //   const idValue = item.getAttribute('data-set-id');
        //   if (idValue) {
        //     item.id = idValue;
        //   }
        // });
        // setTimeout(() => {
        //   if (window.location.hash) {
        //     const hash = window.location.hash;
        //     const targetElementHash = document.querySelector(hash);
            
        //     if (targetElementHash) {
        //       const navElementPosition = navElement.getBoundingClientRect().top;
      
        //       window.scrollTo({
        //         top: window.scrollY + navElementPosition,
        //         behavior: 'smooth'
        //       });
        //       const timeoutId = setTimeout(() => {
        //         scrollToTarget(targetElementHash, sliderElement, 0);
        //         history.replaceState(null, null, ' ');
        //         clearTimeout(timeoutId); 
        //       }, 0);
        //     }
        //   }
        // }, 200); 
        const items = document.querySelectorAll('.our-serv__item');

        items.forEach(item => {
          const idValue = item.getAttribute('data-set-id');
          if (idValue) {
            item.id = idValue;
          }
        });
        
        setTimeout(() => {
          if (window.location.hash) {
            const hash = window.location.hash;
            const targetElementHash = document.querySelector(hash);
            
            if (targetElementHash) {
              requestAnimationFrame(() => {
                const navElementPosition = navElement.getBoundingClientRect().top;
                
                window.scrollTo({
                  top: window.scrollY + navElementPosition,
                  behavior: 'smooth'
                });
                
                setTimeout(() => {
                  scrollToTarget(targetElementHash, sliderElement, 0);
                }, 300);
        
                history.replaceState(null, null, ' '); 
              });
            }
          }
        }, 0);

      }


      
    
      // ====================================================================


      
      // Открытие/закрытие окна формы внутри FAQ блока ====================================
      const faqBody = document.querySelector('.faq__body');
  
      if (faqBody) {
        const faqLink = faqBody.querySelector('.faq__link');
        const formCloseBtn = faqBody.querySelector('.form-faq__close');
    
        faqLink.addEventListener('click', function (event) {
          event.preventDefault();
          faqBody.classList.add('_form-open');
        });
    
        formCloseBtn.addEventListener('click', function () {
          faqBody.classList.remove('_form-open');
        });
      }
      // ===========================================================================

    
  }); // END OF DOMContentLoaded ----------------------------------------------------------------------------
  
  


  // CLONE TIKERS ==============================================================
  const tikers = document.querySelectorAll(".tiker");
  tikers.forEach((tiker) => {
    const originalLine = tiker.querySelector(".tiker__line");

    if (originalLine) {
      // Определение анимации для различных классов тикера
      if (tiker.classList.contains("tiker-01")) {
        originalLine.style.animation = "scroll 50s linear infinite";
      } else if (tiker.classList.contains("tiker-02")) {
        originalLine.style.animation = "scroll-rev 50s linear infinite";
      } else if (tiker.classList.contains("tiker-03")) {
        originalLine.style.animation = "scroll 60s linear infinite";
      }

      // Клонирование линии
      const clonedLine = originalLine.cloneNode(true);
      clonedLine.classList.add("clone-line");

      // Проверка на наличие тега <h1> и замена его на <div> в клоне
      const h1Element = clonedLine.querySelector("h1");
      if (h1Element) {
        const divElement = document.createElement("div");
        divElement.className = h1Element.className;
        divElement.innerHTML = h1Element.innerHTML;
        h1Element.replaceWith(divElement);
      }

      tiker.appendChild(clonedLine);
    }
  });


//   const relTikerWr = document.querySelector(".relationship__tikers");
// if (relTikerWr) {
//   const relTiker = document.querySelector(".relationship__tiker");
//   const relBrands = document.querySelector(".relationship__brands");

//   let clonedLineR = null;

//   function handleResize() {
//     const isWideScreen = window.matchMedia('(max-width: 30.061em)').matches;

//     if (isWideScreen) { 
//       relBrands.style.animation = "scroll 20s linear infinite";
//       if (!clonedLineR) { 
//         clonedLineR = relBrands.cloneNode(true);
//         clonedLineR.classList.add("clone-line");

//         // Удаление атрибутов только с клонированного элемента relationship__brands
//         const attributesToRemove = ["data-watch", "data-watch-once", "data-watch-threshold"];
//         attributesToRemove.forEach(attr => {
//           if (clonedLineR.hasAttribute(attr)) {
//             clonedLineR.removeAttribute(attr);
//           }
//         });
//         clonedLineR.setAttribute("aria-hidden", "true");

//         relTiker.appendChild(clonedLineR);
//       }
//     } else {
//       relBrands.style = "";
//       if (clonedLineR) { 
//         clonedLineR.remove();
//         clonedLineR = null;
//       }
//     }
//   }

//   handleResize();

//   let lastWidth = window.innerWidth;
//   const resizeObserver = new ResizeObserver(entries => {
//     requestAnimationFrame(() => {
//       entries.forEach(entry => {
//         const currentWidth = entry.contentRect.width;
//         if (currentWidth !== lastWidth) {
//           handleResize();
//           lastWidth = currentWidth;
//         }
//       });
//     });
//   });

//   resizeObserver.observe(document.body);
// }


const relTikerWr = document.querySelector(".relationship__tikers");
if (relTikerWr) {
  const relTiker = document.querySelector(".relationship__tiker");
  const relBrands = document.querySelector(".relationship__brands");

  let clonedLineR = null;

  function handleResize() {
    const isWideScreen = window.matchMedia('(max-width: 30.061em)').matches;

    if (isWideScreen) { 
      relBrands.style.animation = "scroll 80s linear infinite";
      // Удаление атрибутов только с клонированного элемента relationship__brands
      const attributesToRemove = ["data-watch", "data-watch-once", "data-watch-threshold"];
      attributesToRemove.forEach(attr => {
        if (relBrands.hasAttribute(attr)) {
          relBrands.removeAttribute(attr);
        }
      });
     
      if (!clonedLineR) { 
        clonedLineR = relBrands.cloneNode(true);
        clonedLineR.classList.add("clone-line");

        clonedLineR.setAttribute("aria-hidden", "true");

        relTiker.appendChild(clonedLineR);
      }

       // Клонирование relTiker и добавление 3 копий в конец relTikerWr
       const existingClones = relTikerWr.querySelectorAll(".relationship__tiker.clone-tiker");
       if (existingClones.length === 0) { 
         for (let i = 0; i < 3; i++) {
           const clonedTiker = relTiker.cloneNode(true);
           clonedTiker.classList.add("clone-tiker");
 
           if (i % 2 === 0) {
             const clonedBrands = clonedTiker.querySelectorAll(".relationship__brands");
             clonedBrands.forEach(brand => {
               brand.style.animation = "scroll-rev 100s linear infinite";
             });
           }
 
           relTikerWr.appendChild(clonedTiker);
         }
       }

    } else {
      relBrands.style = "";

      // Удаляем клонированную линию
      if (clonedLineR) { 
        clonedLineR.remove();
        clonedLineR = null;
      }

      // Удаляем клонированные тикеры
      const clones = relTikerWr.querySelectorAll(".relationship__tiker.clone-tiker");
      clones.forEach(clone => clone.remove());
    }
  }

  handleResize();

  let lastWidth = window.innerWidth;
  const resizeObserver = new ResizeObserver(entries => {
    requestAnimationFrame(() => {
      entries.forEach(entry => {
        const currentWidth = entry.contentRect.width;
        if (currentWidth !== lastWidth) {
          handleResize();
          lastWidth = currentWidth;
        }
      });
    });
  });

  resizeObserver.observe(document.body);
}




  // GALERY (lightgallery.js) ==============================================================
let galleryItems = [];
function initGalleries() {
    const galleries = document.querySelectorAll('[data-gallery]');
    if (galleries.length) {
        galleries.forEach(gallery => {
            galleryItems.push({
                gallery,
                galleryClass: lightGallery(gallery, {
                    plugins: [
                        lgZoom, 
                        // lgRotate
                    ],
                    selector: '.wp-block-image a',
                    licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
                    mobileSettings: {
                      speed: 500,
                      showCloseIcon: true,
                      controls: false, 
                      counter: true,
                      closeOnTap: true,

                      easing: "ease",
                      hideScrollbar: false,
                      resetScrollPosition: true,
                      
                      
                      // zoomFromOrigin: false,
                      // actualSize: false,
                      // zoom: false,
                      zoomFromOrigin: true,
                      actualSize: true,
                      zoom: true,
                      scale: 1,
                      
                      
                      // rotate: true,
                      // flipHorizontal: true,
                      // flipVertical: true,
                      // rotateLeft: true,
                      // rotateRight: true,
                    },
                })
            });
        });
    }
}

function destroyGalleries() {
  galleryItems.forEach(item => {
      item.galleryClass.destroy();
    });
    // Очистка массива после удаления всех галерей
    galleryItems = []; 
}

function handleLinkClick(event) {
  if (window.innerWidth > 480) {
      event.preventDefault();
  }
}

function checkAndInitGalleries() {
  const links = document.querySelectorAll('.wp-block-image a');

  if (window.innerWidth <= 480) {
      if (galleryItems.length === 0) {
          initGalleries();
      }
  } else {
      if (galleryItems.length > 0) {
          destroyGalleries();
      }
      links.forEach(link => {
          link.addEventListener('click', handleLinkClick);
      });
  }
}

checkAndInitGalleries();

window.addEventListener('resize', () => {
  checkAndInitGalleries();
});
// ============================================================================================