<template>
  <section class="py-16 px-6 bg-section-background">
    <div class="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-6 max-w-5xl mx-auto">
      <div class="bg-white p-1 md:p-4 rounded-xl col-span-1" data-aos="fade-up" data-aos-delay="100">
        <img src="~/assets/images/small-1.png" alt="Watch App" class="w-full h-64 object-cover rounded-lg" />
      </div>
      
      <div class="bg-white p-1 md:p-4 rounded-xl col-span-1" data-aos="fade-up" data-aos-delay="300">
        <img src="~/assets/images/small-2.png" alt="Fitness" class="w-full h-64 object-cover rounded-lg" />
      </div>
      
      <div class="bg-white p-1 md:p-4 rounded-xl col-span-1" data-aos="fade-up" data-aos-delay="500">
        <img src="~/assets/images/small-3.png" alt="Mobile App" class="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-section-background {
  background-image: url('@/assets/images/section-background.png');
  background-size: cover;
  background-position: center;
}
</style>
