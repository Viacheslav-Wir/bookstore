import $ from 'jquery';

;(function() {
    "use strict";

    const xhr = new XMLHttpRequest();
    const cartList = document.querySelector('.vo-cart-list'),
          url_price_min = './data/price_all_min.json',
          url_price_max= './data/price_all_max.json',
          url_title_abc = './data/title_all_abc.json',
          url_title_cba = './data/title_all_cba.json';

    let cartTmpl = document.getElementById('product-cart').innerHTML,
        cartListHTML = '';

    // if (cartTmpl){
    //     cartTmpl = cartTmpl.innerHTML;
    // }

    xhr.onload = function (){
        let ajax = this;

        const data = JSON.parse(ajax.response);
        // console.log('data',data)

        data.forEach(element => {
            // console.log(element.title)
            // console.log(element.author)
            // console.log(element.price)

            if (element.price){
                cartListHTML += cartTmpl
                    .replace(/--title--/ig, element.title)
                    .replace(/--author--/ig, element.author)
                    .replace(/--image--/ig, element.image)
                    .replace(/--price--/ig, element.price);
                } else{
                    cartListHTML += cartTmpl
                    .replace(/--title--/ig, element.title)
                    .replace(/--author--/ig, element.author)
                    .replace(/--image--/ig, element.image)
                    .replace(/--price-- грн/ig, '');
                }
            // console.log('cartListHTML',cartListHTML)
        cartList.innerHTML = cartListHTML;
        });
    };


    xhr.open('GET', url_price_min);
    xhr.send();
})();