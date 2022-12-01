// Custom Scripts

    var ok = document.querySelector("#dropdownBtn")
    var btn = document.querySelector(".dropdown-btn-close")
    var btn1 = document.querySelector(".dropdown-btn-open")

    
    ok.addEventListener("click", function() {
        if(btn.classList.contains("active")){
            console.log("ehhe")
        }
        console.log("salom")
    })



 
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
    catalogBtn.classList.add("white");
    document.getElementById("dropdownMenu").classList.add("active-drop");
    document.body.classList.add("lock");
    catalogBtn.querySelector(".dropdown-btn-close").classList.add("active");
    catalogBtn.querySelector(".dropdown-btn-open").classList.add("active");
    // document.getElementById("bgGray").classList.toggle("bg-gray-active");
};
catalogBtn.addEventListener("click", function(){
    if(document.getElementById("dropdownMenu").classList.contains("active-drop")){
        catalogBtn.classList.remove("white");
        document.getElementById("dropdownMenu").classList.remove("active-drop");
        document.body.classList.remove("lock");
        catalogBtn.querySelector(".dropdown-btn-close").classList.remove("active");
        catalogBtn.querySelector(".dropdown-btn-open").classList.remove("active");
    }
})

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


var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "300", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    UZB354: {
      name: "Bukhoro",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    UZB355: {
      name: "Khorezm"
    },
    UZB356: {
      name: "Karakalpakstan"
    },
    UZB357: {
      name: "Navoi"
    },
    UZB358: {
      name: "Samarkand"
    },
    UZB361: {
      name: "Kashkadarya"
    },
    UZB362: {
      name: "Surkhandarya"
    },
    UZB363: {
      name: "Andijon"
    },
    UZB364: {
      name: "Ferghana"
    },
    UZB365: {
      name: "Namangan"
    },
    UZB370: {
      name: "Jizzakh"
    },
    UZB371: {
      name: "Sirdaryo"
    },
    UZB372: {
      name: "Tashkent"
    },
    UZB4828: {
      name: "Tashkent"
    }
  },
  locations: {
    "0": {
      lat: "41.316667",
      lng: "69.25",
      name: "Tashkent"
    }
  }
}; 
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

 
var ZBRangeSlider = function(id) { 
    var self = this;
    var startX = 0, x = 0;
  
    // retrieve touch button
    var slider     = document.getElementById(id)
    var touchLeft  = slider.querySelector('.price__slider-touch-left');
    var touchRight = slider.querySelector('.price__slider-touch-right');
    var lineSpan   = slider.querySelector('.price__slider-line span');
    
    // get some properties
    var min   = parseFloat(slider.getAttribute('se-min'));
    var max   = parseFloat(slider.getAttribute('se-max'));
    
    // retrieve default values
    var defaultMinValue = min;
    if(slider.hasAttribute('se-min-value'))
    {
      defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));  
    }
    var defaultMaxValue = max;
    
    if(slider.hasAttribute('se-max-value'))
    {
      defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));  
    }
    
    // check values are correct
    if(defaultMinValue < min)
    {
      defaultMinValue = min;
    }
    
    if(defaultMaxValue > max)
    {
      defaultMaxValue = max;
    }
    
    if(defaultMinValue > defaultMaxValue)
    {
      defaultMinValue = defaultMaxValue;
    }
    
    var step  = 0.0;
    
    if (slider.getAttribute('se-step'))
    {
      step  = Math.abs(parseFloat(slider.getAttribute('se-step')));
    }
    
    // normalize flag
    var normalizeFact = 26;
    
    self.slider = slider;
    self.reset = function() {
      touchLeft.style.left = '0px';
      touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
      lineSpan.style.marginLeft = '0px';
      lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
      startX = 0;
      x = 0;
    };
    
    self.setMinValue = function(minValue)
    {
      var ratio = ((minValue - min) / (max - min));
      touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      slider.setAttribute('se-min-value', minValue);
    }
    
    self.setMaxValue = function(maxValue)
    {
      var ratio = ((maxValue - min) / (max - min));
      touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      slider.setAttribute('se-max-value', maxValue);
    }
    
    // initial reset
    self.reset();
    
    // usefull values, min, max, normalize fact is the width of both touch buttons
    var maxX = slider.offsetWidth - touchRight.offsetWidth;
    var selectedTouch = null;
    var initialValue = (lineSpan.offsetWidth - normalizeFact);
  
    // set defualt values
    self.setMinValue(defaultMinValue);
    self.setMaxValue(defaultMaxValue);
    
    // setup touch/click events
    function onStart(event) {
      
      // Prevent default dragging of selected content
      event.preventDefault();
      var eventTouch = event;
  
      if (event.touches)
      {
        eventTouch = event.touches[0];
      }
      
      if(this === touchLeft)
      {
        x = touchLeft.offsetLeft;
      }
      else
      {
        x = touchRight.offsetLeft;
      }
  
      startX = eventTouch.pageX - x;
      selectedTouch = this;
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onStop);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onStop);
      
  
    }
    
    function onMove(event) {
      var eventTouch = event;
  
      if (event.touches)
      {
        eventTouch = event.touches[0];
      }
  
      x = eventTouch.pageX - startX;
      
      if (selectedTouch === touchLeft)
      {
        if(x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10))
        {
          x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
        }
        else if(x < 0)
        {
          x = 0;
        }
        
        selectedTouch.style.left = x + 'px';
      }
      else if (selectedTouch === touchRight)
      {
        if(x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10))
        {
          x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
        }
        else if(x > maxX)
        {
          x = maxX;
        }
        selectedTouch.style.left = x + 'px';
      }
      
      // update line span
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      
      // write new value
      calculateValue();
      
      // call on change
      if(slider.getAttribute('on-change'))
      {
        var fn = new Function('min, max', slider.getAttribute('on-change'));
        fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
      if(self.onChange)
      {
        self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
    }
    
    function onStop(event) {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onStop);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onStop);
      
      selectedTouch = null;
  
      // write new value
      calculateValue();
      
      // call did changed
      if(slider.getAttribute('did-changed'))
      {
        var fn = new Function('min, max', slider.getAttribute('did-changed'));
        fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
      if(self.didChanged)
      {
        self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
    }
    
    function calculateValue() {
      var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
      var minValue = lineSpan.offsetLeft / initialValue;
      var maxValue = minValue + newValue;
  
      var minValue = minValue * (max - min) + min;
      var maxValue = maxValue * (max - min) + min;
      
      console.log(step);
      if (step !== 0.0)
      {
        var multi = Math.floor((minValue / step));
        minValue = step * multi;
        
        multi = Math.floor((maxValue / step));
        maxValue = step * multi;
      }
      
      slider.setAttribute('se-min-value', minValue);
      slider.setAttribute('se-max-value', maxValue);
    }
    
    // link events
    touchLeft.addEventListener('mousedown', onStart);
    touchRight.addEventListener('mousedown', onStart);
    touchLeft.addEventListener('touchstart', onStart);
    touchRight.addEventListener('touchstart', onStart);
  };
  
  // -------------------
  // How to use? 
  var newRangeSlider = new ZBRangeSlider('my-slider');
  
  newRangeSlider.onChange = function(min, max)
  {
    console.log(min, max, this);

    document.getElementById('price-min').value = min;
  }
  
  newRangeSlider.didChanged = function(min, max)
  {
    console.log(min,max, this);
    document.getElementById('price-max').value = max;
  }
   
 

