setInterval(function () {
  let hour = document.querySelector(".hour")
  let newDate = new Date()
  let today = document.querySelector(".day")
  let hours = newDate.getHours()
  let min = newDate.getMinutes()
  let months = ["January", "February", "March", "April", "May", "June", "July", "Audgust", "September"]
  let month = months[newDate.getMonth()]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[newDate.getDay()]
  console.log(day)
  today.innerHTML = day + "," + " " + newDate.getDay() + " " + month + newDate.getFullYear()
  hour.innerHTML = hours + ":" + min
  }, 1000)
  let nav_bg = document.querySelector(".nav-bg")
  window.addEventListener("scroll", function () {
    let nav_bg = document.querySelector(".nav-bg")
    if (window.pageYOffset > 0) {
      nav_bg.style.background = "white"
      document.body.classList.add("bg-white-nav")

    }
    else {
      nav_bg.style.background = "transparent"
      document.body.classList.remove("bg-white-nav")

    }
  })
  let nav2cross = document.querySelector(".nav-2-btn")
  let nav2 = document.querySelector(".nav-2")
  let nav2open = document.querySelector(".nav-2-open")
  nav2cross.addEventListener("click", function () {
  document.body.classList.remove("nav2")
  })
  nav2open.addEventListener("click", function () {
  document.body.classList.add("nav2")
  })
var swiper = new Swiper(".content-mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".content-swiper-button-next-1",
      prevEl: ".content-swiper-button-prev-1",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });
  function digi() {
    var date = new Date(),
    hour = date.getHours(),
    minute = checkTime(date.getMinutes()),
    ss = checkTime(date.getSeconds());
    
    function checkTime(i) {
    if( i < 10 ) {
    i = "0" + i;
    }
    return i;
    }
    
    if ( hour > 12 ) {
    hour = hour - 12;
    if ( hour == 12 ) {
    hour = checkTime(hour);
    document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";
    }
    else {
    hour = checkTime(hour);
    document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" PM";
    }
    }
    else {
    document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";;
    }
    var time = setTimeout(digi,1000);
    }
    
    var swiper = new Swiper(".guides-mySwiper", {
        slidesPerView: 1,
        spaceBetween:10,
        loop:true,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1550: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        },
      });
      var swiper = new Swiper(".happen-mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".happen-swiper-button-next-1",
          prevEl: ".happen-swiper-button-prev-1",
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
      });
      var swiper = new Swiper(".todo-mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".todo-swiper-button-next-1",
          prevEl: ".todo-swiper-button-prev-1",
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
      });
      var swiper = new Swiper(".near-mySwiper", {
        slidesPerView: 1,
        loop:true,
        autoplay:true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".near-swiper-button-next-1",
          prevEl: ".near-swiper-button-prev-1",
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },
      });
    