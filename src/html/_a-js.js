document.addEventListener("DOMContentLoaded", function() {

  if (typeof gsap !== 'undefined') {

    gsap.registerPlugin(ScrollTrigger)


    // const MAX_WIDTH_EM = 30.061;
    // const retailHero = document.querySelector('.retail__hero');
    // const retailShelfSwipe = document.querySelector('.retail__shelf');
    // let startY = 0;
    
    // function emToPx(em) {
    //     return em * parseFloat(getComputedStyle(document.documentElement).fontSize);
    // }
    
    // function isIOS() {
    //     return /iP(hone|od|ad)/.test(navigator.platform) ||
    //            (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    // }
    
    // function handleSwipeStart(event) {
    //     startY = event.touches[0].clientY;
    
    //     if (isIOS()) {
    //         const scrollElement = event.currentTarget;
    //         if (scrollElement.scrollHeight !== scrollElement.clientHeight) {
    //             if (scrollElement.scrollTop === 0) {
    //                 scrollElement.scrollTop = 1;
    //             }
    //             if (scrollElement.scrollTop === scrollElement.scrollHeight - scrollElement.clientHeight) {
    //                 scrollElement.scrollTop = scrollElement.scrollHeight - scrollElement.clientHeight - 1;
    //             }
    //         }
    //     }
    // }
    
    // function handleSwipeEnd(event) {
    //     const endY = event.changedTouches[0].clientY;
    //     const deltaY = endY - startY;
    
    //     if (deltaY < 0) { // Swipe down
    //       setTimeout(() => {
    //           document.body.classList.add('swipe-down');
    //           document.body.classList.remove('_page-top');
    //       }, 100);
    //     } else if (deltaY > 0) {
    //         document.body.classList.remove('swipe-down');
    //         document.body.classList.add('_page-top');
    //     }
    // }
    
    // function handleSwipeEndOnShelf(event) {
    //     const endY = event.changedTouches[0].clientY;
    //     const deltaY = endY - startY;
    
    //     if (window.scrollY === 0 && deltaY > 0) { // Swipe down on retailShelfSwipe at top of the page
    //         document.body.classList.remove('swipe-down');
    //         document.body.classList.add('_page-top');
    //     }
    // }
    
    // function checkInitialScrollPosition() {
    //     if (window.innerWidth < emToPx(MAX_WIDTH_EM)) {
    //         document.body.classList.add('_mobile');
    //         if (window.scrollY === 0) {
    //             document.body.classList.add('_page-top');
    //             document.body.classList.remove('swipe-down');
    //         } else {
    //             // document.body.classList.remove('_page-top');
    //         }
    //     } else {
    //         document.body.classList.remove('_mobile');
    //         retailHero.removeEventListener('touchstart', handleSwipeStart);
    //         retailHero.removeEventListener('touchend', handleSwipeEnd);
    //         retailShelfSwipe.removeEventListener('touchstart', handleSwipeStart);
    //         retailShelfSwipe.removeEventListener('touchend', handleSwipeEndOnShelf);
    //     }
    // }
    
    // function handleResize() {
    //     checkInitialScrollPosition();
    // }
    
    // retailHero.addEventListener('touchstart', handleSwipeStart);
    // retailHero.addEventListener('touchend', handleSwipeEnd);
    // retailShelfSwipe.addEventListener('touchstart', handleSwipeStart);
    // retailShelfSwipe.addEventListener('touchend', handleSwipeEndOnShelf);
    // window.addEventListener('scroll', checkInitialScrollPosition);
    // window.addEventListener('resize', handleResize);
    
    // // Initial check
    // checkInitialScrollPosition();
    


   

    // const MAX_WIDTH_EM = 30.061;
    // const retailHero = document.querySelector('.retail__hero');
    // const retailShelfSwipe = document.querySelector('.retail__shelf');
    // const isIOS = /iP(hone|od|ad)/.test(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    // const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // let startY = 0;

    // function emToPx(em) {
    //   return em * fontSize;
    // }

    // function handleSwipeStart(event) {
    //     startY = event.touches[0].clientY;
    
    //     if (isIOS) {
    //         const scrollElement = event.currentTarget;
    //         if (scrollElement.scrollHeight !== scrollElement.clientHeight) {
    //             if (scrollElement.scrollTop === 0) {
    //                 scrollElement.scrollTop = 1;
    //             }
    //             if (scrollElement.scrollTop === scrollElement.scrollHeight - scrollElement.clientHeight) {
    //                 scrollElement.scrollTop = scrollElement.scrollHeight - scrollElement.clientHeight - 1;
    //             }
    //         }
    //     }
    // }

    // function handleSwipeEnd(event) {
    //     const endY = event.changedTouches[0].clientY;
    //     const deltaY = endY - startY;
    
    //     if (deltaY < 0 && window.scrollY === 0) { // Swipe up
    //         console.log('свайп вверх');
    //         retailShelfSwipe.scrollIntoView({ behavior: 'smooth' });
    //     } else if (deltaY > 0 && window.scrollY === 0) { // Swipe down
    //         console.log('свайп вниз');
    //     }
    // }

    // function checkInitialScrollPosition() {
    //   if (window.innerWidth < emToPx(MAX_WIDTH_EM)) {
    //     if (window.scrollY === 0) {
    //           document.body.classList.add('_mobile');
    //       } else {
    //         document.body.classList.remove('_mobile');
    //       }
    //   } else {
    //       document.body.classList.remove('_mobile');
    //       retailHero.removeEventListener('touchstart', handleSwipeStart);
    //       retailHero.removeEventListener('touchend', handleSwipeEnd);
    //   }
    // }

    // function handleResize() {
    //     checkInitialScrollPosition();
    // }
    // retailHero.addEventListener('touchstart', handleSwipeStart);
    // retailHero.addEventListener('touchend', handleSwipeEnd);
    // window.addEventListener('scroll', checkInitialScrollPosition);
    // window.addEventListener('resize', handleResize);

    // checkInitialScrollPosition();

  


    
    const animHandEye = document.querySelector('.hand-eye');
    const animGirlYouga = document.querySelector('.girl-youga');
    const girlStars = document.querySelectorAll('.girl-analys__stars path');
    const animGirlPuzzle = document.querySelector('.girl-puzzle');
    const animMenStar = document.querySelector('.men-star');

    const linePc01 = document.querySelector('.line-pc-01');
    const linePc02 = document.querySelector('.line-pc-02');
    const linePc03 = document.querySelector('.line-pc-03');

    const lineMob01 = document.querySelector('.line-mob-01');
    const lineMob02 = document.querySelector('.line-mob-02');
    const lineMob03 = document.querySelector('.line-mob-03');
    const lineMob04 = document.querySelector('.line-mob-04');
    const lineMob05 = document.querySelector('.line-mob-05');
   
    const retailSteps = document.querySelector('.retail__steps');
    const retailShelf = document.querySelector('.shelf');
    const shelfCards = document.querySelector('.shelf__cards');
    const shelfCard = document.querySelectorAll('.shelf__card');

    const designCookie = document.querySelector('.design__cookie');
    const cookieWrapper = document.querySelector('.cookie-wrapper');

    const designBoxes = document.querySelector('.design__boxes');
    const box = document.querySelector('.box');
    const boxBox = document.querySelector('.box-box');
    const boxItems = document.querySelectorAll('.box .box-item');

    const boxWrapper = document.querySelectorAll('.boxes-wrapper');
    
    const boxCookie = document.querySelector('.box-cookie');
    const boxCookieItem = document.querySelector('.box-cookie-item');
    
    const cookiesWrapper = document.querySelector('.cookies');
    const cookies = document.querySelectorAll('.cookies .cookie');

    const stepsPin = document.querySelector('.steps-pin');
    const stepsItems = document.querySelectorAll('.steps-pin .steps');
    const stepsAboutItems = document.querySelectorAll('.steps__about');

    const boxSteps = document.querySelector('.box-steps');
    const videoStepsC = document.querySelector('.video-steps-c');
    const videoStepsD = document.querySelector('.video-steps-d');
    const videoStepsE = document.querySelector('.video-steps-e');
    const videoStepsF = document.querySelector('.video-steps-f');
    
    const logics = document.querySelector('.logics');

    const icon01 = document.querySelector(".ic-01");
    const icon02 = document.querySelector(".ic-02");
    const icon03 = document.querySelector(".ic-03");

    const stepsRetail01 = document.querySelector(".steps-retail-01");
    const stepsRetail02 = document.querySelector(".steps-retail-02");
    const stepsRetail03 = document.querySelector(".steps-retail-03");


    let breakPoint = 40.686;
      let mm = gsap.matchMedia();
      let scrollDuration = window.innerHeight * 2;

      mm.add({
        isDesktop: `(min-width: ${breakPoint}em)`,
        isMobile: `(max-width: ${breakPoint}em)`
      }, (context) => {
      
        let {isDesktop, isMobile} = context.conditions;
      
        if (isDesktop) {
          // === Retail__Steps =============================================
          let icon01AnimAdded = false;
          let icon02AnimAdded = false;
          let icon03AnimAdded = false;
          
          ScrollTrigger.create({
              trigger: retailSteps,
              start: "center center",
              end: `+=${scrollDuration / 2}`,
              pin: true,
              pinSpacing: true,
              scrub: true,
              onUpdate: (self) => {
                  let progress = self.progress;
              
                  if (progress < 0.45) {
                      gsap.to(".steps-retail-01", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      if (!icon01AnimAdded) {
                        icon01.classList.add("_active-anim");
                        setTimeout(() => {
                            icon01.classList.remove("_active-anim");
                        }, 1800);
                        icon01AnimAdded = true;
                        icon03AnimAdded = false;
                      }
                      icon01.addEventListener('mouseenter', () => {
                        icon01.classList.add('_active-anim');
                        setTimeout(() => {
                          icon01.classList.remove('_active-anim');
                        }, 1800);
                      });

                      icon02.classList.remove("_active-anim");

                      stepsRetail01.classList.add("_active");
                      stepsRetail02.classList.remove("_active");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 0.70) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 1, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 0, duration: 0.3 });
                  
                      icon02.classList.add("_active-anim");
                      icon01AnimAdded = false;
                      icon03AnimAdded = false;
                      
                      stepsRetail01.classList.remove("_active");
                      stepsRetail02.classList.add("_active");
                      stepsRetail03.classList.remove("_active");

                  } else if (progress < 1) {
                      gsap.to(".steps-retail-01", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-02", { opacity: 0, duration: 0.3 });
                      gsap.to(".steps-retail-03", { opacity: 1, duration: 0.3 });
                      
                      if (!icon03AnimAdded) {
                        icon03.classList.add("_active-anim");
                        setTimeout(() => {
                            icon03.classList.remove("_active-anim");
                        }, 2500);
                        icon03AnimAdded = true;
                        icon01AnimAdded = false;
                      }
                      icon03.addEventListener('mouseenter', () => {
                        icon03.classList.add('_active-anim');
                        setTimeout(() => {
                          icon03.classList.remove('_active-anim');
                        }, 2500);
                      });

                      icon02.classList.remove("_active-anim");

                      stepsRetail02.classList.remove("_active");
                      stepsRetail03.classList.add("_active");
                  }
              },
              onLeave: () => {
                stepsRetail03.classList.remove("_active");
                icon03AnimAdded = false;
              },
              onLeaveBack: () => {
                  stepsRetail01.classList.remove("_active");
                  icon01AnimAdded = false;
              }
          });
          // ==========================================

          // === Design__Cookie =============================================
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: designCookie,
              start: "center center",
              endTrigger: designBoxes,
              end: "center center",
              scrub: 0.2,
              pin: true,
              // pinSpacing: true,
            }
          });

          tl.to(cookieWrapper, {
            keyframes: [
              { rotation: 90, xPercent: 45, duration: 0.15, ease: "none" },
              { rotation: 180, xPercent: 150, duration: 0.25, ease: "none" },
              { rotation: 260, xPercent: 150, duration: 0.3, ease: "none" },
              { rotation: 340, xPercent: 60, duration: 0.20, ease: "none" },
              { rotation: 360, xPercent: 40, duration: 0.1, ease: "none" }
            ]
          },0);

          // Устанавливаем stroke-dashoffset и stroke-dasharray для каждой линии
          const lines = [linePc01, linePc02, linePc03];
          lines.forEach(line => {
            const length = line.getTotalLength();
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
          });
          
          ScrollTrigger.create({
            trigger: designCookie,
            start: "center center",
            endTrigger: designBoxes,
            end: "center center",
            scrub: true,
            onUpdate: self => {
              const progress = self.progress * 100;
          
              if (progress <= 15) {
                // Анимация для первой линии (0-15%)
                const lineProgress = progress / 15;
                gsap.to(linePc01, { strokeDashoffset: (1 - lineProgress) * linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
              } else if (progress <= 33) {
                // Анимация для первой линии (15-33%)
                const lineProgress = (progress - 15) / 18;
                gsap.to(linePc01, { strokeDashoffset: -lineProgress * linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
              } else if (progress <= 43) {
                // Анимация для второй линии (33-43%)
                const lineProgress = (progress - 33) / 10;
                gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: (1 - lineProgress) * linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
              } else if (progress <= 66) {
                // Анимация для второй линии (43-66%)
                const lineProgress = (progress - 43) / 23;
                gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: -lineProgress * linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
              } else if (progress <= 81) {
                // Анимация для третьей линии (66-76%)
                const lineProgress = (progress - 66) / 10;
                gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: -linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: (1 - lineProgress) * linePc03.getTotalLength(), overwrite: true });
              } else {
                // Анимация для третьей линии (76-100%)
                const lineProgress = (progress - 76) / 24;
                gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
                gsap.to(linePc02, { strokeDashoffset: -linePc02.getTotalLength(), overwrite: true });
                gsap.to(linePc03, { strokeDashoffset: -lineProgress * linePc03.getTotalLength(), overwrite: true });
              }
            }
          });
          
          // Вторая анимация для designBoxes и box
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: designBoxes,
              start: `center center`,
              end: `+=${scrollDuration * 2}`,
              pin: true,
              pinSpacing: true,
              scrub: true,
            }
          });
          
          // Анимация cookies
          timeline.to({}, {
            duration: scrollDuration / 1000,
            onUpdate: function() {
              let progress = this.progress();
              let index = Math.floor(progress * (cookies.length - 1));
              cookies.forEach((cookie, i) => {
                if (i === index) {
                  cookie.classList.add('active');
                } else {
                  cookie.classList.remove('active');
                }
              });
              if (progress === 0) {
                cookies[0].classList.remove('active');
              }
            }
          });
          
          // Анимация box после анимации cookies
          timeline.to(box, {
            ease: "power2.out",
            left: '50%',
            transform: 'translate(-48%, -50%)',
            duration: scrollDuration / 1500
          }, "+=0.1");
          
          // Анимация boxItems после анимации box
          timeline.to({}, {
            duration: scrollDuration / 1500,
            onUpdate: function() {
              let progress = this.progress();
              let index = Math.floor(progress * (boxItems.length - 1));
              boxItems.forEach((boxItem, i) => {
                if (i === index) {
                  boxItem.classList.add('active');
                } else {
                  boxItem.classList.remove('active');
                }
              });
            }
          });

          timeline.to(boxWrapper, {
            ease: "power2.out",
            transform: 'translate(0%, 70%)',
          });

 
          const videoSteps = [videoStepsC, videoStepsD, videoStepsE, videoStepsF];
          timeline.to({}, {
            duration: scrollDuration / 500,
            onUpdate: function() {
              boxCookieItem.classList.add('not-active');
              cookiesWrapper.classList.add('not-active');
              stepsPin.classList.add('active');
              boxSteps.classList.add('active');
            
              let progress = this.progress();
              let adjustedProgress = Math.min(progress / 0.8, 1); // Сжимаем время до 80%, чтобы перебор осуществлялся немного раньше чем конец прогресса.
              let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
            
              stepsItems.forEach((step, i) => {
                if (i === index) {
                  step.classList.add('active');
                  if (!videoSteps[i].classList.contains('play')) {
                    videoSteps[i].classList.add('play');
                    videoSteps[i].play();
                    videoSteps[i].playbackRate = 2;
                  }
                } else {
                  step.classList.remove('active');
                  if (videoSteps[i].classList.contains('play')) {
                    videoSteps[i].classList.remove('play');
                    videoSteps[i].pause();
                    videoSteps[i].currentTime = 0;
                  }
                }
              });
            
              if (progress === 0) {
                boxCookieItem.classList.remove('not-active');
                cookiesWrapper.classList.remove('not-active');
                stepsPin.classList.remove('active');
                boxSteps.classList.remove('active');
                stepsItems[0].classList.remove('active');
            
                videoSteps.forEach(video => {
                  if (video.classList.contains('play')) {
                    video.classList.remove('play');
                    video.pause();
                    video.currentTime = 0;
                  }
                });
              }
            },
            
          });

          ScrollTrigger.create({
            trigger: designBoxes,
            start: "center center",
            onUpdate: () => {
              cookieWrapper.classList.add('not-active');
            },
            onLeaveBack: () => {
              cookieWrapper.classList.remove('not-active');
            },
          });

          const animation = gsap.timeline({ paused: true })
          .to(box, {
            transform: 'translate(-15%, 80%) scale(0.1)',
            opacity: 0,
            duration: 0.7
          }, 0)
          .to(boxCookie, {
            transform: 'translate(40%, 270%) scale(0.1)',
            opacity: 0,
            duration: 0.7
          }, 0);
        
        // ScrollTrigger для запуска анимации
        ScrollTrigger.create({
          trigger: logics,
          start: "top bottom",
          end: "center center",
          onEnter: () => {
            animation.play();
              videoSteps.forEach(video => {
                if (video.classList.contains('play')) {
                  video.classList.remove('play');
                  video.pause();
                  video.currentTime = 0;
                }
              });
          },
          onLeaveBack: () => {
            animation.reverse();
              if (videoSteps[3].classList.contains('play')) {
                videoSteps[3].classList.add('play');
                videoSteps[3].play();
                videoSteps[3].playbackRate = 2;
              }
          },
          ease: "power3.out"
        });


        } // == end isDesktop -----------
      
        if (isMobile) {

                  // ScrollTrigger.normalizeScroll(true);
        // ScrollTrigger.config ({ ignoreMobileResize : true } ) ; 

          const totalWidth = shelfCards.scrollWidth - retailShelf.offsetWidth;
          gsap.to(shelfCards, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: retailShelf,
              start: "top top",
              end: "+=100%",
              pin: true,
              scrub: 0.1,
              // onUpdate: self => {
              //   const progress = self.progress;
              //   console.log(`Progress: ${progress}`);
              // }
            }
          });
  
          

   
          ScrollTrigger.create({
            trigger: stepsRetail01,
            start: "center center",
            end: "bottom center",
            onEnter: () => {
              icon01.classList.add("_active-anim");
              setTimeout(() => {
                icon01.classList.remove("_active-anim");
              }, 1800);
            },
            onEnterBack: () => {
              icon01.classList.add("_active-anim");
              setTimeout(() => {
                icon01.classList.remove("_active-anim");
              }, 1800);
            },
          });
          ScrollTrigger.create({
            trigger: stepsRetail02,
            start: "center center",
            end: "bottom center",
            onEnter: () => icon02.classList.add("_active-anim"),
            onLeave: () => icon02.classList.remove("_active-anim"),
            onLeaveBack: () => icon02.classList.remove("_active-anim"),
            onEnterBack: () => icon02.classList.add("_active-anim"),
          });
          ScrollTrigger.create({
            trigger: stepsRetail03,
            start: "center center",
            end: "bottom center",
            onEnter: () => {
              icon03.classList.add("_active-anim");
              setTimeout(() => {
                  icon03.classList.remove("_active-anim");
              }, 2500);
            },
            onEnterBack: () => {
              icon03.classList.add("_active-anim");
              setTimeout(() => {
                  icon03.classList.remove("_active-anim");
              }, 2500);
            },
          });
           // === Design__Cookie =============================================
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: designCookie,
              start: "center center",
              endTrigger: designBoxes,
              end: "center center",
              scrub: 0.2,
              pin: true,
              // pinSpacing: true,
            }
          });

          tl.to(cookieWrapper, {
            keyframes: [
              { rotation: 150, xPercent: 145, duration: 0.11, ease: "none" },
              { rotation: 230, xPercent: 145, duration: 0.18, ease: "none" },
              { rotation: 360, xPercent: 20, duration: 0.11, ease: "none" },
              { rotation: 430, xPercent: 20, duration: 0.11, ease: "none" },
              { rotation: 530, xPercent: 145, duration: 0.1, ease: "none" },
              { rotation: 600, xPercent: 145, duration: 0.23, ease: "none" },
              { rotation: 720, xPercent: -12, duration: 0.16, ease: "none" }
            ]
          });

          const progressMarker = document.querySelector('.progress-marker');

          // const length = lineMob01.getTotalLength();
          // gsap.set(lineMob01, { strokeDasharray: length, strokeDashoffset: length });

          // ScrollTrigger.create({
          //   trigger: designCookie,
          //   start: "center center",
          //   endTrigger: designBoxes,
          //   end: "center center",
          //   scrub: true,
          //   onUpdate: self => {
          //     const progress = self.progress;
          //     // progressMarker.textContent = `${progress.toFixed(1)}%`;
              
          //     let offset;
          //     if (progress <= 0.1) {
          //       offset = gsap.utils.interpolate(length, 0, progress / 0.1);
          //     }
          //     gsap.set(lineMob01, { strokeDashoffset: offset });
          
          //   }
          // });


          const lengths = [
            lineMob01.getTotalLength(),
            lineMob02.getTotalLength(),
            lineMob03.getTotalLength(),
            lineMob04.getTotalLength(),
            lineMob05.getTotalLength()
          ];

          const paths = [lineMob01, lineMob02, lineMob03, lineMob04, lineMob05];

          // Устанавливаем начальные значения для всех путей
          paths.forEach((path, i) => {
            gsap.set(path, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i], opacity: 0 });
          });

          ScrollTrigger.create({
            trigger: designCookie,
            start: "center center",
            endTrigger: designBoxes,
            end: "center center",
            scrub: true,
            onUpdate: self => {
              const progress = self.progress;
            
              paths.forEach((path, i) => {
                let offset;
                let startProgress;
              
                switch (i) {
                  case 0:
                    startProgress = 0;
                    break;
                  case 1:
                    startProgress = 0.25;
                    break;
                  case 2:
                    startProgress = 0.37;
                    break;
                  case 3:
                    startProgress = 0.45;
                    break;
                  case 4:
                    startProgress = 0.77;
                    break;
                }
              
                if (progress >= startProgress && progress <= startProgress + 0.1) {
                  offset = gsap.utils.interpolate(lengths[i], 0, (progress - startProgress) / 0.1);
                  gsap.set(path, { strokeDashoffset: offset, opacity: 1 });
                } else if (progress < startProgress) {
                  gsap.set(path, { opacity: 0 });
                }
              });
            
              // Отладочный вывод
              console.log(`Progress: ${progress}`);
            }
          });




            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: designBoxes,
                start: `center center`,
                end: `+=${scrollDuration * 2}`,
                pin: true,
                // pinSpacing: true,
                scrub: true,
              }
            });

            timeline.to({}, {
              duration: scrollDuration / 100,
              onUpdate: function() {
                let progress = this.progress();
                let index = Math.floor(progress * (cookies.length - 1));
                cookies.forEach((cookie, i) => {
                  if (i === index) {
                    cookie.classList.add('active');
                  } else {
                    cookie.classList.remove('active');
                  }
                });
                if (progress === 0) {
                  cookies[0].classList.remove('active');
                }
              }
            });
            
            timeline.to(box, {
              ease: "power2.out",
              left: '50%',
              transform: 'translate(-48%, -50%)',
              duration: scrollDuration / 100
            }, `-=${scrollDuration / 10000}`); // Начало сразу после предыдущей анимации
            
            timeline.to({}, {
              duration: scrollDuration / 100,
              onUpdate: function() {
                let progress = this.progress();
                let index = Math.floor(progress * (boxItems.length - 1));
                boxItems.forEach((boxItem, i) => {
                  if (i === index) {
                    boxItem.classList.add('active');
                  } else {
                    boxItem.classList.remove('active');
                  }
                });
              }
            }, `-=${scrollDuration / 3500}`);
  
            
            timeline.to(boxWrapper, {
              ease: "power2.out",
              transform: 'translate(0%, 178%)',
              duration: scrollDuration / 100
            });

            const videoSteps = [videoStepsC, videoStepsD, videoStepsE, videoStepsF];
            timeline.to({}, {
              duration: scrollDuration / 10,
              // duration: 300,
              onUpdate: function() {
                boxCookieItem.classList.add('not-active');
                cookiesWrapper.classList.add('not-active');
                stepsPin.classList.add('active');
                boxSteps.classList.add('active');
            
                let progress = this.progress();
                let adjustedProgress = Math.min(progress / 0.8, 1);
                let index = Math.floor(adjustedProgress * (stepsItems.length - 1));
                let contentProgress = (adjustedProgress * (stepsItems.length - 1)) - index;
            
                stepsItems.forEach((step, i) => {
                  if (i === index) {
                    step.classList.add('active');
                    if (!videoSteps[i].classList.contains('play')) {
                      videoSteps[i].classList.add('play');
                      videoSteps[i].play();
                      videoSteps[i].playbackRate = 2;
                    }
                  } else {
                    step.classList.remove('active');
                    if (videoSteps[i].classList.contains('play')) {
                      videoSteps[i].classList.remove('play');
                      videoSteps[i].pause();
                      videoSteps[i].currentTime = 0;
                    }
                  }
                });
            
                if (progress === 0) {
                  boxCookieItem.classList.remove('not-active');
                  cookiesWrapper.classList.remove('not-active');
                  stepsPin.classList.remove('active');
                  boxSteps.classList.remove('active');
                  stepsItems[0].classList.remove('active');
            
                  videoSteps.forEach(video => {
                    if (video.classList.contains('play')) {
                      video.classList.remove('play');
                      video.pause();
                      video.currentTime = 0;
                    }
                  });
             
                }
              }
            });

  
          ScrollTrigger.create({
            trigger: designBoxes,
            start: "center center",
            onUpdate: () => {
              cookieWrapper.classList.add('not-active');
            },
            onLeaveBack: () => {
              cookieWrapper.classList.remove('not-active');
            },
          });

          const animation = gsap.timeline({ paused: true })
          .to(box, {
            transform: 'translate(-66%, 77%) scale(.3)',
            opacity: 0,
            duration: 0.7
          }, 0)
          .to(boxCookie, {
            transform: 'translate(-25%, 274%) scale(.3)',
            opacity: 0,
            duration: 0.7
          }, 0);

          // ScrollTrigger для запуска анимации
        ScrollTrigger.create({
          trigger: logics,
          start: "top bottom",
          end: "center center",
          onEnter: () => {
            animation.play();
              videoSteps.forEach(video => {
                if (video.classList.contains('play')) {
                  video.classList.remove('play');
                  video.pause();
                  video.currentTime = 0;
                }
              });
          },
          onLeaveBack: () => {
            animation.reverse();
              if (videoSteps[3].classList.contains('play')) {
                videoSteps[3].classList.add('play');
                videoSteps[3].play();
                videoSteps[3].playbackRate = 2;
              }
          },
          ease: "power1.in"
        });

          
        } // == end isMobile -----------

      });

      // function initializeSimpleBar() {
      //   if (window.innerWidth < 480.98) {
      //     if (document.querySelectorAll('.steps__about').length) {
      //       document.querySelectorAll('.steps__about').forEach(scrollBlock => {
      //         new SimpleBar(scrollBlock, {
      //           autoHide: false,
      //         });
      //       });
      //     }
      //   }
      // }
      // initializeSimpleBar();
      
      // window.addEventListener('resize', () => {
        // ScrollTrigger.refresh();
        // initializeSimpleBar();
      // });
    
      window.addEventListener('orientationchange', () => {
        // ScrollTrigger.refresh();
        // initializeSimpleBar();
      });

      // ScrollTrigger.refresh();
      
      
      
    if (animHandEye) {
      gsap.set(".eye-01, .eye-02, .eye-03", { transformOrigin: "center center" });
      const eyeAnimation  = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
      });
      eyeAnimation .to(".eye-01", {
        duration: 0.9,
        keyframes: [
          { attr: { d: "M188 124C188 159.677 203.355 166 225.935 166" }, ease: "power4.InOut", time: 0 },
          { attr: { d: "M188 124C203.5 146 205.5 148.5 225.935 166" }, ease: "power4.InOut", time: 0.15 },
          { attr: { d: "M188 124C188 159.677 203.355 166 225.935 166" }, ease: "power4.InOut", time: 0.25 },
        ]
      }),
      eyeAnimation .to(".eye-02", {
        duration: 0.9,
        keyframes: [
          { attr: { d: "M188 124C220.363 130.374 229.36 139.13 225.935 165.548" }, ease: "power4.InOut", time: 0 },
          { attr: { d: "M188 124C207.5 145.5 211 148.5 225.935 165.548" }, ease: "power4.InOut", time: 0.15 },
          { attr: { d: "M188 124C220.363 130.374 229.36 139.13 225.935 165.548" }, ease: "power4.InOut", time: 0.25 },
        ]
      }, 0),
      eyeAnimation .to(".eye-03", {
        duration: 0.9,
        keyframes: [
          { attr: { cx: 209.538, cy: 147.107, rx: 9.95618, ry: 5.41558 }, ease: "power4.InOut", time: 0 },
          { attr: { cx: 208.108, cy: 148.258, rx: 2.38377, ry: 5.41558 }, ease: "power4.InOut", time: 0.15 },
          { attr: { cx: 209.538, cy: 147.107, rx: 9.95618, ry: 5.41558}, ease: "power4.InOut", time: 0.25 },
        ]
      }, 0);
      ScrollTrigger.create({
        trigger: animHandEye,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          eyeAnimation.play(); 
        },
        onEnterBack: () => {
          eyeAnimation.play();
        },
        onLeave: () => {
          eyeAnimation.pause(); 
        },
        onLeaveBack: () => {
          eyeAnimation.pause();
        },
      });
    }

    if (animGirlYouga) {
      // .hair ==============================================
      gsap.to(".hair", {
        transformOrigin: "50% 50%",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        keyframes: [
          {  
             attr: { d: "M170.079 97.7361C170.049 97.5814 170.018 97.4421 170.003 97.3028C169.895 95.4767 169.849 93.6506 169.665 91.84C169.465 89.8746 168.497 88.2807 167.068 86.9343C166.161 86.0832 165.208 85.4177 163.994 84.9535C163.134 84.613 162.335 84.5976 161.536 84.6749C160.844 84.7523 160.183 85.2166 159.507 85.4951C158.723 85.8356 157.924 86.1606 157.156 86.5165C155.896 87.0891 154.651 87.739 153.36 88.2343C152.07 88.7295 150.733 89.2092 149.304 89.1318C147.383 89.008 145.447 88.9771 143.541 88.7449C142.65 88.6366 141.789 88.2033 140.913 87.9093C140.007 87.5998 139.054 87.3367 138.193 86.9189C135.643 85.7273 132.969 86.0987 130.326 86.2225C129.142 86.2844 128.097 86.9653 127.022 87.5688C125.854 88.2343 125.27 89.1937 124.686 90.2461C124.133 91.2519 123.979 92.4281 123.656 93.5114C123.195 95.0589 123.518 96.6064 123.242 98.123C122.596 97.6123 120.675 97.7671 119.922 98.0766C119.108 98.4016 118.601 98.9896 118.278 99.6705C118.032 100.15 118.002 100.94 118.232 101.419C118.57 102.147 119.093 102.936 119.753 103.323C120.568 103.802 121.597 104.004 122.596 103.663C122.888 103.57 123.195 103.524 123.595 103.431C123.487 103.802 123.38 104.004 123.365 104.205C123.318 104.715 123.195 105.273 122.658 105.288C122.012 105.304 121.321 105.149 120.721 104.886C120.23 104.669 119.907 104.127 119.446 103.818C117.94 102.812 116.342 101.914 114.913 100.831C113.76 99.9491 112.777 98.8194 111.716 97.8135C111.025 97.1635 110.272 96.5755 109.611 95.8791C108.889 95.1208 108.259 94.2851 107.598 93.4804C107.168 92.9388 106.753 92.3817 106.353 91.8245C105.892 91.19 105.431 90.5401 105.001 89.8747C104.433 88.9926 103.833 88.1259 103.357 87.1974C102.65 85.7892 101.959 84.3654 101.39 82.8953C100.914 81.6418 100.714 80.2645 100.191 79.0264C99.6843 77.8039 99.7612 76.504 99.4077 75.3124C98.7009 73.0065 99.1311 70.7007 99.1158 68.3949C99.1158 67.3735 99.5153 66.3521 99.7612 65.3308C100.13 63.8142 100.468 62.2821 100.929 60.7965C101.19 59.9918 101.682 59.2799 102.082 58.5216C102.543 57.624 102.957 56.6801 103.511 55.8289C104.11 54.9159 104.801 54.0492 105.508 53.2136C106.184 52.4089 106.876 51.5887 107.675 50.9078C108.551 50.1495 109.55 49.4995 110.503 48.8341C111.209 48.3389 111.932 47.8901 112.669 47.4413C112.961 47.2711 113.315 47.1782 113.637 47.0544C115.082 46.4973 116.572 46.2033 118.063 45.8318C120.353 45.2593 122.688 45.5223 124.978 45.2438C125.67 45.1664 126.392 45.4295 127.083 45.3985C128.482 45.3521 129.926 45.4295 131.248 45.0581C132.907 44.5938 134.598 44.5629 136.273 44.2998C137.302 44.1296 138.347 43.7427 139.254 43.232C139.945 42.8296 140.498 42.1178 141.021 41.4523C141.897 40.3381 142.696 39.162 143.495 38.0013C143.664 37.7692 143.756 37.4752 143.848 37.1966C144.248 36.0205 144.632 34.8289 145.016 33.6528C145.293 32.7707 145.539 31.8731 145.815 30.991C146.046 30.2482 146.307 29.5208 146.553 28.7935C146.906 27.7567 147.183 26.6889 147.659 25.7139C148.166 24.6771 148.858 23.7176 149.503 22.7427C149.98 22.0153 150.487 21.288 151.025 20.6071C151.393 20.1583 151.808 19.725 152.269 19.3845C153.237 18.7036 154.206 18.0072 155.251 17.481C156.326 16.9239 157.54 16.6918 158.723 16.4132C159.861 16.1347 160.952 16.0109 162.073 16.0883C162.98 16.1502 163.887 16.3978 164.763 16.6608C165.5 16.893 166.207 17.2489 166.929 17.5584C167.559 17.837 168.189 18.162 168.819 18.4096C170.54 19.0905 171.647 18.5953 172.615 17.2334C173.506 15.9645 174.336 14.6645 175.258 13.4265C175.765 12.7301 176.426 12.142 176.995 11.4921C177.471 10.9504 177.901 10.3624 178.393 9.82075C178.992 9.15531 179.607 8.50534 180.252 7.90181C180.928 7.28279 181.666 6.74116 182.373 6.15309C182.68 5.90549 182.941 5.59598 183.264 5.36385C184.155 4.71389 185.031 4.03297 185.999 3.47586C187.213 2.77947 188.443 2.09856 189.734 1.58787C190.871 1.15456 192.162 1.12361 193.253 0.6284C194.482 0.086763 195.696 0.256991 196.91 0.287942C197.816 0.303417 198.723 0.551023 199.599 0.829579C200.321 1.04623 200.982 1.44859 201.674 1.77357C203.241 2.51639 204.455 3.69252 205.592 4.97697C206.406 5.90549 207.282 6.81853 207.959 7.85538C208.911 9.31006 209.756 10.8421 210.54 12.4051C210.986 13.2717 211.216 14.2312 211.554 15.1597C211.939 16.1966 212.307 17.2334 212.691 18.2858C212.722 18.3631 212.722 18.4405 212.722 18.5179C212.814 20.2047 212.968 21.8915 212.999 23.5783C213.014 24.383 212.876 25.2032 212.707 26.0079C212.507 26.921 212.261 27.834 211.939 28.7161C211.385 30.1553 210.817 31.5945 210.11 32.9564C209.587 33.9468 208.85 34.8134 208.158 35.711C207.574 36.4693 206.929 37.1966 206.284 37.9085C205.807 38.4346 205.254 38.8834 204.747 39.3941C204.025 40.1215 203.272 40.8333 202.611 41.6226C201.843 42.5356 201.136 43.5105 200.444 44.4855C200.214 44.8105 200.121 45.2593 200.029 45.6771C199.891 46.3116 199.814 46.9615 199.676 47.6115C199.507 48.3543 199.292 49.0971 199.092 49.84C199.046 50.0411 198.984 50.2268 198.938 50.4125C198.723 51.2946 198.493 52.1613 198.277 53.0433C197.97 54.3278 197.678 55.6123 197.371 56.8967C197.202 57.6395 197.002 58.3669 196.864 59.1097C196.664 60.162 196.387 61.1988 196.357 62.2512C196.28 64.6189 196.249 67.0021 196.357 69.3698C196.418 70.7626 196.649 72.1554 197.002 73.5172C197.402 75.0802 197.955 76.6123 198.523 78.1289C199.092 79.6919 199.722 81.2085 200.352 82.7405C200.844 83.9321 201.382 85.0928 201.873 86.2844C202.273 87.2438 202.611 88.2188 202.98 89.1783C203.41 90.3234 203.932 91.4377 204.286 92.5983C204.685 93.9756 205.008 95.3993 205.254 96.8231C205.454 97.9682 205.484 99.1598 205.607 100.32C205.623 100.522 205.746 100.692 205.776 100.893C205.823 101.28 205.899 101.682 205.869 102.085C205.838 102.456 205.638 102.797 205.592 103.168C205.346 104.932 205.223 106.696 204.87 108.445C204.716 109.219 204.163 109.9 203.794 110.643C203.671 110.89 203.61 111.153 203.487 111.401C202.596 113.119 201.458 114.62 200.045 115.951C198.754 117.158 197.386 118.241 195.85 119.123C195.004 119.603 194.098 119.99 193.206 120.407C192.223 120.872 191.239 121.351 190.225 121.754C189.641 121.986 189.027 122.094 188.412 122.249C187.705 122.435 186.998 122.636 186.291 122.822C185.339 123.054 184.386 123.332 183.418 123.487C182.419 123.657 181.328 123.518 180.421 123.905C179.33 124.354 178.27 124.245 177.21 124.168C175.842 124.075 174.49 123.781 173.137 123.533C171.754 123.286 170.371 123.023 169.004 122.682C167.882 122.388 166.776 121.986 165.685 121.599C165.362 121.491 165.008 121.321 164.778 121.088C164.64 120.949 164.594 120.547 164.686 120.361C165.224 119.231 165.854 118.133 166.407 117.003C167.006 115.78 167.605 114.558 168.159 113.32C168.481 112.592 168.62 111.772 168.973 111.06C169.849 109.327 169.895 107.439 170.079 105.567C170.11 105.164 170.356 104.777 170.54 104.329C172.123 104.979 173.583 104.638 174.613 103.354C175.565 102.162 175.688 100.042 174.628 98.8039C173.399 97.3647 171.816 97.1945 170.079 97.7361Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M170.697 104.013C171.765 104.511 173.468 104.277 174.04 103.749C174.799 103.066 175.371 102.335 175.433 101.31C175.495 100.316 175.495 99.3369 174.814 98.4979C173.947 97.4414 172.044 96.7733 170.248 97.4569C170.217 97.3326 170.171 97.2239 170.171 97.1151C170.062 95.2818 170 93.4641 169.83 91.6307C169.644 89.5955 168.654 87.9486 167.183 86.5658C166.27 85.7113 165.279 85.0743 164.087 84.5927C163.174 84.2198 162.323 84.1732 161.549 84.3441C160.543 84.5616 159.645 85.2297 158.701 85.6803C158.5 85.7735 158.252 85.8046 158.051 85.8978C157.153 86.3483 156.271 86.8455 155.357 87.2495C154.645 87.5602 153.871 87.6845 153.159 87.9952C150.853 88.974 148.438 88.8342 146.024 88.7565C145.141 88.7254 144.243 88.6167 143.392 88.3992C142.2 88.104 141.008 87.7466 139.863 87.3271C139.089 87.0475 138.408 86.5192 137.649 86.224C137.015 85.991 136.318 85.8667 135.653 85.8356C133.857 85.789 132.046 85.7269 130.251 85.8512C129.028 85.9288 127.882 86.3949 126.938 87.2495C126.721 87.4514 126.396 87.5136 126.164 87.7C125.901 87.902 125.653 88.135 125.468 88.3992C124.941 89.2071 124.431 90.015 123.966 90.8539C123.765 91.2268 123.672 91.6618 123.626 92.0813C123.44 93.6194 123.285 95.1575 123.13 96.6957C123.099 97.0685 123.084 97.4414 123.084 97.7366C122.728 97.6434 122.418 97.5036 122.109 97.488C121.01 97.4103 119.957 97.4414 118.982 98.2027C117.883 99.0572 117.511 100.191 118.285 101.419C118.657 102.009 119.013 102.786 119.57 103.066C120.422 103.501 121.428 103.765 122.434 103.376C122.712 103.268 123.037 103.268 123.455 103.19C123.316 103.516 123.192 103.672 123.208 103.827C123.301 104.821 122.48 105.008 121.877 105.396C120.762 106.111 119.539 105.909 118.332 105.847C117.79 105.816 116.768 104.34 116.459 103.827C115.639 102.491 116.351 100.953 115.731 99.5854C115.313 98.6688 115.36 97.5191 114.849 96.6646C114.214 95.6081 114.354 94.4118 113.874 93.3708C113.472 92.5008 113.085 91.6308 112.729 90.7607C112.589 90.4034 112.605 89.9839 112.45 89.6576C111.8 88.2749 111.134 86.9076 110.422 85.5404C110.236 85.1831 109.896 84.9034 109.648 84.5772C108.611 83.2566 107.791 81.7806 106.537 80.5998C105.562 79.6676 104.71 78.549 104.045 77.3838C103.472 76.3894 103.271 75.1776 102.884 74.0745C102.698 73.5773 102.389 73.1112 102.218 72.6141C102.033 72.0392 101.94 71.4333 101.816 70.8274C101.615 69.7709 101.413 68.7144 101.212 67.6579C101.15 67.3627 101.073 67.052 101.057 66.7568C101.026 65.6537 100.965 64.5506 101.026 63.4631C101.088 62.0026 101.135 60.5267 101.398 59.0973C101.584 58.103 102.125 57.1708 102.466 56.2075C102.652 55.6793 102.745 55.1199 102.822 54.5762C102.961 53.7372 103.023 52.8982 103.163 52.0748C103.333 51.0338 103.472 49.9929 103.735 48.9675C103.967 48.0664 104.277 47.1653 104.649 46.3107C105.237 44.9746 105.546 43.5142 106.413 42.2868C107.342 40.9507 108.069 39.4747 109.06 38.2162C109.942 37.0976 111.057 36.1654 112.109 35.1866C112.883 34.4564 113.657 33.6796 114.54 33.0892C115.468 32.4677 116.505 32.0172 117.527 31.5511C118.44 31.116 119.384 30.7121 120.344 30.3703C120.917 30.1683 121.551 30.1683 122.14 29.9819C123.889 29.4536 125.684 29.4847 127.48 29.5002C128.238 29.5002 128.981 29.6245 129.74 29.6245C130.901 29.609 132.062 30.044 133.223 30.1839C134.352 30.3081 135.482 30.3392 136.612 30.3392C138.733 30.3392 140.838 30.3081 142.959 30.2615C144.445 30.2149 145.9 29.8576 147.169 29.0963C147.912 28.6457 148.531 27.9311 149.135 27.2785C149.909 26.4396 150.667 25.5695 151.333 24.6373C151.797 24.0003 152.169 23.2701 152.494 22.5399C153.159 21.0484 153.778 19.5258 154.429 18.0343C155.032 16.636 155.605 15.2222 156.317 13.8861C156.781 13.016 157.416 12.2236 158.02 11.4313C158.53 10.7632 159.041 10.0796 159.629 9.47368C160.388 8.69686 161.177 7.88896 162.075 7.29857C163.159 6.58389 164.32 5.96243 165.542 5.54294C166.75 5.13899 168.035 4.71951 169.366 4.98363C169.753 5.06131 170.109 5.3099 170.496 5.44972C171.842 5.94689 173.22 6.38192 174.551 6.91016C176.207 7.57823 177.879 7.73359 179.613 7.37625C179.767 7.34518 179.922 7.34518 180.077 7.34518C181.408 7.39179 182.631 6.86355 183.9 6.58389C184.504 6.44406 185.108 6.38192 185.696 6.22655C187.027 5.85367 188.358 5.43419 189.689 5.07685C190.247 4.92148 190.85 4.87487 191.423 4.78165C192.491 4.59522 193.544 4.37771 194.612 4.22234C195.401 4.09805 196.191 3.97376 196.98 4.00483C198.28 4.05144 199.611 3.98929 200.834 4.59522C201.206 4.78165 201.686 4.75058 202.073 4.90595C203.574 5.54294 205.091 6.13333 206.515 6.89462C207.8 7.57823 208.868 8.60364 209.874 9.64458C210.756 10.5612 211.638 11.4624 212.443 12.4256C212.939 13.0315 213.31 13.7462 213.713 14.4143C214.239 15.2999 214.827 16.1699 215.199 17.1176C215.632 18.2207 215.895 19.4015 216.189 20.5512C216.39 21.3436 216.53 22.167 216.685 22.9749C217.118 25.2588 217.087 27.5271 216.7 29.811C216.685 29.9197 216.685 30.0129 216.669 30.1217C216.39 31.7686 216.205 33.4465 215.802 35.0623C215.431 36.5227 214.874 37.9521 214.27 39.3349C213.759 40.5156 213.093 41.6498 212.443 42.7529C211.669 44.0735 210.694 45.3009 210.029 46.6681C209.379 48.0042 208.341 49.0296 207.506 50.2104C206.794 51.2203 206.082 52.2302 205.354 53.2245C204.75 54.0635 204.069 54.8558 203.497 55.7259C203.032 56.425 202.692 57.2018 202.289 57.9321C201.732 58.9419 201.128 59.9207 200.602 60.9461C200.122 61.8783 199.735 62.8571 199.317 63.8204C198.683 65.2187 198.002 66.6014 197.429 68.0308C197.104 68.8542 196.98 69.7398 196.717 70.5943C196.345 71.8372 195.896 73.0802 195.54 74.3231C195.386 74.8824 195.355 75.4883 195.246 76.0632C195.061 77.0264 194.813 77.9742 194.674 78.9374C194.426 80.5998 194.24 82.2778 194.008 83.9557C193.946 84.3597 193.621 84.7791 193.652 85.152C193.76 86.3017 193.977 87.4359 194.178 88.5701C194.318 89.3158 194.457 90.0771 194.674 90.7918C195.03 91.9259 195.463 93.0446 195.85 94.1632C195.958 94.4739 195.896 94.8468 195.989 95.1575C196.376 96.3072 196.763 97.4569 197.197 98.5756C197.8 100.16 198.234 101.761 198.033 103.485C197.924 104.355 197.909 105.241 197.738 106.08C197.429 107.587 197.181 109.14 196.609 110.539C196.005 111.999 195.123 113.366 194.225 114.671C193.544 115.666 192.661 116.536 191.841 117.437C190.603 118.804 189.287 120.063 187.708 121.041C186.95 121.507 186.284 122.144 185.495 122.548C184.597 122.999 183.637 123.418 182.662 123.558C180.882 123.838 179.086 124.04 177.291 123.993C175.557 123.947 173.824 123.589 172.105 123.294C171.068 123.108 170.031 122.813 169.025 122.502C168.05 122.207 167.09 121.834 166.131 121.461C165.697 121.29 165.202 121.15 164.846 120.855C164.273 120.358 164.939 119.907 165.109 119.534C165.589 118.431 166.254 117.406 166.812 116.334C167.152 115.681 167.446 115.013 167.74 114.33C168.205 113.289 168.669 112.232 169.118 111.176C169.319 110.71 169.505 110.228 169.598 109.731C169.846 108.255 170.031 106.763 170.279 105.287C170.279 104.821 170.511 104.448 170.697 104.013Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M164.813 120.273C165.622 118.618 166.322 117.178 167.023 115.738C167.521 114.742 168.066 113.761 168.517 112.75C168.844 112.03 168.984 111.218 169.357 110.513C170.244 108.812 170.291 106.974 170.462 105.15C170.509 104.721 170.758 104.323 170.851 104.032C171.707 104.032 172.517 104.093 173.295 104.016C174.042 103.955 174.649 103.434 175.038 102.883C176.049 101.442 176.034 99.4658 175.022 98.3014C174.088 97.2288 172.221 96.7232 170.493 97.3974C170.462 97.3055 170.416 97.2288 170.4 97.1522C170.291 95.4515 170.167 93.7508 170.073 92.05C169.964 89.8743 168.984 88.1429 167.396 86.672C166.478 85.8293 165.498 85.1858 164.284 84.7108C163.381 84.3584 162.556 84.3737 161.716 84.435C161.062 84.4963 160.44 84.9253 159.786 85.2011C158.977 85.5535 158.09 85.7987 157.358 86.2737C155.958 87.1623 154.339 87.4994 152.845 88.1276C150.37 89.1695 147.849 88.8171 145.343 88.7405C144.176 88.7099 143.025 88.1429 141.857 87.8212C141.468 87.7139 141.079 87.622 140.69 87.5147C139.803 87.2389 138.885 87.0244 138.06 86.6414C135.43 85.4156 132.66 85.86 129.936 85.9825C128.644 86.0438 127.477 86.764 126.45 87.5607C125.968 87.9284 125.47 88.3421 125.174 88.8324C124.582 89.8284 124.116 90.9009 123.602 91.9428C123.571 92.0041 123.555 92.096 123.555 92.1726C123.415 93.7967 122.855 95.3749 123.073 97.0297C123.104 97.2748 123.042 97.5353 123.026 97.7957C122.793 97.6579 122.59 97.474 122.388 97.4587C121.159 97.3821 119.96 97.3208 118.855 98.1635C117.813 98.9602 117.579 100.109 118.139 101.32C118.466 102.055 118.995 102.668 119.556 102.959C120.349 103.388 121.376 103.618 122.372 103.266C122.668 103.158 122.979 103.128 123.322 103.066C123.151 104.093 122.933 104.936 122.015 105.365C121.517 105.595 120.987 105.901 120.458 105.947C119.166 106.039 117.859 106.1 116.583 105.962C115.712 105.87 114.887 105.426 114.046 105.15C112.21 104.522 110.903 103.235 109.891 101.688C109.268 100.753 108.91 99.6497 108.444 98.6231C108.054 97.7958 107.681 96.953 107.307 96.1257C107.276 96.049 107.245 95.9878 107.23 95.9112C106.95 94.7927 106.638 93.6742 106.374 92.5557C106.094 91.3759 105.876 90.1654 105.611 88.9856C105.004 86.1817 104.911 83.3319 105.066 80.4973C105.144 78.9345 105.347 77.3716 105.72 75.8548C106.078 74.4298 106.56 72.9589 107.307 71.7025C108.459 69.7566 109.673 67.7954 111.354 66.1866C112.21 65.3746 113.019 64.5319 113.797 63.6585C114.451 62.9231 114.715 61.9425 115.167 61.0998C116.241 59.1385 115.929 57.0854 115.929 55.0476C115.929 52.7493 115.852 50.451 115.945 48.1527C115.992 46.9883 116.272 45.8391 116.49 44.69C116.63 43.9239 116.801 43.1731 116.988 42.4223C117.268 41.3498 117.501 40.2773 117.906 39.2507C118.248 38.362 118.902 37.5806 119.229 36.6766C119.789 35.1444 120.91 34.0412 121.999 32.9227C123.042 31.8502 124.209 30.8849 125.314 29.8737C125.89 29.3374 126.419 28.7552 127.026 28.2496C127.695 27.698 128.395 27.1617 129.127 26.702C130.138 26.0738 131.166 25.461 132.271 24.986C133.453 24.4804 134.714 24.1586 135.928 23.7143C139.227 22.5345 142.636 22.9635 146.013 22.9941C148.3 23.0248 150.604 23.224 152.892 23.2393C154.183 23.2546 155.475 23.1014 156.751 22.9175C157.95 22.749 159.179 22.5498 160.3 22.1514C161.467 21.7377 162.556 21.2168 163.35 20.0217C164.393 18.4589 165.638 16.9573 167.287 15.8694C168.672 14.9501 169.933 13.847 171.318 12.943C172.127 12.422 173.077 12.1156 173.979 11.7479C175.162 11.2576 176.345 10.7366 177.559 10.3689C178.384 10.1237 179.286 9.98583 180.142 10.0012C181.87 10.0318 183.597 10.0778 185.309 10.3229C186.632 10.5221 187.986 10.8592 189.216 11.3954C190.912 12.1462 192.531 13.0809 194.118 14.0308C194.709 14.3832 195.192 14.9655 195.612 15.517C196.328 16.4517 197.355 16.7122 198.398 17.0186C199.285 17.2791 200.172 17.5395 201.028 17.8613C202.102 18.2597 203.176 18.6274 204.203 19.133C205.386 19.7153 206.506 20.4201 207.642 21.0942C208.203 21.4313 208.763 21.7837 209.292 22.1821C210.226 22.8716 211.222 23.5151 212.031 24.3425C213.261 25.5835 214.49 26.8706 215.439 28.3108C216.451 29.843 217.245 31.5131 217.789 33.3058C218.21 34.7001 218.241 36.125 218.614 37.4734C219.19 39.5725 218.972 41.6562 218.894 43.74C218.848 45.073 218.568 46.452 218.101 47.7084C217.712 48.7656 217.556 49.8075 217.385 50.8954C217.245 51.784 216.933 52.6574 216.716 53.546C216.607 53.9904 216.56 54.4347 216.435 54.8791C216.155 55.875 215.891 56.8862 215.517 57.8515C215.237 58.6176 214.801 59.3224 214.443 60.0579C214.303 60.349 214.225 60.6707 214.07 60.9619C213.401 62.2795 212.84 63.6738 212.016 64.8843C211.222 66.0334 210.21 67.06 209.183 68.0406C208.094 69.0825 206.895 70.0324 205.697 70.9824C205.355 71.2582 204.888 71.3501 204.483 71.5646C203.254 72.2388 202.024 72.9436 200.779 73.6178C200.374 73.8323 199.876 73.8936 199.534 74.154C198.756 74.7669 198.04 75.4564 197.308 76.1306C196.888 76.5289 196.499 76.9426 196.11 77.3716C195.519 78.0152 194.927 78.6587 194.383 79.3328C193.713 80.1449 193.091 81.0029 192.468 81.8456C192.359 81.9988 192.344 82.2287 192.25 82.3972C191.815 83.2706 191.41 84.1592 190.897 84.9866C190.196 86.1204 189.636 87.2849 189.294 88.5566C188.951 89.7977 188.671 91.0694 188.235 92.2799C187.099 95.4821 187.519 98.7917 187.535 102.055C187.55 103.235 187.706 104.43 187.815 105.61C188.002 107.586 187.224 109.348 186.352 111.019C185.543 112.551 184.438 113.945 183.115 115.094C181.917 116.136 180.796 117.285 179.302 118.051C178.01 118.71 176.734 119.308 175.38 119.859C174.353 120.273 173.264 120.319 172.283 120.671C171.303 121.024 170.369 121.039 169.42 120.962C167.91 120.809 166.385 120.503 164.813 120.273Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M164.752 119.969C164.799 119.722 164.783 119.49 164.876 119.305C165.452 118.224 166.043 117.143 166.619 116.078C166.992 115.398 167.381 114.719 167.708 114.009C168.159 113.005 168.533 111.986 168.937 110.967C169.093 110.565 169.326 110.179 169.388 109.762C169.653 108.218 169.824 106.658 170.089 105.114C170.151 104.728 170.384 104.389 170.493 104.141C171.333 104.141 172.127 104.203 172.92 104.126C173.667 104.064 174.258 103.539 174.678 102.983C175.628 101.717 175.596 99.6634 174.881 98.7215C173.652 97.1001 171.971 96.8839 170.089 97.4244C170.057 97.2699 170.026 97.1155 170.011 96.9611C169.902 95.139 169.855 93.3169 169.668 91.5102C169.466 89.5182 168.439 87.9278 166.961 86.5843C166.043 85.7505 165.079 85.1483 163.912 84.6696C163.009 84.299 162.185 84.3299 161.344 84.3916C160.691 84.4534 160.069 84.8858 159.415 85.1637C158.606 85.5189 157.719 85.7659 156.988 86.2446C155.588 87.1402 153.97 87.48 152.476 88.1131C150.002 89.1631 147.482 88.8079 144.977 88.7307C143.81 88.6998 142.658 88.1285 141.491 87.8042C141.149 87.7116 140.807 87.6498 140.464 87.5417C139.562 87.2483 138.613 87.0167 137.773 86.6152C135.454 85.5034 132.996 85.8277 130.585 85.874C129.744 85.8895 128.873 85.9976 128.095 86.2755C127.364 86.538 126.726 87.0476 126.088 87.5263C125.606 87.8969 125.108 88.2984 124.812 88.8079C124.221 89.8116 123.754 90.8926 123.241 91.9426C123.21 92.0043 123.21 92.097 123.194 92.1742C123.054 93.811 122.494 95.4015 122.712 97.0692C122.743 97.3163 122.681 97.5633 122.65 97.8567C122.432 97.7177 122.276 97.5325 122.089 97.517C120.767 97.3935 119.476 97.3935 118.34 98.2582C117.266 99.0921 117.079 100.482 117.982 101.887C118.822 103.2 120.58 103.91 122.105 103.261C122.261 103.2 122.447 103.215 122.634 103.184C122.712 104.018 122.152 104.682 121.358 104.744C120.907 104.775 120.456 104.867 120.02 104.805C118.9 104.62 118.075 103.864 117.282 103.169C116.504 102.505 115.804 101.733 115.181 100.914C114.621 100.173 114.03 99.3546 113.765 98.4744C113.376 97.1464 112.723 95.9574 112.178 94.7221C111.665 93.5639 111.26 92.3595 110.747 91.2014C110.265 90.0896 109.705 89.0087 109.176 87.9123C108.366 86.2446 107.246 84.8086 106.002 83.4343C105.037 82.3688 103.854 81.5349 102.781 80.593C102.127 80.0371 101.692 79.1878 101.303 78.3848C100.805 77.3503 100.463 76.2385 100.058 75.1575C100.042 75.1112 100.027 75.0495 100.027 75.0031C100.027 72.8413 99.9491 70.6795 100.058 68.5331C100.105 67.6066 100.4 66.6338 100.805 65.7845C101.645 64.0087 102.205 62.063 103.699 60.627C104.212 60.1328 104.477 59.3762 105.052 59.0056C106.064 58.3416 107.184 57.8629 108.289 57.3379C109.658 56.6739 111.105 56.1335 112.427 55.3923C113.75 54.6665 115.057 53.8635 116.239 52.9216C117.826 51.6708 119.351 50.312 120.829 48.9222C121.903 47.9031 122.93 46.8222 123.863 45.6795C124.454 44.9537 124.874 44.089 125.326 43.2552C125.995 42.0198 126.695 40.7999 127.286 39.5337C127.613 38.8234 127.753 38.0359 127.986 37.2947C128.375 36.013 128.811 34.7468 129.184 33.4806C129.355 32.9093 129.355 32.2607 129.573 31.7203C129.947 30.8246 130.445 29.9908 130.911 29.1415C131.207 28.6165 131.565 28.1224 131.86 27.5819C132.358 26.6863 132.778 25.7289 133.323 24.8642C133.883 23.9994 134.552 23.2119 135.174 22.3935C135.672 21.7295 136.155 21.0501 136.684 20.417C137.322 19.6604 137.991 18.9346 138.675 18.2243C139.391 17.4831 140.107 16.7573 140.885 16.0779C141.491 15.5529 142.129 15.0588 142.829 14.6573C143.825 14.0859 144.883 13.5918 145.926 13.1131C146.268 12.9587 146.657 12.9124 147.03 12.8352C147.964 12.619 148.897 12.4028 149.831 12.2329C150.515 12.1094 151.216 11.9859 151.9 12.0013C153.534 12.0476 155.168 12.0785 156.77 12.3101C158.373 12.5418 159.991 12.866 161.516 13.3911C162.605 13.7617 163.554 14.5337 164.55 15.1514C165.405 15.6764 166.23 16.2169 167.07 16.7419C168.502 17.6221 170.089 18.1471 171.676 18.6875C172.811 19.0736 173.9 19.3052 175.067 19.3978C175.596 19.4442 176.125 19.7684 176.608 19.7067C178.117 19.5368 179.642 19.3052 181.12 18.9655C182.178 18.7184 183.22 18.3478 184.216 17.9C185.492 17.3287 186.69 16.6184 187.95 16.0007C188.495 15.7382 189.086 15.5683 189.631 15.3367C190.595 14.9507 191.56 14.5029 192.54 14.1477C193.038 13.9624 193.598 13.808 194.111 13.8234C195.807 13.8697 197.566 13.7462 199.184 14.1477C201.082 14.6264 203.011 15.3521 204.443 16.7728C205.672 17.9927 206.901 19.228 207.585 20.9111C207.912 21.7141 208.146 22.4862 208.254 23.32C208.426 24.4781 208.301 25.7289 208.675 26.8098C209.095 28.0143 209.032 29.1724 208.97 30.3614C208.939 31.3033 208.69 32.2453 208.488 33.1872C208.363 33.8358 208.099 34.4534 208.006 35.102C207.834 36.2601 207.15 37.1866 206.776 38.2366C206.154 39.9506 205.547 41.6492 205.189 43.4713C204.8 45.4787 204.723 47.4553 204.832 49.4472C204.878 50.3274 205.158 51.2076 205.361 52.0878C205.532 52.8598 205.703 53.6165 205.874 54.3731C206.154 55.6085 206.372 56.8747 206.73 58.0946C207.119 59.4071 207.648 60.6733 208.099 61.9704C208.27 62.4645 208.379 62.9895 208.488 63.5146C208.784 64.9043 209.079 66.3095 209.359 67.6992C209.577 68.7802 209.935 69.8611 209.966 70.942C210.044 73.8141 209.966 76.6863 209.95 79.5584C209.95 79.7128 209.873 79.8518 209.841 80.0062C209.561 81.4886 209.328 82.971 208.97 84.438C208.69 85.5961 208.317 86.7233 207.912 87.8351C207.445 89.1168 206.916 90.3984 206.341 91.6492C205.765 92.9154 205.236 94.2125 204.458 95.3552C203.447 96.8376 202.342 98.2582 200.817 99.3082C200.055 99.8333 199.433 100.559 198.686 101.146C197.97 101.702 197.192 102.196 196.461 102.721C195.605 103.338 194.749 103.956 193.878 104.574C193.831 104.605 193.8 104.636 193.754 104.666C192.478 105.346 191.233 106.072 189.942 106.72C188.961 107.214 187.95 107.616 186.939 108.033C185.663 108.558 184.309 108.959 183.08 109.592C181.882 110.21 180.56 110.272 179.315 110.642C178.148 110.982 176.997 111.368 175.861 111.801C174.678 112.233 173.512 112.681 172.376 113.221C170.882 113.916 169.653 114.951 168.564 116.186C167.412 117.483 166.199 118.734 165.016 120C165.063 119.985 164.985 119.954 164.752 119.969Z" }, 
            ease: "steps(1)", 
          },
        ]
      });
 
      // .girl-youga__circle ===================
      const animationSettings = {
        duration: 2,
        scale: 0,
        opacity: 1,
        yoyo: true,
        ease: "power2.inOut",
        transformOrigin: "50% 50%"
      };
      let tlGirlYougaCircle = gsap.timeline({
        repeat: -1
      });
      tlGirlYougaCircle.fromTo(".girl-youga__circle-01", {opacity: 0, scale: 1}, {...animationSettings})
                      .fromTo(".girl-youga__circle-02", {opacity: 0, scale: 1}, {...animationSettings}, "+=0.2")
                      .fromTo(".girl-youga__circle-03", {opacity: 0, scale: 1}, {...animationSettings}, "+=0.4");
  
  
      // .girl-youga__line =========================================
       const line = document.querySelector('.girl-youga__line');
       // Получаем общую длину пути линии
       const lineLength = line.getTotalLength();
       // Устанавливаем начальные значения для линии
       line.style.strokeDasharray = lineLength;
       line.style.strokeDashoffset = lineLength;
      
       let tlGirlYougaLine = gsap.timeline({repeat: -1, repeatDelay: 0.5});
      
       tlGirlYougaLine.to(line, {
         duration: 1,
         strokeDashoffset: 0,
         ease: "power2.inOut"
       }).to(line, {
         duration: 2,
         strokeDashoffset: -lineLength,
         ease: "power2.inOut"
       }).set(line, {
         strokeDashoffset: lineLength,
         opacity: 1
       });
    }
  
    if (girlStars) {
      let tlStars = gsap.timeline({ repeat: -1 });
      girlStars.forEach((star, index) => {
        let randomDelay = Math.random();
        tlStars.fromTo( star, 
          {
          opacity: 1
          }, 
          {
            opacity: 0,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: randomDelay
          }, 
          index * 0.1 // Добавляем небольшую задержку между каждой звездочкой
        ); 
      });
      ScrollTrigger.create({
        trigger: girlStars,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          tlStars.play(); 
        },
        onEnterBack: () => {
          tlStars.play();
        },
        onLeave: () => {
          tlStars.pause(); 
        },
        onLeaveBack: () => {
          tlStars.pause();
        },
      });
    }
  
    if (animGirlPuzzle) {
      gsap.to(".girl-puzzle__hair", {
        transformOrigin: "50% 50%",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        keyframes: [
          {  
             attr: { d: "M176.569 189.943C176.481 189.219 176.598 188.437 176.336 187.8C175.203 184.904 174.709 181.689 172.589 179.228C170.585 176.911 168.609 174.449 166.227 172.509C164.484 171.09 162.073 170.482 160.011 169.41C155.654 167.18 150.89 167.122 146.184 167.006C144.034 166.948 141.856 167.296 139.735 167.73C137.092 168.31 134.419 168.918 131.95 169.989C127.564 171.901 123.759 174.855 119.982 177.751C116.409 180.444 113.069 183.456 109.467 186.091C107.143 187.8 104.558 189.19 102.059 190.667C100.985 191.304 99.8808 191.941 98.7188 192.405C95.9883 193.476 93.2577 194.432 90.4982 195.417C87.5062 196.459 84.4851 197.502 81.4351 198.486C79.5469 199.095 77.5716 199.5 75.6835 200.108C73.3596 200.832 71.0357 201.585 68.7409 202.425C64.4417 204.018 60.0554 205.495 55.8725 207.377C52.7643 208.767 49.7433 210.505 47.0127 212.561C44.0498 214.791 41.4064 217.485 38.7339 220.062C37.2524 221.452 36.0034 223.074 34.609 224.551C33.5052 225.709 32.3142 226.781 31.2104 227.939C29.9613 229.214 28.8575 230.604 27.5503 231.791C26.3012 232.949 24.9359 233.992 23.5997 235.064C21.8858 236.425 20.172 237.757 18.4291 239.089C17.0057 240.19 15.4081 241.116 14.1299 242.362C12.6485 243.781 11.196 245.402 10.1212 247.169C9.1336 248.82 8.26215 250.76 8.08786 252.643C7.82643 255.075 8.20406 257.595 8.49454 260.056C8.87217 263.474 9.62743 266.775 11.0217 269.99C12.2999 272.944 13.7523 275.608 16.0471 277.867C17.79 279.605 19.9687 279.605 22.1182 279.634C23.3383 279.663 24.5583 279.199 26.156 278.881C25.4878 279.952 25.0812 280.879 24.4712 281.603C23.3383 282.993 23.3383 285.86 24.2388 287.077C24.8778 287.917 25.6912 288.67 26.2141 289.567C28.3636 293.072 30.978 296.17 33.97 298.979C36.2939 301.18 38.7339 303.295 41.2902 305.235C43.2074 306.683 45.3279 307.899 47.4194 309.058C49.3656 310.129 51.4571 310.94 53.4615 311.925C56.802 313.547 60.1426 314.618 63.7446 312.62C64.9356 311.954 66.2718 311.548 67.6952 310.94C66.7366 315.371 66.998 316.674 70.6871 319.165C72.1686 320.15 73.8244 320.729 75.4801 321.424C79.3436 322.988 83.3522 323.654 87.39 324.436C89.0748 324.754 90.7886 325.015 92.5025 325.189C93.8387 325.334 95.204 325.594 96.5112 325.391C98.835 325.044 101.188 324.552 103.425 323.799C105.778 322.988 108.101 321.945 110.251 320.7C113.621 318.702 116.293 315.892 118.733 312.881C119.895 311.432 121.26 310.158 122.364 308.681C124.136 306.335 125.763 303.845 127.477 301.47C129.191 299.124 130.846 296.692 132.705 294.491C135.552 291.102 136.976 286.961 138.98 283.138C140.345 280.532 141.304 277.751 142.582 275.087C143.686 272.799 144.935 270.569 146.3 268.426C148.043 265.646 149.67 262.75 151.819 260.288C155.131 256.494 158.791 252.99 162.422 249.457C167.099 244.91 171.078 239.9 173.315 233.702C173.954 231.878 174.419 229.995 174.884 228.142C175.436 225.883 176.162 223.653 176.394 221.365C176.83 217.34 177.062 213.314 177.208 209.26C177.411 202.802 177.411 196.343 176.569 189.943ZM76.1192 214.704C71.82 216.5 68.0437 219.106 65.197 222.813C63.5993 224.898 62.0307 227.128 60.985 229.503C59.8521 232.081 59.2421 234.89 58.574 237.641C57.8768 240.508 57.2958 243.404 56.8601 246.3C56.3953 249.486 56.3372 252.701 55.8144 255.886C55.2915 259.072 54.2748 262.171 53.7519 265.327C53.2581 268.339 51.9219 270.975 50.6438 273.639C49.7433 275.492 48.407 277.201 47.0708 278.823C45.9379 280.155 44.5726 281.285 43.2074 282.385C42.8007 282.704 42.1035 282.646 41.5226 282.733C41.4935 282.327 41.2902 281.748 41.4935 281.574C42.394 280.647 43.4688 279.865 44.3984 278.939C45.4441 277.896 46.4608 276.796 47.3322 275.608C49.8014 272.307 50.9342 268.426 52.1543 264.574C53.4324 260.636 53.6067 256.523 54.1877 252.498C54.8558 247.922 55.4077 243.317 56.2501 238.771C56.6858 236.425 57.6154 234.166 58.3997 231.936C59.1259 229.909 59.7359 227.794 60.8107 225.97C62.1179 223.74 63.6865 221.626 65.4584 219.714C67.0271 218.006 68.8571 216.442 70.8324 215.255C72.9239 213.951 75.3058 213.111 77.5716 212.156C79.1983 211.461 80.8831 210.824 82.5679 210.273C84.0785 209.752 85.6471 209.376 87.2157 208.97C89.1038 208.449 90.992 207.899 92.9092 207.406C93.7806 207.175 94.7392 207.204 95.6107 206.972C98.225 206.306 100.839 205.582 103.396 204.8C105.923 204.018 108.508 203.323 110.919 202.251C113.098 201.267 115.189 199.992 117.165 198.602C118.733 197.502 120.186 196.141 121.493 194.722C123.468 192.578 125.269 190.32 127.128 188.061C128.784 186.062 130.353 183.977 131.979 181.95C132.88 180.849 133.751 179.72 134.797 178.764C136.772 176.969 138.777 175.173 140.926 173.638C143.802 171.582 147.172 170.511 150.657 170.018C151.906 169.844 153.214 170.221 154.492 170.482C154.695 170.511 154.927 171.177 154.898 171.553C154.869 171.785 154.463 172.161 154.201 172.19C153.446 172.277 152.662 172.219 151.877 172.219C146.997 171.988 143.018 173.957 139.474 177.143C138.225 178.243 136.83 179.17 135.639 180.328C134.536 181.429 133.577 182.703 132.589 183.919C130.934 186.004 129.278 188.09 127.651 190.175C126.751 191.333 125.995 192.607 125.066 193.766C124.136 194.924 123.207 196.083 122.074 197.009C119.953 198.718 117.804 200.456 115.48 201.846C113.272 203.149 110.89 204.221 108.479 205.118C105.197 206.306 101.856 207.29 98.5155 208.217C96.1335 208.883 93.6354 209.202 91.2244 209.781C88.7552 210.389 86.2571 211.026 83.8461 211.808C81.2317 212.648 78.6755 213.662 76.1192 214.704ZM146.126 181.342C146.01 181.747 146.039 182.297 145.748 182.529C144.993 183.224 144.18 183.832 143.337 184.383C140.461 186.323 138.225 188.785 136.83 192.028C135.436 195.301 133.838 198.515 132.183 201.672C131.689 202.599 130.759 203.41 129.859 203.989C127.854 205.321 126.024 207.059 123.381 207.175C122.539 207.204 121.696 207.522 120.505 207.783C120.302 207.464 119.75 207.03 119.808 206.711C119.895 206.335 120.447 205.9 120.883 205.784C122.771 205.205 124.833 205.003 126.576 204.134C128.058 203.41 129.307 202.078 130.382 200.774C132.735 197.878 133.577 194.2 135.175 190.899C136.337 188.466 137.992 186.294 140.113 184.585C141.623 183.369 143.25 182.326 144.877 181.284C145.138 181.081 145.69 181.313 146.126 181.342ZM162.887 183.89C158.5 184.383 154.957 186.352 152.023 189.596C150.483 191.333 148.798 192.955 147.404 194.779C146.416 196.054 145.777 197.618 145.051 199.095C144.238 200.745 143.511 202.425 142.785 204.105C141.71 206.537 140.752 209.057 139.59 211.461C138.486 213.749 137.237 215.979 135.901 218.151C134.739 220.062 133.461 221.915 132.008 223.624C130.788 225.072 129.249 226.26 127.796 227.476C126.111 228.866 124.456 230.256 122.655 231.472C119.808 233.384 116.729 234.803 113.446 235.874C110.193 236.946 106.881 237.989 103.802 239.437C102.263 240.161 101.072 241.724 99.9389 243.086C97.1502 246.474 96.1916 250.615 95.2621 254.786C94.7102 257.305 93.8387 259.767 93.1416 262.257C92.9673 262.866 93.0254 263.503 92.9382 264.111C92.2701 269.092 91.5729 274.044 90.9048 278.997C90.5853 281.314 90.4982 283.688 90.0624 285.976C89.3653 289.509 88.5229 293.043 86.78 296.257C86.4314 296.894 85.9666 297.531 85.4437 298.024C85.1823 298.255 84.4851 298.284 84.2237 298.082C83.9913 297.879 83.8461 297.126 84.0204 296.894C86.6928 293.071 87.9709 288.785 88.3776 284.21C88.7262 280.416 89.1329 276.593 89.6267 272.799C90.0043 269.729 90.3239 266.602 91.1082 263.648C92.4153 258.637 93.0544 253.425 95.233 248.617C96.1335 246.648 96.6855 244.534 97.7312 242.651C98.4574 241.348 99.6193 240.248 100.81 239.292C102.873 237.641 105.342 236.685 107.84 235.817C110.338 234.948 112.865 234.253 115.305 233.239C119.866 231.357 123.962 228.721 127.622 225.362C130.382 222.813 132.822 220.004 134.681 216.847C136.714 213.401 138.138 209.578 139.822 205.929C140.403 204.655 141.042 203.41 141.652 202.164C142.785 199.819 143.802 197.415 145.08 195.156C146.039 193.476 147.172 191.825 148.479 190.406C149.989 188.756 151.645 187.163 153.475 185.831C156.264 183.832 159.227 182.037 163.032 181.776C163.526 182.095 163.991 182.413 164.484 182.761C163.962 183.108 163.468 183.803 162.887 183.89Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M175.827 189.496C175.624 187.273 175.102 185.08 174.87 182.858C174.522 179.788 172.986 177.156 171.188 174.963C168.405 171.571 165.041 168.764 160.634 167.36C157.822 166.454 155.039 165.957 152.168 165.752C150.98 165.664 149.733 166.015 148.544 166.278C146.544 166.717 144.456 167.039 142.6 167.828C138.86 169.466 135.236 171.337 131.612 173.179C128.452 174.817 125.117 175.694 121.551 175.635C118.275 175.577 114.999 175.343 111.722 175.431C109.026 175.489 106.271 175.752 103.633 176.279C101.082 176.776 98.5592 177.448 96.1817 178.472C93.8912 179.437 91.7457 180.87 89.6292 182.215C87.6286 183.472 85.657 184.729 83.8305 186.191C82.2068 187.478 80.8151 189.057 79.2495 190.402C77.075 192.244 75.5383 194.584 73.9726 196.864C72.6969 198.736 71.7112 200.841 70.6094 202.859C69.1307 205.49 67.1882 207.654 64.6657 209.321C63.0711 210.374 61.4764 211.485 59.8238 212.421C59.1279 212.83 58.2291 212.947 57.4173 213.093C54.576 213.619 51.7346 214.087 48.8932 214.672C46.0808 215.257 43.2974 215.929 40.5141 216.631C38.5425 217.099 36.484 217.421 34.6864 218.269C31.2361 219.848 27.6409 221.397 24.5676 223.62C19.3198 227.363 14.6808 231.69 11.4335 237.568C9.14301 241.691 8.53416 245.989 7.92529 250.404C7.51938 253.299 8.82409 255.814 9.98383 258.3C10.7667 259.908 11.8684 261.428 13.0282 262.803C14.1589 264.118 15.6376 265.113 16.7973 266.399C19.5227 269.411 22.1611 272.54 24.7996 275.61C26.9161 278.096 28.9746 280.698 30.0764 283.798C31.0622 286.605 31.526 289.558 32.2509 292.453C32.4828 293.389 32.5988 294.441 33.0627 295.26C35.0053 298.74 37.9336 300.904 41.9347 301.488C42.3697 301.547 43.0945 301.752 43.1235 301.985C43.1815 302.424 42.9495 302.98 42.6596 303.36C41.3549 305.026 41.2969 306.635 42.4566 308.448C44.8051 312.074 47.8204 315.085 51.5316 317.191C54.6339 318.945 58.0552 319.881 61.5924 320.495C64.4048 320.963 67.1881 321.548 70.0005 322.074C71.5082 322.337 72.9869 322.746 74.4945 322.805C78.0027 322.951 81.54 323.039 85.0192 322.922C86.2659 322.863 87.6286 322.308 88.7304 321.635C90.9049 320.29 92.9344 318.682 95.1669 317.074C95.2249 317.132 95.5728 317.278 95.7178 317.542C96.8196 319.588 98.7911 320.056 100.763 320.407C105.025 321.197 108.997 319.588 112.824 318.214C115.578 317.22 117.927 315.144 120.391 313.448C121.522 312.688 122.566 311.752 123.552 310.787C124.914 309.442 126.364 308.126 127.437 306.576C128.799 304.617 130.017 302.57 130.423 300.056C130.771 297.921 131.815 295.933 132.54 293.856C133.525 291.166 134.25 288.33 135.555 285.786C137.208 282.54 140.02 280.259 142.948 278.213C145.094 276.692 147.384 275.347 149.559 273.856C152.69 271.692 155.242 268.914 157.735 266.048C159.91 263.592 161.04 260.639 161.997 257.656C162.78 255.229 162.722 252.539 163.041 249.937C163.099 249.556 163.186 249.176 163.186 248.796C163.186 246.252 163.186 243.738 163.157 241.194C163.128 238.825 162.954 236.427 163.128 234.059C163.244 232.451 163.795 230.872 164.172 229.263C164.491 227.772 164.636 226.193 165.186 224.819C166.259 222.099 167.506 219.468 168.782 216.836C170.231 213.795 171.826 210.842 173.276 207.83C173.827 206.66 174.406 205.373 174.551 204.116C174.986 200.432 175.218 196.718 175.508 193.005C175.566 191.776 175.914 190.607 175.827 189.496ZM66.9272 243.123C66.1734 244.176 65.1586 245.024 64.3758 246.048C62.5202 248.533 59.7658 249.761 57.3593 251.486C55.3878 252.89 53.2133 254.118 51.6186 255.902C49.676 258.066 48.3423 260.697 47.7335 263.738C47.2406 266.341 46.3998 268.826 44.7761 271.136C42.8625 273.856 40.688 276.312 38.4555 278.71C38.1076 279.09 37.3538 279.061 36.8029 279.236C36.9478 278.651 36.9479 277.92 37.2958 277.482C39.2094 275.142 41.4709 273.008 43.1525 270.493C44.4282 268.563 45.124 266.195 45.8489 263.943C46.6027 261.545 47.0956 259.147 48.6323 257.013C50.9227 253.855 53.8511 251.603 57.0694 249.586C59.6788 247.977 62.0563 246.106 64.1728 243.825C66.9562 240.813 68.9858 237.363 70.6094 233.708C71.6822 231.252 72.262 228.532 72.7839 225.901C73.5957 221.719 74.2046 217.45 76.3501 213.707C77.1619 212.274 78.4377 211.046 79.6264 209.877C82.8447 206.66 86.8168 204.876 91.1948 203.999C93.6013 203.502 96.0947 203.268 98.4432 202.508C101.864 201.397 105.576 200.87 108.533 198.531C109.896 197.449 111.374 196.513 112.534 195.256C113.52 194.174 114.071 192.741 114.825 191.455C116.216 189.145 117.55 186.835 119.84 185.197C121.841 183.794 123.523 181.922 125.581 180.606C127.611 179.32 129.93 178.472 132.105 177.419C134.946 176.045 137.759 174.641 140.6 173.296C141.093 173.062 141.673 173.062 142.252 172.945C142.658 174.115 142.426 174.583 141.499 174.992C139.788 175.694 138.164 176.659 136.483 177.448C133.931 178.618 131.235 179.554 128.799 180.928C126.103 182.449 123.465 184.174 121.145 186.191C118.681 188.326 116.854 191.045 115.346 194.057C113.839 197.04 111.49 199.438 108.33 200.753C105.605 201.894 102.879 203.034 100.096 203.911C97.7474 204.642 95.2829 204.876 92.9054 205.461C90.7309 205.988 88.5564 206.514 86.4979 207.391C83.5985 208.619 81.0471 210.461 79.1915 213.064C77.7418 215.081 76.4661 217.187 76.0312 219.76C75.5093 222.83 74.3206 225.784 73.9147 228.825C73.5087 231.924 72.1171 234.614 70.8703 237.334C69.7976 239.41 68.2899 241.252 66.9272 243.123ZM115.462 207.069C115.172 207.479 114.999 208.064 114.593 208.239C112.737 209.146 110.765 209.76 108.997 210.812C107.344 211.806 105.634 213.005 104.474 214.497C102.676 216.836 101.401 219.585 99.7189 222.041C98.7331 223.474 97.4284 224.672 96.2107 225.959C95.1669 227.07 94.0362 228.094 92.8185 229.293C92.4415 228.795 92.2096 228.445 91.8907 228.006C93.2534 226.632 94.848 225.316 96.0947 223.737C97.6314 221.836 99.226 219.848 100.212 217.625C101.372 215.081 103.053 213.035 105.112 211.426C107.054 209.906 109.461 208.97 111.664 207.8C112.36 207.42 113.027 206.952 113.781 206.777C114.332 206.66 114.912 206.952 115.462 207.069ZM158.721 187.156C157.967 188.706 157.329 190.344 156.952 192.01C155.474 198.677 152.139 204.116 146.689 208.181C144.456 209.847 142.252 211.543 139.846 212.976C137.816 214.175 135.497 214.906 133.409 216.017C131.322 217.128 129.35 218.444 127.321 219.643C123.697 221.778 120.855 224.848 117.985 227.83C116.883 228.971 115.897 230.228 114.97 231.515C113.578 233.503 112.186 235.492 110.968 237.597C109.809 239.615 108.881 241.778 107.837 243.884C106.88 245.784 106.04 247.831 104.822 249.556C103.43 251.486 101.777 253.299 100.009 254.908C98.1243 256.604 95.9788 258.066 93.9202 259.557C91.4268 261.37 88.4694 262.627 86.6718 265.347C85.1062 267.686 83.5985 270.054 83.2216 272.949C82.8157 275.99 82.5547 279.061 81.9749 282.072C81.279 285.64 80.4092 289.266 78.4377 292.336C77.2199 294.207 75.4223 295.699 73.8567 297.395C73.3928 296.956 73.1318 296.693 72.7549 296.371C73.2188 295.757 73.5957 295.114 74.1176 294.617C75.8572 292.921 77.4229 291.049 78.2927 288.769C79.0755 286.751 79.6554 284.587 80.0323 282.452C80.4962 279.645 80.4092 276.751 81.0181 273.973C81.7719 270.493 83.0476 267.189 85.2801 264.294C87.3387 261.604 90.1221 259.966 92.8764 258.183C94.732 256.984 96.4427 255.492 98.1243 254.06C99.516 252.861 100.966 251.662 102.067 250.229C103.459 248.445 104.706 246.515 105.779 244.498C107.286 241.691 108.475 238.737 109.925 235.93C110.881 234.117 111.983 232.334 113.23 230.696C114.622 228.883 116.187 227.187 117.84 225.608C120.42 223.123 122.885 220.433 125.813 218.415C128.857 216.28 132.395 214.877 135.671 213.093C138.048 211.806 140.426 210.52 142.687 208.999C144.717 207.625 146.689 206.134 148.457 204.409C151.356 201.601 153.299 198.122 154.749 194.35C155.271 192.946 155.387 191.367 155.763 189.905C156.401 187.478 157.387 185.197 159.069 183.267C159.881 182.332 160.374 182.302 161.475 182.946C160.489 184.378 159.446 185.665 158.721 187.156Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M176.979 192.205C176.834 190.351 176.195 188.527 176.021 186.645C175.643 182.851 173.61 179.926 171.257 177.145C170.56 176.306 169.601 175.697 168.904 174.829C165.796 171.064 161.7 169.094 156.994 168.399C153.799 167.907 150.574 167.762 147.524 167.473C144.213 167.762 141.075 167.994 137.996 168.341C136.341 168.544 134.627 168.747 133.087 169.326C130.386 170.369 127.713 171.585 125.157 172.917C122.659 174.191 120.219 175.582 117.895 177.145C116.21 178.275 114.787 179.81 113.189 181.084C111.591 182.358 109.936 183.575 108.28 184.762C106.537 186.036 104.852 187.397 102.993 188.469C100.96 189.685 98.7811 190.699 96.6315 191.684C94.9176 192.466 93.1747 193.219 91.4028 193.769C88.4979 194.667 85.564 195.449 82.6011 196.115C78.6215 197.012 74.6128 197.794 70.6041 198.605C69.4712 198.837 68.3093 198.924 67.2345 199.3C64.533 200.256 61.8315 201.27 59.1881 202.399C56.4285 203.557 53.5237 204.6 51.0255 206.222C46.8425 208.915 42.7758 211.782 39.7547 215.924C37.8956 218.472 36.7337 221.223 35.688 224.09C35.136 225.596 34.8456 227.189 34.3517 228.724C33.6836 230.867 32.9574 233.039 32.1731 235.153C31.4759 237.036 30.7207 238.918 29.8202 240.714C28.6292 243.06 27.322 245.29 25.3467 247.114C24.1267 248.215 23.3133 249.75 22.0062 250.705C19.7985 252.298 18.0265 254.267 16.4579 256.41C13.9598 259.828 12.4202 263.68 11.9845 267.908C11.8392 269.298 12.1878 270.746 12.2168 272.194C12.2749 274.8 13.5531 277.001 14.5698 279.289C15.5574 281.548 16.6032 283.894 18.1427 285.776C20.6409 288.846 23.4876 291.597 27.293 293.306C30.0816 294.551 32.7541 295.623 35.8332 295.797C38.099 295.913 40.3938 296.318 42.6015 296.897C45.884 297.766 49.1083 298.867 52.3327 299.88C52.7975 300.025 53.3203 299.938 53.756 300.083C54.1337 300.199 54.5694 300.43 54.7146 300.72C55.0342 301.386 55.1504 302.168 55.4118 302.863C56.9514 306.889 58.2586 311.059 60.2048 314.882C61.8606 318.154 64.1844 321.079 67.3507 323.28C71.2722 326.003 75.3681 327.769 80.2482 327.972C85.5059 328.204 90.328 327.248 94.7433 324.497C96.6605 323.28 98.5487 321.977 100.35 320.558C101.715 319.486 102.964 318.241 104.155 316.938C105.317 315.693 106.188 314.129 107.437 312.999C109.238 311.378 110.981 309.814 111.824 307.41C112.114 306.599 112.695 306.078 113.944 306.483C115.484 307.004 117.227 307.12 118.883 307.178C120.19 307.207 121.526 306.802 122.833 306.686C125.825 306.454 128.817 306.454 131.78 306.078C133.901 305.817 136.108 305.47 137.996 304.543C141.656 302.776 144.794 300.401 146.624 296.492C148.367 292.814 149.238 288.991 149.5 285.023C149.674 282.417 149.5 279.811 149.5 277.204C149.5 276.046 149.354 274.858 149.587 273.729C150.313 270.485 151.242 267.3 152.056 264.085C153.131 259.741 154.932 255.744 157.343 251.979C158.098 250.792 158.824 249.518 159.812 248.562C162.629 245.84 166.377 244.218 168.701 240.946C169.979 239.121 171.547 237.412 172.361 235.385C174.191 230.867 175.207 226.118 175.12 221.165C175.062 217.14 175.324 213.085 175.585 209.06C175.846 204.803 176.253 200.546 176.602 196.317C176.747 194.956 177.096 193.566 176.979 192.205ZM70.4589 236.804C69.965 239.179 69.7617 241.612 68.9774 243.899C67.8736 247.085 67.2054 250.445 65.3754 253.428C63.8358 255.918 62.2091 258.264 60.0596 260.233C57.8228 262.318 55.3828 264.143 52.7103 265.678C50.8803 266.749 49.1373 268.168 47.7721 269.79C45.8549 272.107 44.3153 274.713 42.6596 277.233C42.3691 277.667 42.2819 278.218 42.0786 278.681C41.701 279.55 41.3233 280.39 40.9457 281.23C40.6552 281.172 40.3647 281.114 40.1033 281.056C40.1904 280.071 40.0161 278.971 40.3938 278.102C42.4272 273.381 45.1868 269.153 49.3407 266.054C51.7808 264.23 54.5694 262.782 56.8352 260.783C59.1591 258.727 61.3958 256.381 63.1096 253.804C65.4335 250.3 66.7988 246.303 67.4088 242.046C67.8445 239.063 69.0646 236.196 69.5003 233.213C69.8779 230.636 70.8365 228.319 71.7951 225.973C72.6375 223.888 73.9447 222.15 75.6295 220.615C78.0405 218.385 80.8582 217.111 83.9373 216.039C87.6846 214.765 91.2575 212.999 94.8886 211.319C97.7063 210.016 100.524 208.683 103.196 207.12C106.857 204.977 110.488 202.747 112.753 198.982C114.002 196.897 115.193 194.782 116.472 192.697C117.459 191.075 118.65 189.627 120.422 188.73C121.119 188.382 121.729 187.89 122.397 187.484C124.547 186.094 127.103 186.181 129.427 185.399C132.39 184.415 135.527 183.864 138.084 181.924C139.797 180.621 141.482 179.231 143.022 177.725C143.661 177.117 143.835 176.074 144.329 175.292C144.59 174.887 145.142 174.684 145.549 174.365C145.723 174.771 146.159 175.292 146.043 175.611C145.607 176.711 145.055 177.812 144.387 178.796C142.47 181.547 139.565 183.111 136.718 184.704C135.353 185.457 133.726 185.805 132.216 186.297C128.643 187.484 124.779 187.832 121.526 190.004C118.708 191.857 117.227 194.609 115.774 197.505C113.944 201.183 111.185 204.137 107.612 206.309C105.288 207.699 103.109 209.321 100.756 210.624C98.2001 212.014 95.4986 213.172 92.7971 214.36C89.8632 215.634 86.9584 217.082 83.8792 217.951C81.6716 218.588 79.8124 219.631 78.0114 220.876C76.4428 221.947 75.0776 223.28 74.2642 225.046C73.9156 225.799 73.4508 226.523 73.0732 227.276C71.6498 230.259 71.127 233.561 70.4589 236.804ZM87.4812 240.221C88.1784 244.363 87.5393 248.215 84.8378 251.719C82.7173 254.47 80.161 256.468 76.9076 257.598C76.53 257.743 75.9781 257.395 75.5423 257.279C75.8328 256.787 76.0361 255.947 76.4138 255.86C79.7253 255.165 81.9911 252.964 83.705 250.358C85.1283 248.186 86.5807 245.84 86.2321 243.002C86.0579 241.698 85.5931 240.337 85.7674 239.063C85.9126 237.876 86.6679 236.746 87.2488 235.646C87.365 235.414 87.917 235.298 88.2365 235.356C88.527 235.385 88.7593 235.733 89.0498 235.964C88.7303 236.37 88.527 236.601 88.3527 236.862C87.6265 237.847 87.2779 238.86 87.4812 240.221ZM166.057 190.96C165.563 192.408 165.099 193.943 164.314 195.246C163.239 197.012 162.107 198.837 160.596 200.227C158.911 201.762 157.081 203.181 154.786 203.963C151.62 205.034 148.57 206.454 145.52 207.815C143.254 208.828 141.017 209.871 138.868 211.087C137.125 212.072 135.469 213.23 133.901 214.447C132.245 215.721 130.618 217.053 129.108 218.501C127.858 219.746 126.871 221.281 125.651 222.527C122.485 225.741 120.596 229.68 118.912 233.763C118.505 234.748 118.563 235.964 118.534 237.065C118.389 241.785 116.965 246.129 114.409 250.039C112.637 252.79 110.662 255.426 108.541 257.916C107.467 259.191 105.869 260.031 104.504 261.073C102.703 262.463 100.931 263.911 99.0425 265.185C96.1086 267.155 93.0876 268.979 90.1537 270.949C88.0912 272.368 86.145 273.961 84.1407 275.466C83.153 276.219 82.1944 277.03 81.1487 277.696C78.331 279.492 76.9948 282.098 76.2395 285.313C75.368 288.991 75.8328 292.669 75.7747 296.347C75.7747 296.781 76.1524 297.216 76.1814 297.679C76.2105 298.287 76.2105 299.301 75.92 299.417C74.9323 299.822 74.5547 298.953 74.4385 298.2C74.148 296.463 73.9737 294.725 73.7704 292.959C73.7123 292.582 73.7704 292.177 73.7704 291.8C73.7123 291.8 73.6542 291.8 73.5961 291.771C73.9447 289.078 74.0318 286.298 74.7 283.691C75.31 281.432 76.5009 279.289 78.4181 277.754C81.2939 275.495 84.1407 273.179 87.0746 271.007C89.0208 269.559 91.1413 268.371 93.1457 267.01C95.9924 265.07 98.8391 263.158 101.599 261.102C103.981 259.335 106.363 257.511 108.454 255.426C110.052 253.804 111.388 251.835 112.492 249.836C113.944 247.201 115.164 244.421 116.21 241.612C116.704 240.25 116.384 238.629 116.704 237.181C117.314 234.429 117.779 231.591 118.912 229.072C119.986 226.668 121.7 224.467 123.414 222.44C125.331 220.152 127.51 218.125 129.659 216.039C131.025 214.736 132.419 213.404 133.988 212.39C136.805 210.566 139.681 208.741 142.731 207.264C145.985 205.672 149.47 204.513 152.84 203.152C155.629 202.023 158.272 200.546 160.247 198.345C161.642 196.781 162.426 194.667 163.472 192.784C163.878 192.06 164.14 191.249 164.605 190.554C164.779 190.265 165.273 190.178 165.621 190.033C165.796 190.265 166.144 190.699 166.057 190.96Z" }, 
            ease: "steps(1)", 
          },
          { 
            attr: { d: "M179.666 207.16C179.638 203.918 179.119 200.647 178.542 197.434C178.139 195.253 177.361 193.13 176.64 191.006C176.035 189.199 175.343 187.42 174.594 185.698C173.931 184.206 173.325 182.571 172.288 181.366C170.069 178.726 167.59 176.287 165.169 173.82C164.189 172.815 163.122 171.811 161.97 171.065C158.252 168.626 153.899 168.052 149.634 167.708C143.581 167.22 137.529 167.593 131.591 168.884C131.044 168.999 130.438 168.97 129.891 169.171C127.585 169.975 125.337 170.807 123.031 171.639C120.927 172.385 118.794 173.102 116.719 173.906C112.886 175.398 109.11 176.976 105.306 178.496C101.069 180.189 96.7165 181.653 92.5661 183.546C89.3093 185.038 86.2541 186.961 83.2278 188.883C81.0662 190.26 79.164 192.011 77.0599 193.474C73.8607 195.741 71.4684 198.696 69.3933 201.967C68.5574 203.287 67.5775 204.521 66.5399 205.697C65.4735 206.931 64.2629 208.05 63.1101 209.198C61.2654 211.005 59.4497 212.842 57.1439 214.104C56.2216 214.62 55.3281 215.194 54.377 215.596C52.2441 216.514 50.0825 217.318 47.9497 218.236C44.4622 219.699 41.0036 221.162 37.5449 222.74C35.2104 223.802 32.8181 224.778 30.7429 226.241C27.9184 228.221 25.1514 230.373 22.8169 232.869C19.877 235.968 16.9372 239.21 14.8908 242.911C13.1327 246.068 12.5851 249.941 11.5475 253.499C11.0863 255.048 10.7405 256.655 10.3081 258.205C9.8758 259.897 9.09761 261.59 9.01114 263.312C8.6941 269.079 8.83824 274.818 13.2192 279.437C13.3921 279.638 13.4497 279.954 13.565 280.212C14.1127 281.273 14.8043 282.077 16.1878 281.933C16.8795 281.876 17.6001 281.991 18.5513 282.048C18.436 282.737 18.4648 283.225 18.263 283.655C17.3696 285.577 18.1477 287.127 19.56 288.246C21.7505 289.967 24.0274 291.603 26.4485 292.98C28.9848 294.415 31.7805 295.39 34.3457 296.796C37.1702 298.317 39.9372 299.981 42.6176 301.789C45.7592 303.912 48.7279 306.322 51.8407 308.503C54.0312 310.052 56.3081 311.487 58.6426 312.807C59.4208 313.266 60.5161 313.667 61.352 313.495C63.5136 313.065 64.1765 313.409 64.9835 315.475C65.387 316.508 66.0788 317.684 66.9722 318.23C69.7103 319.951 72.5349 321.587 75.4747 322.878C78.6452 324.284 81.7579 325.919 85.2742 326.464C88.5311 326.981 91.7015 328.129 94.9584 328.444C97.2353 328.645 99.6276 328.014 101.905 327.497C103.807 327.067 105.709 326.493 107.467 325.661C109.917 324.485 112.194 323.079 114.298 321.214C116.085 319.636 117.324 317.77 118.448 315.819C119.63 313.782 120.379 311.516 121.475 309.421C122.599 307.269 123.896 305.232 125.164 303.166C126.374 301.157 127.556 299.149 128.853 297.227C130.957 294.156 133.263 291.201 135.28 288.074C136.808 285.663 138.249 283.339 140.728 281.675C143.581 279.753 146.233 277.457 148.798 275.133C151.219 272.953 153.496 270.571 155.744 268.161C157.156 266.612 158.453 264.947 159.693 263.226C161.22 261.103 162.661 258.922 164.074 256.713C165.255 254.848 166.495 253.011 167.475 251.031C168.8 248.277 169.809 245.379 171.135 242.624C172.951 238.923 173.729 234.935 174.767 231.004C174.997 230.172 174.911 229.282 175.141 228.45C176.15 225.036 177.188 221.65 178.283 218.264C179.32 214.62 179.695 210.89 179.666 207.16ZM146.838 181.739C149.028 182.14 149.576 182.226 151.046 180.505C151.478 179.988 151.853 179.328 152.43 178.984C152.948 178.669 153.669 178.669 154.303 178.554C154.332 178.755 154.361 178.927 154.389 179.128C153.64 180.046 152.862 180.964 152.141 181.911C150.643 183.891 148.135 183.862 146.204 183.202C145.916 183.116 145.8 182.513 145.627 182.14C146.002 181.997 146.463 181.681 146.838 181.739ZM39.3895 270.715C39.0725 271.489 38.5249 272.178 37.9484 273.096C37.4584 272.58 37.1991 272.321 36.7668 271.862C38.0926 269.682 39.2166 267.243 40.8595 265.263C42.6753 263.054 44.8369 261.189 47.2579 259.553C50.9183 257.086 55.0687 255.45 58.4409 252.437C61.5825 249.625 64.4359 246.699 66.3093 242.911C67.491 240.559 68.4421 238.091 69.7391 235.824C70.9496 233.73 72.362 231.721 73.8895 229.828C75.6477 227.704 77.5211 225.638 79.5386 223.773C80.9797 222.454 82.7667 221.535 84.3519 220.33C86.0524 219.068 87.6665 217.719 89.3093 216.371C90.7216 215.223 92.2203 214.133 93.5173 212.841C94.8143 211.608 95.8519 210.087 97.12 208.825C100.089 205.869 102.049 202.197 104.412 198.839C105.997 196.573 108.015 194.536 110.724 193.417C114.644 191.81 118.592 190.232 122.512 188.568C124.732 187.621 127.037 186.76 129.055 185.469C131.62 183.833 133.926 181.767 135.482 179.099C136.26 177.779 136.779 176.287 137.5 174.939C137.673 174.594 138.191 174.422 138.537 174.164C138.681 174.537 138.97 174.939 138.912 175.254C138.624 176.431 138.422 177.693 137.817 178.726C135.453 182.628 132.196 185.756 128.277 188.051C126.086 189.314 123.607 190.06 121.244 190.978C119.486 191.666 117.67 192.211 115.941 192.957C114.125 193.704 112.252 194.45 110.609 195.482C109.052 196.458 107.525 197.663 106.343 199.069C104.643 201.106 103.346 203.459 101.76 205.582C99.9734 207.992 98.1864 210.46 96.1113 212.641C94.2955 214.534 92.105 216.084 90.0586 217.777C88.3293 219.211 86.5712 220.675 84.7842 222.052C83.2278 223.257 81.5273 224.29 79.9998 225.524C78.991 226.327 78.1263 227.274 77.2328 228.221C73.7166 232.008 71.2955 236.427 69.278 241.132C68.2981 243.399 66.7993 245.522 65.2717 247.502C63.5424 249.74 61.6401 251.892 59.5073 253.786C57.6915 255.393 55.5011 256.54 53.4259 257.832C50.8896 259.41 48.065 260.672 45.8168 262.566C43.194 264.833 40.773 267.386 39.3895 270.715ZM64.4935 266.152C63.3695 268.591 62.6201 271.03 62.1301 273.641C61.3231 277.916 60.5449 282.278 56.9998 285.319C55.6163 286.496 53.9735 287.385 52.3594 288.246C51.9559 288.447 50.8607 288.217 50.7166 287.873C50.3131 287.012 51.0625 286.782 51.8118 286.524C54.8093 285.463 57.0286 283.483 58.4409 280.585C59.392 278.691 59.6226 276.683 59.9685 274.617C60.372 272.264 61.2655 269.997 61.9284 267.702C62.4472 265.866 63.4271 264.287 64.58 262.738C65.9923 260.873 67.8657 259.926 69.9121 259.18C70.2868 259.037 70.892 259.524 71.382 259.725C71.382 259.897 71.382 260.041 71.382 260.213C70.5461 260.615 69.7103 260.93 68.9033 261.389C66.9722 262.537 65.5023 264 64.4935 266.152ZM163.295 192.326C162.027 193.388 160.788 194.478 159.404 195.368C158.424 196.028 157.214 196.315 156.176 196.917C151.94 199.442 147.53 201.737 143.841 205.123C141.247 207.505 139.46 210.403 138.047 213.559C137.528 214.735 136.866 215.826 136.318 216.973C135.136 219.412 134.128 221.937 132.802 224.261C131.591 226.384 130.064 228.364 128.565 230.344C127.181 232.152 125.654 233.873 124.126 235.537C122.195 237.661 120.351 239.899 118.16 241.735C115.451 244.059 112.482 246.096 109.542 248.162C107.698 249.482 105.824 250.888 103.749 251.72C101.53 252.61 99.8005 254.13 97.8694 255.364C96.486 256.225 95.2755 257.372 94.0649 258.463C92.6527 259.754 91.1539 260.959 89.9722 262.451C88.8193 263.914 87.9258 265.636 87.09 267.329C86.2253 269.108 85.5336 270.973 84.8995 272.838C84.2654 274.674 83.9484 276.654 83.199 278.462C82.3055 280.642 81.2391 282.794 79.9709 284.774C78.2128 287.5 75.7918 289.652 72.9384 291.172C71.2667 292.062 69.3932 292.55 67.6351 293.21C67.6063 293.124 67.5775 293.037 67.5487 292.951C67.2028 292.951 66.8281 293.066 66.5399 292.923C66.194 292.751 65.9635 292.406 65.6753 292.148C65.9635 291.947 66.2228 291.603 66.5111 291.574C69.1627 291.23 71.5549 290.111 73.7454 288.762C75.1865 287.844 76.2241 286.323 77.5499 285.147C79.5386 283.339 80.4609 280.958 81.4697 278.605C82.0461 277.285 82.1902 275.793 82.709 274.445C83.9772 270.944 85.0148 267.386 86.9458 264.115C88.3869 261.648 90.1451 259.438 92.1915 257.602C94.7567 255.249 97.7542 253.356 100.694 251.462C103.115 249.912 105.767 248.765 108.188 247.215C110.263 245.867 112.165 244.231 114.125 242.711C115.422 241.706 116.748 240.673 117.987 239.583C118.852 238.866 119.688 238.062 120.437 237.23C122.339 235.107 124.213 232.984 126 230.803C127.527 228.967 129.084 227.102 130.381 225.122C131.562 223.314 132.456 221.363 133.407 219.412C134.877 216.428 136.347 213.444 137.673 210.403C139.373 206.472 142.515 203.832 145.656 201.221C147.501 199.672 149.807 198.639 151.911 197.405C153.899 196.228 155.917 195.109 157.877 193.933C159.347 193.072 160.73 192.097 162.2 191.265C162.488 191.092 162.978 191.236 163.324 191.379C163.439 191.465 163.468 192.183 163.295 192.326Z" }, 
            ease: "steps(1)", 
          },
        ]
      });

      const commonSettings = {
        transformOrigin: "50% 50%",
        duration: 2,
        repeat: 0,
        ease: Power1.easeInOut,
      };
      
      const elementsWithKeyframes = {
        ".girl-puzzle__l1": [
          { 
            attr: { d: "M59.2354 220.837C46.383 182.25 55.1958 137.234 81.5101 106.069C90.5575 95.3667 101.671 86.055 108.244 73.5923C112.276 65.9859 114.608 57.1413 120.876 51.2287C120.599 56.7661 121.143 62.4805 122.619 67.7908C124.875 66.6829 126.94 65.1645 128.725 63.3644C129.487 62.6575 130.553 61.7799 130.927 60.8122C131.389 59.7157 131.33 58.8317 132.587 58.3648C133.404 59.1022 133.308 60.3517 133.171 61.3854C132.877 63.345 133.057 65.4366 132.524 67.3301C132.121 69.3106 131.352 71.1381 130.453 72.8787C128.589 76.5966 126.101 79.9876 123.183 82.902C116.824 89.5037 109.002 94.9333 104.213 102.686C96.1243 115.442 90.2518 141.982 91.9192 156.992C93.4824 171.462 95.9689 183.74 103.231 196.325" }, 
          },
          { 
            attr: { d: "M54.6019 205.427C49.5948 165.075 67.0433 122.704 98.8978 97.3616C109.848 88.6606 122.546 81.7307 131.42 70.8165C136.856 64.1589 140.872 55.9524 148.163 51.3965C146.807 56.7681 146.218 62.4752 146.621 67.9705C149.046 67.3306 151.363 66.2504 153.463 64.839C154.347 64.2968 155.561 63.6473 156.117 62.7729C156.784 61.7896 156.9 60.9118 158.221 60.7025C158.875 61.5864 158.537 62.792 158.2 63.7779C157.528 65.6399 157.294 67.7251 156.402 69.4755C155.619 71.3367 154.508 72.9755 153.287 74.5037C150.735 77.7788 147.636 80.6103 144.21 82.89C136.694 88.1032 127.977 91.879 121.772 98.5304C111.357 109.433 100.408 134.28 99.0959 149.318C97.7876 163.807 97.8128 176.329 102.45 190.096" }, 
          },
          { 
            attr: { d: "M59.2354 220.837C46.383 182.25 55.1958 137.234 81.5101 106.069C90.5575 95.3667 101.671 86.055 108.244 73.5923C112.276 65.9859 114.608 57.1413 120.876 51.2287C120.599 56.7661 121.143 62.4805 122.619 67.7908C124.875 66.6829 126.94 65.1645 128.725 63.3644C129.487 62.6575 130.553 61.7799 130.927 60.8122C131.389 59.7157 131.33 58.8317 132.587 58.3648C133.404 59.1022 133.308 60.3517 133.171 61.3854C132.877 63.345 133.057 65.4366 132.524 67.3301C132.121 69.3106 131.352 71.1381 130.453 72.8787C128.589 76.5966 126.101 79.9876 123.183 82.902C116.824 89.5037 109.002 94.9333 104.213 102.686C96.1243 115.442 90.2518 141.982 91.9192 156.992C93.4824 171.462 95.9689 183.74 103.231 196.325" }, delay: 2
          },
        ],
        ".girl-puzzle__l2": [
          { 
            attr: { d: "M97.6091 88.8555C100.144 88.0295 103.076 89.2531 104.922 91.2465C106.767 93.2398 107.721 95.8531 108.655 98.3585" }, 
          },
          { 
            attr: { d: "M118.031 83.6511C120.673 83.3425 123.301 85.1205 124.715 87.4382C126.129 89.7559 126.551 92.5051 126.973 95.1445" }, 
          },
          { 
            attr: { d: "M97.6091 88.8555C100.144 88.0295 103.076 89.2531 104.922 91.2465C106.767 93.2398 107.721 95.8531 108.655 98.3585" }, delay: 2
          },
        ],
        ".girl-puzzle__l3": [
          { 
            attr: { d: "M121.702 84.5328L121.44 106.407L188.688 107.701M120.996 58.8171L121.701 32.2689L148.22 33.5196C145.125 30.8725 142.035 27.6652 141.263 23.6736C140.849 20.9557 141.54 18.1363 142.875 15.7516C145.742 10.8326 151.707 8.00023 157.237 8.7215C162.787 9.55065 167.773 13.8465 169.162 19.2855C170.68 24.8116 168.496 30.9415 163.997 34.3856L190.996 35.3649" }, 
          },
          { 
            attr: { d: "M142.419 84.1286L137.874 105.509L203.396 120.058M146.77 58.7928L152.664 32.92L178.357 39.3826C175.849 36.1779 173.455 32.4249 173.483 28.3615C173.611 25.6169 174.839 22.9907 176.613 20.9179C180.381 16.6644 186.771 15.0673 192.038 16.8661C197.305 18.7746 201.339 23.9683 201.631 29.5718C202.032 35.2859 198.695 40.8608 193.619 43.3469L219.834 49.6384" }, 
          },
          { 
            attr: { d: "M121.702 84.5328L121.44 106.407L188.688 107.701M120.996 58.8171L121.701 32.2689L148.22 33.5196C145.125 30.8725 142.035 27.6652 141.263 23.6736C140.849 20.9557 141.54 18.1363 142.875 15.7516C145.742 10.8326 151.707 8.00023 157.237 8.7215C162.787 9.55065 167.773 13.8465 169.162 19.2855C170.68 24.8116 168.496 30.9415 163.997 34.3856L190.996 35.3649" }, delay: 2
          },
        ],
        ".girl-puzzle__l4": [
          { 
            attr: { d: "M191.252 35.3826L190.224 64.9032C190.224 64.9032 193.968 58.1356 200.863 58.369C207.779 58.7103 212.432 64.1896 212.057 71.5367C211.681 78.8838 208.257 86.1489 202.328 86.8478C196.399 87.5467 190.063 78.5879 190.063 78.5879L188.95 107.677" }, 
          },
          { 
            attr: { d: "M220.082 49.7057L213.288 78.4269C213.288 78.4269 218.277 72.5356 224.976 74.1259C231.674 75.8261 235.151 82.1137 233.342 89.2382C231.534 96.3627 226.761 102.805 220.825 102.319C214.889 101.833 210.448 91.8035 210.448 91.8035L203.657 120.085" }, 
          },
          { 
            attr: { d: "M191.252 35.3826L190.224 64.9032C190.224 64.9032 193.968 58.1356 200.863 58.369C207.779 58.7103 212.432 64.1896 212.057 71.5367C211.681 78.8838 208.257 86.1489 202.328 86.8478C196.399 87.5467 190.063 78.5879 190.063 78.5879L188.95 107.677" }, delay: 2
          },
        ],
        ".girl-puzzle__r1": [
          { 
            attr: { d: "M167.095 241.468C181.679 235.965 195.256 236.087 214.956 226.896C228.695 220.553 243.472 202.765 252.098 190.476C260.745 178.08 266.47 163.982 270.486 149.433C275.072 150.68 279.549 151.906 284.114 153.262C285.255 150.912 286.96 149.123 288.491 147.074C288.923 146.6 291.766 140.78 291.658 140.758C292.501 141.038 293.281 141.641 293.693 142.395C294.669 144.269 293.418 146.037 292.643 147.676C287.907 159.057 283.28 170.461 278.544 181.842C273.508 194.173 268.363 206.481 261.574 218.015C254.784 229.549 246.372 240.199 235.49 248.007C218.713 260.019 205.936 271.707 186.121 277.514C166.306 283.322 145.142 284.044 125.006 279.593" }, 
          },
          { 
            attr: { d: "M168.422 240.698C181.693 232.585 195.012 230.189 212.617 217.502C224.907 208.719 236.113 188.493 242.304 174.814C248.496 161.024 251.514 146.103 252.777 131.055C257.496 131.432 262.106 131.807 266.825 132.294C267.512 129.772 268.852 127.697 269.976 125.4C270.312 124.853 272.027 118.604 271.917 118.603C272.795 118.722 273.669 119.17 274.211 119.835C275.511 121.497 274.611 123.467 274.153 125.221C271.604 137.288 269.166 149.357 266.618 161.424C263.95 174.479 261.171 187.533 256.64 200.13C252.109 212.727 245.826 224.757 236.602 234.449C222.378 249.369 212.011 263.227 193.672 272.609C175.334 281.991 154.74 286.623 134.203 285.979" }, 
          },
          { 
            attr: { d: "M167.095 241.468C181.679 235.965 195.256 236.087 214.956 226.896C228.695 220.553 243.472 202.765 252.098 190.476C260.745 178.08 266.47 163.982 270.486 149.433C275.072 150.68 279.549 151.906 284.114 153.262C285.255 150.912 286.96 149.123 288.491 147.074C288.923 146.6 291.766 140.78 291.658 140.758C292.501 141.038 293.281 141.641 293.693 142.395C294.669 144.269 293.418 146.037 292.643 147.676C287.907 159.057 283.28 170.461 278.544 181.842C273.508 194.173 268.363 206.481 261.574 218.015C254.784 229.549 246.372 240.199 235.49 248.007C218.713 260.019 205.936 271.707 186.121 277.514C166.306 283.322 145.142 284.044 125.006 279.593" }, delay: 2
          },
        ],
        ".girl-puzzle__r2": [
          { 
            attr: { d: "M253.878 63.5044L277.681 74.2346C277.681 74.2346 269.031 73.0752 265.611 82.9261C262.299 92.7985 274.869 97.4258 274.869 97.4258C274.869 97.4258 288.195 102.204 291.96 91.749C295.724 81.2945 288.194 77.8931 288.194 77.8931L313.922 89.8414L303.695 113.575C303.695 113.575 308.852 107.991 315.106 111.026C321.381 113.954 323.124 121.583 320.066 127.92C317.007 134.258 312.109 139.67 305.166 137.842C298.353 135.927 297.081 125.928 297.081 125.928L287.479 148.217L284.115 153.262L270.488 149.432L224.425 129.603" }, 
          },
          { 
            attr: { d: "M220.701 49.7228L245.986 55.8608C245.986 55.8608 237.3 56.3243 235.76 66.6442C234.329 76.9651 247.49 79.1848 247.49 79.1848C247.49 79.1848 261.42 81.4122 263.188 70.4349C264.955 59.4576 256.955 57.5091 256.955 57.5091L284.349 64.4879L278.691 89.7199C278.691 89.7199 282.716 83.2729 289.399 85.0984C296.083 86.814 299.191 93.9916 297.359 100.79C295.527 107.589 291.724 113.818 284.587 113.307C277.562 112.688 274.48 103.092 274.48 103.092L269.168 126.788L266.8 132.372L252.749 131.133L203.99 120.175" }, 
          },
          { 
            attr: { d: "M253.878 63.5044L277.681 74.2346C277.681 74.2346 269.031 73.0752 265.611 82.9261C262.299 92.7985 274.869 97.4258 274.869 97.4258C274.869 97.4258 288.195 102.204 291.96 91.749C295.724 81.2945 288.194 77.8931 288.194 77.8931L313.922 89.8414L303.695 113.575C303.695 113.575 308.852 107.991 315.106 111.026C321.381 113.954 323.124 121.583 320.066 127.92C317.007 134.258 312.109 139.67 305.166 137.842C298.353 135.927 297.081 125.928 297.081 125.928L287.479 148.217L284.115 153.262L270.488 149.432L224.425 129.603" }, delay: 2
          },
        ],
        ".girl-puzzle__r3": [
          { 
            attr: { d: "M253.641 63.4062L241.539 90.352C241.539 90.352 247.562 85.4998 253.859 88.3199C260.134 91.2478 262.373 98.0786 259.25 104.74C256.128 111.401 250.214 116.835 244.46 115.243C238.706 113.651 236.222 102.962 236.222 102.962L224.207 129.477" }, 
          },
          { 
            attr: { d: "M220.452 49.6699L213.547 78.4078C213.547 78.4078 218.555 72.5204 225.24 74.126C231.924 75.8416 235.372 82.1429 233.536 89.2713C231.701 96.3998 226.906 102.839 220.978 102.34C215.05 101.842 210.655 91.7928 210.655 91.7928L203.754 120.091" }, 
          },
          { 
            attr: { d: "M253.641 63.4062L241.539 90.352C241.539 90.352 247.562 85.4998 253.859 88.3199C260.134 91.2478 262.373 98.0786 259.25 104.74C256.128 111.401 250.214 116.835 244.46 115.243C238.706 113.651 236.222 102.962 236.222 102.962L224.207 129.477" }, delay: 2
          },
        ],
        ".girl-puzzle__r5": [
          { 
            attr: { d: "M265.217 164.629C270.133 169.303 277.185 171.713 283.886 170.805" }, 
          },
          { 
            attr: { d: "M250.408 147.02C256.084 150.712 263.437 151.777 269.835 149.637" }, 
          },
          { 
            attr: { d: "M265.217 164.629C270.133 169.303 277.185 171.713 283.886 170.805" }, delay: 2
          },
        ],
      };
      

      const timeline1 = gsap.timeline();

      for (const [element, keyframes] of Object.entries(elementsWithKeyframes)) {
        timeline1.to(element, { ...commonSettings, keyframes: keyframes }, 0);
      }

      const timeline2 = gsap.timeline({ repeat: 0 });
      const paths = document.querySelectorAll('.girl-puzzle__lines path');
      paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.visibility = 'hidden'; 
      });

      paths.forEach(path => {
        const length = path.getTotalLength();
        timeline2.set(path, { visibility: 'visible' });
        timeline2.to(path, {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power1.out",
          onStart: () => {
            path.style.visibility = 'visible';
          }
        }, 0);
      
        timeline2.to(path, {
          strokeDashoffset: -length,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            path.style.strokeDashoffset = length; 
            path.style.visibility = 'hidden'; 
          }
        }, 0.5);
      });

      const mainTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      mainTimeline.add(timeline1);
      mainTimeline.add(timeline2, "-=1.2");
    
    }
  
    if (animMenStar) {
      gsap.fromTo(".men-star__leg-l", 
        { 
          attr: { d: "M113.034 124C114.825 149.578 122.455 196.2 127.203 221.395C121.466 224.235 115.611 227.216 109.873 230.057C108.874 230.534 107.768 231.281 107.997 232.437C108.236 233.723 109.807 233.85 111.097 233.74C126.347 232.701 141.468 231.673 156.717 230.634C153.389 200.746 139.288 148.593 134.035 119" }
        }, 
        { 
          attr: { d: "M90.0197 118.002C82.5746 142.538 73.0827 188.817 68.5367 214.049C62.164 214.658 55.631 215.356 49.2583 215.964C48.1547 216.053 46.8548 216.357 46.6562 217.519C46.4217 218.806 47.8438 219.484 49.0887 219.842C63.7068 224.307 78.2003 228.737 92.8183 233.203C100.364 204.092 105.781 150.338 111.423 120.817" },
          transformOrigin: "50% 50%",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
      gsap.fromTo(".men-star__leg-r", 
        { 
          attr: { d: "M83.1836 123.999C78.9353 147.349 68.3226 187.885 64.0743 211.235C54.9637 211.097 45.724 210.971 36.6023 210.704C35.6879 210.651 34.6556 210.739 33.9255 211.324C32.8304 212.201 32.8451 213.897 33.7189 214.998C34.4636 216.11 35.8204 216.778 37.0371 217.328C43.788 220.279 50.9334 221.759 58.1968 223.099C66.5257 224.74 74.8546 226.381 83.1836 228.022L108.033 132.5" }
        }, 
        { 
          attr: { d: "M106.622 131.179C119.878 150.866 140.571 187.301 153.827 206.987C147.207 213.248 140.502 219.606 133.784 225.782C133.092 226.383 132.414 227.166 132.3 228.094C132.128 229.487 133.323 230.692 134.717 230.87C136.026 231.147 137.464 230.678 138.719 230.222C145.613 227.623 151.763 223.696 157.9 219.586C165.009 214.947 172.119 210.309 179.229 205.67L130.35 119.922" },
          transformOrigin: "50% 50%",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
        gsap.to(".men-star__eye", {
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
          keyframes: [
            { 
              attr: { d: "M110.5 93.5005C110.5 83.5014 102 82.5 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0 
            },
            { 
              attr: { d: "M110.5 93.5005C108.319 92.1865 99.937 91.0859 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0.25 
            },
            { 
              attr: { d: "M110.5 93.5005C110.5 83.5014 102 82.5 96.5 92.0005" }, 
              ease: "power2.InOut", 
              time: 0.35
            },
          ]
        });
  
        const spiralMenStar = document.querySelector('.men-star__spiral');
        const lineLengthStar = spiralMenStar.getTotalLength();
        spiralMenStar.style.strokeDasharray = lineLengthStar;
        spiralMenStar.style.strokeDashoffset = lineLengthStar;
       
        let tlspiralMenStar = gsap.timeline({repeat: -1, repeatDelay: 1});
       
        tlspiralMenStar.to(spiralMenStar, {
          duration: 1,
          strokeDashoffset: 0,
          ease: "power2.inOut"
        }).to(spiralMenStar, {
          duration: 1.5,
          strokeDashoffset: -lineLengthStar,
          ease: "power2.inOut"
        }).set(spiralMenStar, {
          strokeDashoffset: lineLengthStar,
          opacity: 1
        });
  
  
        const paths = document.querySelectorAll('.men-star__lines path');
        paths.forEach(path => {
          const length = path.getTotalLength();
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;
        });
    
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    
        const duration = 0.5;
        const overlap = 0.5;
    
        paths.forEach((path, index) => {
          tl.to(path, {
              duration: duration,
              strokeDashoffset: 0,
              ease: "power1.out"
            }, index * (duration - overlap))
            .to(path, {
              duration: duration,
              strokeDashoffset: -path.getTotalLength(),
              opacity: 0,
              ease: "power1.out"
            }, index * (duration - overlap) + duration);
        });
  
    }
  
  }
});

window.addEventListener('load', function () {
  if (typeof gsap !== 'undefined') {
    document.body.classList.remove('_reload');
  }
});
// Функция при смене ширины экрана
function changeOrientation() {
  if (typeof gsap !== 'undefined') {
    document.body.classList.add('_reload');
    location.reload();
  }
}
window.addEventListener('orientationchange', changeOrientation);







const retailShelf = document.querySelector('.retail__shelf');
const shelfCards = document.querySelector('.shelf__cards');
const shelfBlocks = document.querySelector('.shelf__blocks');

gsap.to(shelfCards, {
  xPercent: -100 * (shelfCards.children.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: retailShelf,
    id: "shelf",
    start: "top top",
    end: () => `+=${retailShelf.offsetHeight}`,
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const maxScroll = shelfCards.scrollWidth - shelfBlocks.clientWidth;
      shelfCards.style.transform = `translateX(-${progress * maxScroll}px)`;
    }
  }
});

// Горизонтальный свайп
let isDragging = false;
let startX;
let scrollLeft;
let isScrolling = false;
let currentScrollPosition = window.scrollY;

shelfCards.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - shelfCards.offsetLeft;
  scrollLeft = shelfCards.scrollLeft;
  isScrolling = true;
  currentScrollPosition = window.scrollY;
});

shelfCards.addEventListener('mouseleave', () => {
  isDragging = false;
  isScrolling = false;
});

shelfCards.addEventListener('mouseup', () => {
  isDragging = false;
  isScrolling = false;
});

shelfCards.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - shelfCards.offsetLeft;
  const walk = (x - startX) * 0.5; // скорость скролла
  shelfCards.scrollLeft = scrollLeft - walk;
  updateScrollTrigger();
});

shelfCards.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - shelfCards.offsetLeft;
  scrollLeft = shelfCards.scrollLeft;
  isScrolling = true;
  currentScrollPosition = window.scrollY;
});

shelfCards.addEventListener('touchend', () => {
  isDragging = false;
  isScrolling = false;
});

shelfCards.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - shelfCards.offsetLeft;
  const walk = (x - startX) * 0.5; // скорость скролла
  shelfCards.scrollLeft = scrollLeft - walk;
  updateScrollTrigger();
});

function updateScrollTrigger() {
  if (!isScrolling) return; // предотвратить прыжки при касании
  const progress = shelfCards.scrollLeft / (shelfCards.scrollWidth - shelfBlocks.clientWidth);
  const trigger = ScrollTrigger.getById("shelf");
  const maxScroll = trigger.end - trigger.start;
  const adjustedMaxScroll = maxScroll * (shelfCards.scrollWidth - shelfBlocks.clientWidth) / shelfCards.scrollWidth;
  const scrollPosition = progress * adjustedMaxScroll + trigger.start;

  // Обновляем положение shelfCards
  gsap.set(shelfCards, { x: -shelfCards.scrollLeft });
  
  // Проверяем, чтобы не скроллить дальше правого края
  if (scrollPosition >= adjustedMaxScroll) {
    window.scrollTo(0, adjustedMaxScroll);
  } else {
    window.scrollTo(0, currentScrollPosition + (scrollPosition - window.scrollY));
  }
}




function initSliders() {
  if (document.querySelector('.services__slider')) {
    new Swiper('.services__slider', { 
      modules: [FreeMode],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      speed: 800,
      freeMode: {
        enabled: true,
        momentumBounce: false,
      },
      nested: true,
      breakpoints: {
        300: {
          spaceBetween: 20,
        },
        769: {
          spaceBetween: 37,
        }
      },
      on: {
      }
    });
  }
}
window.addEventListener("load", function (e) {

	initSliders();
	
});
