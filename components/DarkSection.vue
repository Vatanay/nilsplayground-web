<template>
  <section class="bg-blue-600 text-white py-16 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12">
        <p class="text-blue-400 uppercase text-sm">Özellikler</p>
        <h2 class="text-3xl font-bold">Endless<br />Workout Options</h2>
        <p class="text-blue-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
      </div>
      
      <div class="relative">
        <img src="~/assets/images/family.jpeg" alt="Workout" class="w-full h-80 object-cover rounded-xl" />
        
        <!-- Workout Cards -->
        <div class="flex gap-4 mt-6 overflow-x-auto pb-4">
          <div class="bg-blue-700 p-4 rounded-xl min-w-[150px]">
            <div class="w-12 h-12 bg-gray-700 rounded-full mb-3"></div>
            <p class="text-sm font-semibold">Cardio Workout</p>
            <p class="text-xs text-blue-400">Lorem ipsum</p>
          </div>
          
          <div class="bg-blue-700 p-4 rounded-xl min-w-[150px]">
            <div class="w-12 h-12 bg-gray-700 rounded-full mb-3"></div>
            <p class="text-sm font-semibold">Strength Training</p>
            <p class="text-xs text-blue-400">Lorem ipsum</p>
          </div>
          
          <div class="bg-blue-700 p-4 rounded-xl min-w-[150px]">
            <div class="w-12 h-12 bg-gray-700 rounded-full mb-3"></div>
            <p class="text-sm font-semibold">Full Body Workout</p>
            <p class="text-xs text-blue-400">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
