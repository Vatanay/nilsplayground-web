// Dinamik sayfa başlığı için plugin
export default defineNuxtPlugin((nuxtApp) => {
  // Sayfa yüklendiğinde başlığı ayarla
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // Vue uygulaması hazır olduğunda başlığı güncelle
      updateTitle();
    });

    // Dil değişikliğini izle
    nuxtApp.hook('i18n:localeSwitched', (newLocale) => {
      // Dil değiştiğinde başlığı güncelle
      updateTitle();
    });
  }

  // Başlığı güncelleyen fonksiyon
  function updateTitle() {
    // Nuxt i18n'i kullanarak çevirileri al
    const { $i18n } = useNuxtApp();
    const title = $i18n.t('hero.title');
    const subtitle = $i18n.t('hero.subtitle');
    document.title = `${title} ─ ${subtitle}`;
  }
});
