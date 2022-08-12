"use strict";

// layout 漢堡條點擊
var burger = document.querySelector('.burger');
var burgerLine = document.querySelectorAll('.burger-line');
var headerNav = document.querySelector('.header-nav');
var headerH1 = document.querySelector('.header-h1');

burger.onclick = function () {
  headerNav.classList.toggle('max-h-24');
  headerH1.classList.toggle('left-0');
  headerH1.classList.toggle('left-1/2');
  headerH1.classList.toggle('-translate-x-1/2');
  burgerLine[0].classList.toggle('translate-y-2');
  burgerLine[0].classList.toggle('rotate-45');
  burgerLine[1].classList.toggle('rotate-45');
  burgerLine[2].classList.toggle('-translate-y-2');
  burgerLine[2].classList.toggle('-rotate-45');
}; // pages 各分頁
// -----陣列
// 部落格


var blogListArr = [{
  blogTitle: "情人特別企劃",
  blogSub: "2020 Valentine’s Special",
  blogTime: "2020/02/14",
  blogText: "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯"
}, {
  blogTitle: "街頭潮人訪問",
  blogSub: "Street Interview",
  blogTime: "2020/02/02",
  blogText: "炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯"
}, {
  blogTitle: "春季新品上市",
  blogSub: "New Selection",
  blogTime: "2020/02/02",
  blogText: "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯"
}, {
  blogTitle: "設計師獨享鏡框優惠",
  blogSub: "Sales for Designer",
  blogTime: "2020/01/18",
  blogText: "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯"
}, {
  blogTitle: "抵抗夏日大作戰",
  blogSub: "Summer Special",
  blogTime: "2019/08/07",
  blogText: "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯"
}]; // 店面

var shopListArr = [{
  shopName: "台北中山旗艦店",
  shopATel: "2-0001234",
  shopTel: "(02)000-1234",
  shopTime: "10:00-21:00",
  shopPlace: "台北市中山區南京東路25巷2-1號",
  shopTag: "台北市"
}, {
  shopName: "台北綠園店",
  shopATel: "2-0002345",
  shopTel: "(02)000-2345",
  shopTime: "10:00-21:00",
  shopPlace: "台北市中正區復興南路 132-1 號",
  shopTag: "台北市"
}, {
  shopName: "台中清水旗艦店",
  shopATel: "2-0001234",
  shopTel: "(02)000-1234",
  shopTime: "10:00-21:00",
  shopPlace: "台中市清水區經南一路 23 號 8 樓",
  shopTag: "台中市"
}, {
  shopName: "高雄中正形象店",
  shopATel: "7-0002345",
  shopTel: "(07)000-2345",
  shopTime: "10:00-21:00",
  shopPlace: "高雄市苓雅區中正路 38 號 12 樓",
  shopTag: "高雄市"
}, {
  shopName: "高雄夢時代店",
  shopATel: "7-0001234",
  shopTel: "(07)000-1234",
  shopTime: "10:00-21:00",
  shopPlace: "高雄市前鎮區中華一路 63 號 6 樓",
  shopTag: "高雄市"
}]; // -----判斷
// 部落格

if (document.getElementById('blog-list')) {
  var showBlog = function showBlog() {
    blogList.innerHTML = "";

    for (var i = 0; i < blogListArr.length; i++) {
      blogList.innerHTML += "<li class=\"mb-6 md:flex lg:mb-15\">\n                    <img class=\"mb-2 md:w-1/2 md:pr-3 md:mb-0\"\n                        src=\"https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-".concat(i + 1, ".png?raw=true\"\n                        alt=\"blog-").concat(i + 1, " photo\">\n                    <div class=\"md:w-1/2 md:pl-3 relative text-justify\">\n                        <h3 class=\"text-xl text-main-dark\">").concat(blogListArr[i].blogTitle, "</h3>\n                        <div class=\"flex justify-between md:mb-1\">\n                            <h4 class=\"font-medium\">").concat(blogListArr[i].blogSub, "</h4>\n                            <time datetime=\"2021-04-18\">").concat(blogListArr[i].blogTime, "</time>\n                        </div>\n                        <p class=\"hidden text-gray-dark md:block md:line-clamp-6\">").concat(blogListArr[i].blogText, "</p>\n                        <span class=\"hidden md:inline-block bg-white absolute top-[184px] right-0 pr-1 lg:hidden\">\u22EF\u22EF more</span>\n                        <a class=\"hidden lg:block font-black text-2xl text-main-dark absolute bottom-0 right-0 hover:text-main\" href=\"./blog-1.html\">MORE</a>\n                    </div>\n                </li>");
    }
  };

  var blogList = document.querySelector('#blog-list');
  showBlog();
} //  門市據點
else if (document.getElementById('shop-list')) {
    (function () {
      var showShop = function showShop() {
        shopList.innerHTML = "";

        for (var e = 0; e < shopListArr.length; e++) {
          shopList.innerHTML += "<li class=\"mb-6 md:w-1/2 md:px-3 lg:w-1/3\">\n                    <a href=\"./shop-1.html\">\n                        <img src=\"https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-".concat(e + 1, ".png?raw=true\"\n                            alt=\"").concat(shopListArr[e].shopName, " \u5E97\u5BB6\u7167\">\n                        <h3 class=\"text-xl outline outline-1 outline-gray-shop px-6 py-2 hover:text-main\">").concat(shopListArr[e].shopName, "</h3>\n                        <ul class=\"text-lg outline outline-1 outline-gray-shop px-6 py-4\">\n                            <li class=\"mb-2\"><span class=\"material-symbols-outlined align-top mr-2\">\n                                    call\n                                </span>\u96FB\u8A71\uFF1A<a href=\"tel:+886-").concat(shopListArr[e].shopATel, "\">").concat(shopListArr[e].shopTel, "</a></li>\n                            <li class=\"mb-2\"><span class=\"material-symbols-outlined align-top mr-2\">\n                                    schedule\n                                </span>\u71DF\u696D\u6642\u9593\uFF1A").concat(shopListArr[e].shopTime, "</li>\n                            <li class=\"flex\"><span class=\"material-symbols-outlined align-top mr-2\">\n                                    location_on\n                                </span><span>\u5730\u5740\uFF1A").concat(shopListArr[e].shopPlace, "</span></li>\n                        </ul>\n                        <a class=\"text-center block text-pageBtn bg-black text-white p-4 hover:bg-main\" href=\"./shop-1.html\">\u8A73\u7D30\u8CC7\u8A0A</a>\n                    </a>\n                </li>");
        }
      };

      var shopList = document.querySelector('#shop-list');
      showShop(); // 地區下拉選單

      var shopChose = document.querySelector('.shop-chose');
      var shopChosePlace = document.querySelector('.shop-chose span:first-child');
      var shopDown = document.querySelector('.shop-down');
      var shopDownItem = document.querySelectorAll('.shop-down li');
      var chosenPlace;

      shopChose.onclick = function () {
        shopDown.classList.toggle('max-h-[114px]');
      };

      for (var i = 0; i < shopDownItem.length; i++) {
        shopDownItem[i].onclick = function () {
          chosenPlace = this.innerHTML;
          shopChosePlace.innerHTML = chosenPlace;
          shopDown.classList.toggle('max-h-[114px]');
        };
      }
    })();
  } // 產品-optical
  else if (document.getElementById('product-list-optical')) {
      var start = function start() {
        productList.innerHTML = "";

        if (window.innerWidth < 768) {
          // 當視窗寬度小於768px時執行
          showOptical(5);
        } else if (window.innerWidth < 1024) {
          // 當視窗寬度小於1024px時執行
          showOptical(6);
          showOptical(4);
        } else {
          // 當視窗寬度不小於1024px時執行
          showOptical(6);
          showOptical(6);
        }

        function showOptical(num) {
          for (var i = 1; i <= num; i++) {
            productList.innerHTML += "<li class=\"mb-6 md:w-1/2 md:px-3 md:mb-10 lg:w-1/4 lg:mb-20\">\n                                <img src=\"https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-".concat(i, ".png?raw=true\"\n                                    alt=\"optical-product-").concat(i, "\">\n                                <h3>BJ41600S<p class=\"font-medium text-main float-right\">NTD3,490</p>\n                                </h3>\n                                <span class=\"inline-block w-6 h-6 rounded bg-brown mr-2\"></span><span\n                                    class=\"inline-block w-6 h-6 rounded bg-brown-light\"></span>\n                            </li>");
          }
        }
      };

      var productList = document.querySelector('#product-list-optical');
      start(); // 調整視窗大小會發生事件

      window.onresize = start;
    } // 產品-sunglasses
    else if (document.getElementById('product-list-sunglasses')) {
        var _start = function _start() {
          productList.innerHTML = "";

          if (window.innerWidth < 768) {
            // 當視窗寬度小於768px時執行
            showSunglass(5);
          } else {
            // 當視窗寬度不小於768px時執行
            showSunglass(6);
          }

          function showSunglass(num) {
            for (var i = 7; i <= num + 6; i++) {
              productList.innerHTML += "<li class=\"mb-6 md:w-1/2 md:px-3 md:mb-10 lg:w-1/3 lg:mb-20\">\n                                <img src=\"https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-".concat(i, ".png?raw=true\"\n                                    alt=\"sunglasses-product-").concat(i, "\">\n                                <h3>BJ41600S<p class=\"font-medium text-main float-right\">NTD3,490</p>\n                                </h3>\n                                <span class=\"inline-block w-6 h-6 rounded bg-brown mr-2\"></span><span\n                                    class=\"inline-block w-6 h-6 rounded bg-brown-light\"></span>\n                            </li>");
            }
          }
        };

        var productList = document.querySelector('#product-list-sunglasses');

        _start(); // 調整視窗大小會發生事件


        window.onresize = _start;
      }
//# sourceMappingURL=all.js.map
