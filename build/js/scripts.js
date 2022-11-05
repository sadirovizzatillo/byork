// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
            burger.classList.add("active-burger");
            body.classList.add("locked");
        } else {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector("nav");

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1;
    if (window.scrollY >= breakpoint) {
        nav.classList.add("fixed__nav");
    } else {
        nav.classList.remove("fixed__nav");
    }
}
window.addEventListener("scroll", fixedNav);

// DROPDOWN CATALOG
const catalogBtn = document.getElementById("dropdownBtn");

catalogBtn.onmouseover = function () {
    catalogBtn.classList.toggle("white");
    document.getElementById("dropdownMenu").classList.toggle("active-drop");
    document.body.classList.toggle("lock");
    catalogBtn.querySelector(".dropdown-btn-close").classList.toggle("active");
    catalogBtn.querySelector(".dropdown-btn-open").classList.toggle("active");
    // document.getElementById("bgGray").classList.toggle("bg-gray-active");
};

const header = document.querySelector('header');
const drMenu = document.getElementById("dropdownMenu");

drMenu.style.height = "calc(100vh - " + header.offsetHeight + "px)";
 

 
const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    // autoplay: {
    //     delay: 4000,
    // },

    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero-btn-next',
      prevEl: '.hero-btn-prev',
    },


    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
    },
    // when window width is >= 480px
    480: {
    },
  }
});

const swiperReview = new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});

const swiperClients = new Swiper('.clients__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    700: {
        slidesPerView: 3,
        spaceBetween: 30
    },

    992: {
        slidesPerView: 2,
        spaceBetween: 30
    },

    1400: {
        slidesPerView: 3,
        spaceBetween: 30
    },
  }
});

const swiperLicense = new Swiper('.license__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    
        700: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        },

    }


});


const swiperDocReview = new Swiper('.doc-review__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


const swiperLizing = new Swiper('.lizing__swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


// Product Swiper

const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 20
        },

        720: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    thumbs: {
        swiper: swiper1,
    },

    breakpoints: {

    }

});


// TABS

const swiperTabs = new Swiper(".tabs__swiper", {
    // slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        
        730: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 3,
        },
        
        1200: {
            slidesPerView: 5,
        },
    }
});



// BLOG SLIDER

const swiperBlog = new Swiper('.blog__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


const swiperClients2 = new Swiper('.clients__swiper2', {
    slidesPerView: 6,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    700: {
        slidesPerView: 3,
        spaceBetween: 20
    },

    992: {
        slidesPerView: 4,
        spaceBetween: 20
    },

    1400: {
        slidesPerView: 5,
        spaceBetween: 20
    },
  }
});


const swiperBenefits = new Swiper('.benefits__swiper', {
    slidesPerView: 4,
    // spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    //   spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    //   spaceBetween: 30
    },

    700: {
        slidesPerView: 3,
        // spaceBetween: 30
    },

    992: {
        slidesPerView: 4,
        // spaceBetween: 30
        
    },
  }
});

 
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 


if(window.location.toString().indexOf('product.htm')>0)
{
    // TABS
    
    function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
        const header = document.querySelector(headerSelector),
              tab = document.querySelectorAll(tabSelector),
              content = document.querySelectorAll(contentSelector)
        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none'
            });
            tab.forEach(item => {
                item.classList.remove(activeClass)
            });
        }
        function showTabContent(i = 0) {
           content[i].style.display = display
           tab[i].classList.add(activeClass)
        }    
        hideTabContent()
        showTabContent()
        header.addEventListener('click', e => {
            const target = e.target
            if (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                    if ( target == item || target.parentNode == item ) {
                        hideTabContent()
                        showTabContent(i)
                    }
                });
            }
        })
    }
    
    // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
    // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
    // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
    // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
    tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
}

 
