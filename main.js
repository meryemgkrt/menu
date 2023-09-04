import { menu, buttonsData } from "./db.js";
import { calcultorPrice } from "./help.js";
console.log(buttonsData);
//Safanın yüklenme alanını izlenme
const menuArea = document.getElementById("menu-area");
const buttonsArea = document.getElementById("buttons-area");
document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");

  renderMenuItems(menu);
});
//butonlar kısmındaki tıklanma olayını izkeme
document.addEventListener("click", searcCategory);

//!Ekrana menu elemanlarını basar

function renderMenuItems(menuItems) {
  // dizideki her bireleman için
  // bir elemanı temsil eden html oluştu
  // bu html'yi diziye aktar
  // sitringe çevir

  let menuHtml = menuItems.map((item) => {
   
    return `
  <a href="/productsDetail.html?id=${item.id}" id="card" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
  <img class="rounded shadow" src=${item.img} >
  <div>
   <div class="d-flex justify-content-between" >
       <h5>${item.title}</h5>
       <p class="text-success"> &#8378; ${calcultorPrice(item.price)} </p>
      </div>
      <p class="lead">${item.desc}</p>
  </div>
  
</a>
  `;
  });
  //diziyi sitringe çevirir
  menuHtml = menuHtml.join(" ");

  //oluşturduğumuz html'yi ekrana bas
  menuArea.innerHTML = menuHtml;
}

//!Tıklanılan butona göre ekrana o katogoriye ait ürünleri listele
function searcCategory(e) {
  const category = e.target.dataset.category;
  //Tüm dizi elemanlarından butonun gategori ile eşleşeni getir
  const filterMenu = menu.filter((item) => item.category === category);

  if ((category === "all")) {
    renderMenuItems(menu);
  } else {
    //filitrelenmiş diziyi ekrana getirir
    renderMenuItems(filterMenu);
  }

  //Butonları güncelle
  renderButtons(category);
}
//!Ekrana butonları basacak fonksiyon
function renderButtons(active) {
    //Eski butonları kaldırma
    buttonsArea.innerHTML=' ';
  
  //Yeni buton oluşturma
  buttonsData.forEach((btn) => {
    //html butonu oluşturma
    const buttonEle = document.createElement("button");

    buttonEle.className = "btn btn-outline-dark filter-btn";
    //İçindeki yazıyı değiştirme
    buttonEle.innerText = btn.text;
    //Hangi katogoriye denk geldiğini buton elementine ekleme
    buttonEle.dataset.category = btn.value;
//Eğreki aktif katogori ile buton eşleşirse ona farklı class ver
if(btn.value === active){
   buttonEle.classList.add('bg-dark', 'text-light')
}
    //html'ye gönder
    buttonsArea.appendChild(buttonEle);
  });
}
