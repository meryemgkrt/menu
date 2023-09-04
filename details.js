import{menu} from './db.js';
import { calcultorPrice } from './help.js';

const outlet = document.getElementById('outlet')
/*
 * URL deki parametreli yönetebilmek için
 * URLSearchParams class'ından bir örnek oluşturduk
 * örneği oluşturuken kendi url'mizdeki parametrelei gönderdik
 */

const searchParams = new URLSearchParams(window.location.search);
//*Get metodu aracılığla url'deki id parametredeki eriştik
const paramId = searchParams.get("id")

//!Menü içerisinden id'sini bildiğimiz elemana erişme

const product = menu.find((item) => item.id === Number(paramId));

//Bulduğumuz ürüne göre arayüzü ekranabasma
 outlet.innerHTML= `
 <div class="d-flex justify-content-between align-items-center">
      <a href="/">
        <i class="bi bi-house fs-1"></i>
      </a>
    <div>
    AnaSayfa / ${product.category} / ${product.title}
     </div>  
 </div>
     
      <h1 class="text-center my-3 shadow p-2 text-dark">${product.title}</h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          class="img-fluid rounded shadow-lg"
          style="max-width: 900px"
          src=${product.img}
        />
      </div>
      <div>
        <h3 class="my-5">
         Ürünün Kategorisi: <span>${product.category}</span>
        </h3>
       <h3 class="my-5">
        Ürünün Fiyatı:
        <span class="text-success"> ${calcultorPrice(product.price)} &#8378;</span>
       </h3>
      </div>
     
      <p class="lead fs-3">
        ${product.desc}
      </p>
 `