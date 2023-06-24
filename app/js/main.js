window.onscroll = function showHeader(){

  var header = document.querySelector('.header');
  
  if(window.pageYOffset > 20) {
    header.classList.add('header--fixed');
  } else{
    header.classList.remove('header--fixed');
  }
  
  };


$(function(){
  
});

const mixer = mixitup('.category__menu');