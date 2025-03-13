// Sayfa içi bağlantılar için animasyonlu kaydırma eklentisi
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // Tüm sayfa içi bağlantıları seçelim
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      
      // Her bağlantı için tıklama olayı ekleyelim
      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Hedef ID'yi alalım
          const targetId = link.getAttribute('href').substring(1);
          
          // Hedef elementi bulalım
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Animasyonlu kaydırma
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  }
});
