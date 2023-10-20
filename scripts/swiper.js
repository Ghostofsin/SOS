const swiper = new Swiper(".swiper", {
  effect: "cards",
  cardsEffect: {
    rotate: false,
    perSlideOffset: 10,
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  navigation: {
    nextEl: ".swiper-button-next--custom",
  },
});
