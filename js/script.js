// Toggle class active untuk humburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box"); // Meskipun tidak digunakan dalam toggle, ini mungkin diperlukan di bagian lain

document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};

// Klik di luar elemen untuk menutup menu, search, dan cart
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button"); // Perbaikan nama variabel
const shoppingCartButton = document.querySelector("#shopping-cart-button"); // Perbaikan nama variabel

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// Klik di luar modal untuk menutup modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const tombolKirim = document.getElementById('kirimPesan');
  
    tombolKirim.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah pengiriman formulir standar
  
      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const noHp = document.getElementById('no_hp').value;
  
      console.log('Data yang akan dikirim:');
      console.log('Nama:', nama);
      console.log('Email:', email);
      console.log('Nomor HP:', noHp);
  
      alert(`Data yang Anda masukkan:\nNama: ${nama}\nEmail: ${email}\nNomor HP: ${noHp}\n\nPerhatikan: Data ini belum dikirim ke email. Anda memerlukan kode di sisi server untuk mengirim email.`);
    });
  });

  