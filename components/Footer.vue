<template>
  <footer class="bg-black text-white py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-2xl font-bold mb-8" data-aos="fade-up">Nil's Playground</div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="font-bold mb-4">{{ $t('footer.about.title') }}</h3>
          <p class="text-gray-400 text-sm">{{ $t('footer.about.text') }}</p>
          <a href="mailto:dreamifyapp@gmail.com" class="table mt-4 border border-white text-white px-4 py-2 rounded-full text-sm">{{ $t('footer.about.contact') }}</a>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="font-bold mb-4">{{ $t('footer.menu.title') }}</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li><a href="#homepage" class="hover:underline">{{ $t('footer.menu.home') }}</a></li>
            <li><a href="#improvement" class="hover:underline">{{ $t('footer.menu.improvement') }}</a></li>
            <li><a href="#faq" class="hover:underline">{{ $t('footer.menu.faq') }}</a></li>
            <li><a href="mailto:dreamifyapp@gmail.com" class="hover:underline">{{ $t('footer.menu.contact') }}</a></li>
          </ul>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="font-bold mb-4">{{ $t('footer.legal.title') }}</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li><a href="https://www.freeprivacypolicy.com/live/44e46001-53eb-4c60-a7cc-8d305264b32a" target="_blank">{{ $t('footer.legal.privacy') }}</a></li>
            <li><a href="https://www.freeprivacypolicy.com/live/44e46001-53eb-4c60-a7cc-8d305264b32a" target="_blank">{{ $t('footer.legal.terms') }}</a></li>
            <li><a href="https://www.freeprivacypolicy.com/live/44e46001-53eb-4c60-a7cc-8d305264b32a" target="_blank">{{ $t('footer.legal.kvkk') }}</a></li>
          </ul>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 class="font-bold mb-4">{{ $t('footer.contact.title') }}</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li><a href="mailto:dreamifyapp@gmail.com" class="hover:underline">dreamifyapp@gmail.com</a></li>
            <li><a href="http://instagram.com/nils_playground" target="_blank" class="hover:underline flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram mr-2" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>{{ $t('footer.contact.instagram') }}</a></li>
            <li>{{ $t('footer.contact.location') }}</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Nil's Playground. {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>
