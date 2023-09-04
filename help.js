// Fiyat hesaplama fonksiyonu

export function calcultorPrice(price){
    let newPrice= price*15;
    //.'dan basamak ile sınırlama
    newPrice = newPrice.toFixed(2)
    return newPrice;
   }