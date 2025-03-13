<template>
  <header id="homepage">
    <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex w-full md:w-auto justify-between items-center">
          <a data-aos="fade-right" href="/qme.html" class="flex items-center gap-2">
            <img src="~/assets/images/appicon.png" class="max-w-[75px] w-full rounded-2xl" alt="">
          </a>
          <button @click="toggleMobileMenu" class="md:hidden text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav :class="{'hidden md:flex': !mobileMenuOpen, 'flex': mobileMenuOpen}" class="w-full flex-col md:flex-row md:justify-end mx-auto md:mr-0 md:ml-auto mt-6 md:mt-0 items-center">
          <ul class="flex flex-col md:flex-row gap-5 text-gray-600 mb-6 md:mb-0 items-center">
            <li><a href="#improvement" class="hover:underline py-2 block" @click="mobileMenuOpen = false">{{ $t('tabs.cognitive') }}</a></li>
            <li><a href="#faq" class="hover:underline py-2 block" @click="mobileMenuOpen = false">{{ $t('faq.title') }}</a></li>
            <li><a href="mailto:dreamifyapp@gmail.com" class="hover:underline py-2 block" @click="mobileMenuOpen = false">{{ $t('footer.menu.contact') }}</a></li>
          </ul>
          <a href="https://apps.apple.com/us/app/nils-playground/id6742713427" target="_blank" class="md:ml-10">
            <img src="~/assets/images/appstore.png" alt="App Store" class="h-16 md:h-20">
          </a>
        </nav>
      </div>
    </div>
  </header>

  <section id="hero">
    <div data-aos="fade-down" class="mx-auto sm:px-7 px-4 max-w-screen-xl pt-10 pb-5 text-center flex flex-col">
      <h1 class="pb-2 text-3xl md:text-6xl font-bold max-w-[900px] mx-auto text-slate-700">{{ $t('hero.title') }}</h1>
      <p class="pb-10 text-lg text-gray-600 max-w-[600px] mx-auto">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="flex mx-auto gap-0 md:gap-10 items-center">
        <a href="https://www.producthunt.com/posts/nil-s-playground?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nil&#0045;s&#0045;playground" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=938692&theme=neutral&t=1741812854684" alt="Nil's&#0032;Playground - Learn&#0032;about&#0032;animals&#0044;&#0032;shapes&#0044;&#0032;colors&#0044;&#0032;and&#0032;numbers | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
      </div>
    </div>

    <div class="mx-auto sm:px-7 px-4 max-w-screen-xl mb-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div class="col-span-1 md:col-span-4 text-center md:text-right">
          <div data-aos="fade-right" data-aos-delay="200" class="mb-10">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <span class="md:ml-auto">{{ $t('hero.features.childFriendly') }}</span>
              <BIcon1CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.childFriendlyDescription') }}</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="300" class="mb-10">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <span class="md:ml-auto">{{ $t('hero.features.free') }}</span>
              <BIcon2CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.freeDescription') }}</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <span class="md:ml-auto">{{ $t('hero.features.parentReport') }}</span>
              <BIcon3CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.parentReportDescription') }}</p>
          </div>
        </div>
        
        <div class="hidden relative md:block col-span-4">
          <img data-aos="zoom-in" data-aos-delay="500" class="absolute bottom-32 -left-10" src="~/assets/images/home-arrow.svg" alt="">
          <img src="~/assets/images/iPhone-1.png" class="w-full" alt="">
        </div>
        
        <div class="col-span-1 md:col-span-4 text-center md:text-left">
          <div data-aos="fade-left" data-aos-delay="200" class="mb-10">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <BIcon4CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
              <span>{{ $t('hero.features.adFree') }}</span>
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.adFreeDescription') }}</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="300" class="mb-10">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <BIcon5CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
              <span>{{ $t('hero.features.multiLanguage') }}</span>
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.multiLanguageDescription') }}</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <h3 class="mb-2 text-base font-semibold leading-tight text-gray-900 md:items-center md:flex gap-2">
              <BIcon6CircleFill class="text-2xl text-blue-600 hidden md:inline-block" />
              <span>{{ $t('hero.features.offline') }}</span>
            </h3>
            <p class="text-sm text-gray-500">{{ $t('hero.features.offlineDescription') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { 
  BIcon1CircleFill, 
  BIcon2CircleFill, 
  BIcon3CircleFill, 
  BIcon4CircleFill, 
  BIcon5CircleFill, 
  BIcon6CircleFill 
} from 'bootstrap-icons-vue'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
<style scoped>
@media (max-width: 768px) {
  nav {
    transition: all 0.3s ease;
  }
}
</style>
