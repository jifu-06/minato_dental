
// メニュー
const menu = document.querySelector('.header_menu');

// about
const aboutWrapper = document.querySelector('.about_wrapper');
const aboutLeft = document.querySelector('.about_image');
const aboutRight = document.querySelector('.about_content');

// flowtxt
let activated = false;  // アニメーションが有効かどうかを追跡


// スクロールイベント
window.addEventListener('scroll', function() {

    // 100vh以上スクロールされたらメニューへ
    if (window.scrollY >= window.innerHeight) {
        menu.classList.add('show');  // 'show'クラスを追加
    } else {
        menu.classList.remove('show');  // 'show'クラスを削除
    }

    //スクロールでabout_wrapperが左右に展開
    const wrapperRect = aboutWrapper.getBoundingClientRect();
    const triggerPosition = window.innerHeight * 0.7;
    if (wrapperRect.top <= triggerPosition && wrapperRect.bottom + window.innerHeight * 0.5 >= triggerPosition) {
        aboutLeft.classList.add('move');
        aboutRight.classList.add('move');
      } else {
        aboutLeft.classList.remove('move');
        aboutRight.classList.remove('move');
      }


});


// swiper
let mySwiper = new Swiper ('.swiper', {

    // オプション設定
    loop: true,
    autoplay: {
      delay: 5000,
    },
    
    pagination: {
      el: '.swiper-pagination', //ページネーション要素
      type: 'bullets', //ページネーション種類
      clickable: true, //クリックに反応させる
    }
  });