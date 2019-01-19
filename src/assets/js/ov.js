import $ from 'jquery';

;(function() {
    "use strict";

    const url_price_min = '../assets/data/price_all_min.json',
          url_price_max= '{{root}}assets/price_all_max.json',
          url_title_abc = '{{root}}assets/title_all_abc.json',
          url_title_cba = '{{root}}assets/title_all_cba.json';

    function generateCatalogPagesData(sortType, url){
        const xhr = new XMLHttpRequest();
        const cartList = document.querySelector('.vo-cart-list');
        let cartTmpl = document.getElementById('product-cart').innerHTML,
            cartListHTML = '';

        xhr.onload = function (){
            let ajax = this;
            const data = JSON.parse(ajax.response);

            for (var i = 0; i < data.length; i++){
                if (data[i].price){
                    cartListHTML += cartTmpl
                    .replace(/--title--/ig, data[i].title)
                    .replace(/--author--/ig, data[i].author)
                    .replace(/--image--/ig, data[i].image)
                    .replace(/--price--/ig, data[i].price)
                    .replace(/--product-id--/ig, data[i].id);
                } else{
                    cartListHTML += cartTmpl
                    .replace(/--title--/ig, data[i].title)
                    .replace(/--author--/ig, data[i].author)
                    .replace(/--image--/ig, data[i].image)
                    .replace(/--price-- грн/ig, '')
                    .replace(/--product-id--/ig, data[i].id);
                }
                if (i+1 == 20){
                    localStorage.setItem(sortType + 20, cartListHTML);
                    cartListHTML = '';
                } else if (i+1 == 40) {
                    localStorage.setItem(sortType + 40, cartListHTML);
                    cartListHTML = '';
                } else if (i+1 == 60) {
                    localStorage.setItem(sortType + 60, cartListHTML);
                    cartListHTML = '';
                } else if (i+1 == 80){
                    localStorage.setItem(sortType + 80, cartListHTML);
                    cartListHTML = '';
                }
            }
            cartList.innerHTML = localStorage.getItem(sortType + 20);
        };

        xhr.open('GET', url);
        xhr.send();
    }

    generateCatalogPagesData('price_min', url_price_min);

})();