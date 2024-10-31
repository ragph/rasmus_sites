document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto', // Adjust for automatic width
      // spaceBetween: 10,
      // centeredSlides: true, // Center the active slide
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // centeredSlides: true,
      breakpoints: {
        // 640: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        // },
        // 768: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },
        // 1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        // },
      },
    });
  });