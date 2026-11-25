// ÜRÜNİO İLAN AYARLARI
// Kendi telefon numaranı aşağıdaki alana 90 ile başlayacak şekilde yaz.
// Örnek: 905551112233 (boşluk, + veya tire kullanma)
const CONTACT_PHONE = "905061904314";

const listings = [
  {
    id: 1, title: "SKYJET NİTRO PRO ", category: "Elektrikli Bisiklet", price: 25000,
    badge: "ÖNE ÇIKAN", condition: "Temiz kullanılmış", location: "Konya/Merkez",
    description: "Skyjet Nitro Pro elektrikli bisikletim tüm aksamlarıyla sorunsuz ve çalışır durumdadır. Yalnızca koltuğunda deformasyon bulunmaktadır. 250W orta motor, 29 inç jant ve 18 vites özelliklerine sahiptir. Yaklaşık 30 km/sa hız yapmaktadır ve kullanıma bağlı olarak 30-40 km menzil sunmaktadır. Konya Erbaş Bisiklet'ten alınmıştır, ikinci kullanıcısıyım ve faturası mevcuttur. Elektronik cihazlarla takas olur",
    images: [
      "images.jpeg",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1100&q=85"
    ]
  },
//   {
//     id: 2, title: "Kablosuz Kulaklık", category: "Elektronik", price: 1250,
//     badge: "FIRSAT", condition: "Az kullanılmış", location: "Antalya",
//     description: "Günlük kullanım için ideal, temiz ve sorunsuz kablosuz kulaklık. Ürünle ilgili merak ettiklerini iletişim kurarak sorabilirsin.",
//     images: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1100&q=85"
//     ]
//   },
//   {
//     id: 3, title: "Günlük Sırt Çantası", category: "Aksesuar", price: 850,
//     badge: "YENİ İLAN", condition: "Çok iyi durumda", location: "Manavgat",
//     description: "Günlük kullanıma uygun, geniş iç hacimli sırt çantası. Herhangi bir deformasyonu bulunmamaktadır. Detaylar için iletişime geçebilirsin.",
//     images: [
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1581605405669-f220f2b8a8a2?auto=format&fit=crop&w=1100&q=85"
//     ]
//   },
//   {
//     id: 4, title: "Akıllı Saat", category: "Elektronik", price: 2100,
//     badge: "ÖNE ÇIKAN", condition: "Temiz kullanılmış", location: "Antalya",
//     description: "Şık tasarımlı akıllı saat. Günlük kullanımda işlevsel ve kullanımı rahattır. Ürünün durumu ve diğer detaylar için iletişime geçebilirsin.",
//     images: [
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1100&q=85"
//     ]
//   },
//   {
//     id: 5, title: "Minimal Masa Lambası", category: "Ev & Yaşam", price: 690,
//     badge: "FIRSAT", condition: "Az kullanılmış", location: "Manavgat",
//     description: "Çalışma masası ve yaşam alanları için sade tasarımlı masa lambası. Temiz durumdadır. Soruların için doğrudan yazabilirsin.",
//     images: [
//       "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1100&q=85"
//     ]
//   },
//   {
//     id: 6, title: "Retro Güneş Gözlüğü", category: "Aksesuar", price: 520,
//     badge: "YENİ İLAN", condition: "Çok iyi durumda", location: "Antalya",
//     description: "Günlük kombinlere uyum sağlayan retro tarz güneş gözlüğü. Ürün hakkında daha fazla bilgi almak için iletişime geçebilirsin.",
//     images: [
//       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1100&q=85",
//       "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1100&q=85"
//     ]
//   }
 ];

const money = n => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);
const grid = document.getElementById("listingGrid");
const modal = document.getElementById("modalBackdrop");
let selectedListing = null;
let currentImage = 0;

function renderListings() {
  grid.innerHTML = listings.map(item => `
    <article class="listing-card" tabindex="0" role="button" data-listing="${item.id}" aria-label="${item.title} ilanını görüntüle">
      <div class="listing-photo">
        <img src="${item.images[0]}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80'">
        <span class="photo-badge">${item.badge}</span>
        <span class="photo-count-badge">▧ ${item.images.length} fotoğraf</span>
      </div>
      <div class="listing-info">
        <span class="listing-category">${item.category}</span>
        <h3>${item.title}</h3>
        <div class="listing-meta"><strong class="listing-price">${money(item.price)}</strong><span class="detail-link">İlanı incele <span>→</span></span></div>
      </div>
    </article>`).join("");
}

function openListing(id) {
  selectedListing = listings.find(item => item.id === Number(id));
  if (!selectedListing) return;
  currentImage = 0;
  document.getElementById("detailCategory").textContent = selectedListing.category;
  document.getElementById("detailTitle").textContent = selectedListing.title;
  document.getElementById("detailPrice").textContent = money(selectedListing.price);
  document.getElementById("detailDescription").textContent = selectedListing.description;
  document.getElementById("detailFacts").innerHTML = `
    <span class="fact-pill">✦ ${selectedListing.condition}</span>
    <span class="fact-pill">⌖ ${selectedListing.location}</span>`;
  const phoneText = CONTACT_PHONE === "905XXXXXXXXX" ? "+90 5XX XXX XX XX" : "+" + CONTACT_PHONE;
  document.getElementById("contactNumberText").textContent = phoneText;
  const phoneIsSet = /^90\d{10}$/.test(CONTACT_PHONE);
  const message = encodeURIComponent(`Merhaba, Ürünio'daki "${selectedListing.title}" ilanınız hakkında bilgi almak istiyorum.`);
  const contactButton = document.getElementById("contactButton");
  contactButton.href = phoneIsSet ? `https://wa.me/${CONTACT_PHONE}?text=${message}` : "#";
  contactButton.onclick = phoneIsSet ? null : (e) => { e.preventDefault(); alert("WhatsApp bağlantısı için script.js dosyasındaki CONTACT_PHONE alanına kendi numaranı yaz."); };
  renderGallery();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function renderGallery() {
  const image = selectedListing.images[currentImage];
  const mainImage = document.getElementById("detailImage");
  mainImage.style.opacity = "0.25";
  mainImage.src = image;
  mainImage.alt = selectedListing.title + " fotoğraf " + (currentImage + 1);
  mainImage.onload = () => { mainImage.style.opacity = "1"; };
  mainImage.onerror = () => { mainImage.src = "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=80"; mainImage.style.opacity = "1"; };
  document.getElementById("photoCount").textContent = `${currentImage + 1} / ${selectedListing.images.length}`;
  document.getElementById("galleryThumbs").innerHTML = selectedListing.images.map((src, i) =>
    `<button class="${i === currentImage ? "active" : ""}" data-image="${i}" aria-label="${i+1}. fotoğraf"><img src="${src}" alt=""></button>`
  ).join("");
}
function changeImage(direction) {
  if (!selectedListing) return;
  currentImage = (currentImage + direction + selectedListing.images.length) % selectedListing.images.length;
  renderGallery();
}
function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
grid.addEventListener("click", e => {
  const card = e.target.closest("[data-listing]");
  if (card) openListing(card.dataset.listing);
});
grid.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-listing]")) {
    e.preventDefault(); openListing(e.target.dataset.listing);
  }
});
document.getElementById("prevImage").addEventListener("click", () => changeImage(-1));
document.getElementById("nextImage").addEventListener("click", () => changeImage(1));
document.getElementById("galleryThumbs").addEventListener("click", e => {
  const thumb = e.target.closest("[data-image]");
  if (thumb) { currentImage = Number(thumb.dataset.image); renderGallery(); }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);
});
renderListings();

// PROFİL AÇILMA VE KAPANMA
const profileTrigger = document.getElementById("profileTrigger");
const profileDropdown = document.getElementById("profileDropdown");

profileTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle("open");
});

profileDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  profileDropdown.classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    profileDropdown.classList.remove("open");
  }
});