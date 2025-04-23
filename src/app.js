document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
      items: [
          { id: 1, name: 'Kopi Gula Aren Hot', img: 'p2', price: 18000},
          { id: 2, name: 'Kopi Gula Aren Cold', img: 'p3', price: 18000},
      ],
  }));

  Alpine.store('cart', {
      items: [],
      total: 0,
      quantity: 0,
      add(newitem) {
          const cartItem = this.items.find((item) => item.id === newitem.id);
          if (!cartItem) {
              this.items.push({ ...newitem, quantity: 1, total: newitem.price });
              this.quantity++;
              this.total += newitem.price;
          } else {
              this.items = this.items.map((item) => {
                  if (item.id !== newitem.id) {
                      return item;
                  } else {
                      item.quantity++;
                      item.total = item.price * item.quantity;
                      return item;
                  }
              });
              this.quantity++;
              this.total += newitem.price;
          }
      },
      remove(id) {
          const cartItemIndex = this.items.findIndex((item) => item.id === id);
          if (cartItemIndex !== -1) {
              const cartItem = this.items[cartItemIndex];
              if (cartItem.quantity > 1) {
                  this.items = this.items.map((item) => {
                      if (item.id === id) {
                          return {
                              ...item,
                              quantity: item.quantity - 1,
                              total: item.price * (item.quantity - 1),
                          };
                      }
                      return item;
                  });
                  this.quantity--;
                  this.total -= cartItem.price;
              } else {
                  this.items = this.items.filter((item) => item.id !== id);
                  this.quantity -= cartItem.quantity;
                  this.total -= cartItem.total;
              }
          }
      },
  });

  window.checkoutViaWhatsApp = function (name) { // Membuat fungsi global agar bisa diakses onclick
      const phoneNumber = "6282358489428"; // Ganti dengan nomor WhatsApp Anda
      const cartItems = Alpine.store('cart').items;
      const totalAmount = Alpine.store('cart').total;
      const hargaPokok = 18000; // Definisikan harga pokok di sini

      let orderDetails = "Halo, nama saya " + name + ". Saya ingin melakukan pemesanan:\n";

      if (cartItems.length > 0) {
          cartItems.forEach(item => {
              orderDetails += `- ${item.name} x ${item.quantity} (Rp${hargaPokok.toLocaleString('id-ID')}) = Rp${item.total.toLocaleString('id-ID')}\n`;
          });
          orderDetails += `\nTotal: Rp${totalAmount.toLocaleString('id-ID')}`;
      } else {
          orderDetails += "Keranjang belanja saya kosong.";
      }

      const message = encodeURIComponent(orderDetails);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, '_blank');
  };
});

// Konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
};