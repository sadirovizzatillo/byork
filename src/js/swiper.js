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



const swiperMission = new Swiper('.mission__swiper', {
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

const historySwiper = new Swiper('.historys__swiper', {
  slidesPerView: 8,
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
    slidesPerView: 8,
  //   spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 15,
  //   spaceBetween: 30
  },
  600:{
    slidesPerView: 9,
  },
  700: {
      slidesPerView: 12,
      // spaceBetween: 30
  },

  992: {
      slidesPerView:12,
      // spaceBetween: 30
      
  },
}
});

const exibitionSwiper = new Swiper('.exibition__swiper', {
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



const commandSwiper = new Swiper('.command__swiper', {
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

const servicesSwiper = new Swiper('.services__swiper', {
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

const aimSwiper = new Swiper('.aim__swiper', {
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