
$(document).ready(function(){
  $ ('.about-slider').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:true,
    speed:1000,
    infinite:false,
    autoplay:true,
    autoplaySpeed:1000,
    pauseOnHover:true,
    touchThreshpld:10,
    variableWidth:true
  });
});


let form = document.querySelector('.application');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent = 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.';
};
