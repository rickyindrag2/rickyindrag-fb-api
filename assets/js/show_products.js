$(function () {
  var hasil;
  var items = [
    [
      "assets/img/html5.png",
      "Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet!",
    ],
    ["assets/img/css.png", "Mempercantik tampilan halaman website!"],
    [
      "assets/img/js.png",
      "Javascript membuat website lebih interaktif dan dinamis!",
    ],
    [
      "assets/img/facebook.svg",
      "Menggunakan Social Media Facebook beserta JS SDK + Graph API!",
    ],
  ];

  function showItems(items) {
    var i;
    var brg = "";
    for (i = 0; i < items.length; i++) {
      var item = items[i];
      brg += `<div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="${item[0]}">
                    <img src="${item[0]}" alt="${item[0]}_1" width="600" height="400">
                  </a>
                  <div class="desc">${item[1]}</div>
                </div>
              </div>`;
    }
    return brg;
  }
  hasil = showItems(items);
  var products = document.getElementById("products");
  products.innerHTML = hasil;
});
