export const hamburger = () => {
  // TODO: 開閉メニューのJavaScriptはこちらに
  // スクロールを禁止にする関数
  function disableScroll(event) {
    event.preventDefault();
  }

  //ハンバーガーメニュー詳細
  var isScrolling = true;
  document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.menu-btn').classList.toggle('is-active');
    document.querySelector('.menu').classList.toggle('is-active');
    document.querySelector('.fa-bars').classList.toggle('fa-display');
    document.querySelector('.close-hamburger').classList.toggle('fa-display');
    document.querySelector('.l-header__heading').classList.toggle('change');
    document.querySelector('.l-header__subHeading').classList.toggle('change');
    document.querySelector('.XDWhite').classList.toggle('changeColor');
    document.querySelector('.XDColor').classList.toggle('changeColor');

    if(isScrolling == true){
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });
      isScrolling = false;
    }else{
      document.removeEventListener('touchmove', disableScroll, { passive: false });
      document.removeEventListener('mousewheel', disableScroll, { passive: false });
      isScrolling = true;
    }
 });

 //スクロールでの表示非表示
 const pageTopBtn = document.getElementById('js-scroll-hide');
 const pageTopMenu = document.getElementById('js-scrolling-menu');
 if (window.matchMedia('(max-width: 1024px)').matches) {
  document.querySelector('.menu-btn').classList.remove('is-hide');
  pageTopBtn.style.opacity = 1;
} 
 window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;
  if ( currentY > 300){
    setTimeout(function(){
      pageTopBtn.style.opacity = 1;
    }, 1);
    pageTopBtn.classList.remove('is-hide');
    pageTopMenu.classList.add('fa-display');
  } else {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      pageTopMenu.classList.remove('is-hide');
    } else {
      setTimeout(function(){
        pageTopBtn.style.opacity = 0;
      }, 1);
      pageTopBtn.classList.add('is-hide');
      pageTopMenu.classList.remove('fa-display');
    }
  }

  //スクロールに応じた背景色指定
  if (window.matchMedia('(max-width: 1024px)').matches) {
    document.getElementById('js-scroll-hide').style.backgroundColor = "none";
  }else{
      if(currentY < 700){
        document.getElementById('js-scroll-hide').style.backgroundColor = "#004BB1";
        console.log('aaa');
      } else if(currentY > 700 && currentY < 900){
        document.getElementById('js-scroll-hide').style.backgroundColor = "skyblue";
        console.log('bbb');
      } else if(currentY > 900 && currentY < 1100){
        document.getElementById('js-scroll-hide').style.backgroundColor = "orange";
      }
  }
});

//ブレイクポイントを跨いだ際にメニューをとじる
window.addEventListener("resize", ()=>{
  if (window.matchMedia('(max-width: 1024px)').matches) {
    document.getElementById('js-scroll-hide').style.backgroundColor = "transparent";
    if(document.getElementById('menuList').className == 'menu is-active'){
      document.querySelector('.menu-btn').classList.toggle('is-active');
      document.querySelector('.menu').classList.toggle('is-active');
      document.querySelector('.fa-bars').classList.toggle('fa-display');
      document.querySelector('.close-hamburger').classList.toggle('fa-display');
      document.querySelector('.l-header__heading').classList.toggle('change');
      document.querySelector('.l-header__subHeading').classList.toggle('change');
      document.querySelector('.XDWhite').classList.toggle('changeColor');
      document.querySelector('.XDColor').classList.toggle('changeColor');
  
      if(isScrolling == true){
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('mousewheel', disableScroll, { passive: false });
        isScrolling = false;
      }else{
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('mousewheel', disableScroll, { passive: false });
        isScrolling = true;
      }
    }
  }
}, false);
};
