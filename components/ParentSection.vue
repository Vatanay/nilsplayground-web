<template>
  <section id="contact">
    <div class="mx-auto max-w-7xl py-20 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-blue-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ $t('parent.title') }}</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">{{ $t('parent.text') }}</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="mailto:dreamifyapp@gmail.com" class="text-sm font-semibold leading-6 text-white">{{ $t('parent.button') }} <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8" data-aos="fade-left" data-aos-duration="1000">
          <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="~/assets/images/hero.png" alt="App screenshot" width="1824" height="1080">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped></style>
