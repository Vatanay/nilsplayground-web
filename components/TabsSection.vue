<template>
  <section class="py-16 px-6 bg-white" id="improvement">
    <div class="w-[90%] mx-auto">
      <!-- Tabs -->
      <div class="flex justify-center mb-12">
        <div class="bg-gray-100 rounded-full p-1 inline-flex flex-wrap md:flex-nowrap justify-center">
          <button 
            class="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap"
            :class="activeTab === 'plan' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'plan'">
            {{ $t('tabs.vocabulary') }}
          </button>
          <button 
            class="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap"
            :class="activeTab === 'challenges' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'challenges'">
            {{ $t('tabs.cognitive') }}
          </button>
          <button 
            class="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap"
            :class="activeTab === 'trainers' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'trainers'">
            {{ $t('tabs.problem') }}
          </button>
          <button 
            class="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap"
            :class="activeTab === 'community' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'community'">
            {{ $t('tabs.coordination') }}
          </button>
        </div>
      </div>
      
      <!-- Plan Setup Tab Content -->
      <div v-if="activeTab === 'plan'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
          <div class="text-center md:text-right order-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('tabs.vocabulary_content.title') }}</h2>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.vocabulary_content.text1') }}</p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.vocabulary_content.text2') }}
            </p>
          </div>
          <div class="order-0 md:order-1 flex justify-center">
            <img src="~/assets/images/screenshot-2.png" alt="Uygulama Ekranı" class="h-64 md:h-96 object-contain" />
          </div>
          <div class="text-center md:text-left order-2">
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.vocabulary_content.text3') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.vocabulary_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Challenges Tab Content -->
      <div v-if="activeTab === 'challenges'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
          <div class="text-center md:text-right order-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('tabs.cognitive_content.title') }}</h2>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.cognitive_content.text1') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.cognitive_content.text2') }}
            </p>
          </div>
          <div class="order-0 md:order-1 flex justify-center">
            <img src="~/assets/images/screenshot-1.png" alt="Uygulama Ekranı" class="h-64 md:h-96 object-contain" />
          </div>
          <div class="text-center md:text-left order-2">
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.cognitive_content.text3') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.cognitive_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Trainers Tab Content -->
      <div v-if="activeTab === 'trainers'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
          <div class="text-center md:text-right order-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('tabs.problem_content.title') }}</h2>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.problem_content.text1') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.problem_content.text2') }}
            </p>
          </div>
          <div class="order-0 md:order-1 flex justify-center">
            <img src="~/assets/images/screenshot-7.png" alt="Uygulama Ekranı" class="h-64 md:h-96 object-contain" />
          </div>
          <div class="text-center md:text-left order-2">
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.problem_content.text3') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.problem_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Community Tab Content -->
      <div v-if="activeTab === 'community'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
          <div class="text-center md:text-right order-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('tabs.coordination_content.title') }}</h2>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.coordination_content.text1') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.coordination_content.text2') }}
            </p>
          </div>
          <div class="order-0 md:order-1 flex justify-center">
            <img src="~/assets/images/screenshot-3.png" alt="Uygulama Ekranı" class="h-64 md:h-96 object-contain" />
          </div>
          <div class="text-center md:text-left order-2">
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.coordination_content.text3') }}
            </p>
            <p class="text-gray-600 mb-4 md:mb-6">
              {{ $t('tabs.coordination_content.text4') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('plan');
</script>

<style scoped>
@media (max-width: 768px) {
  .bg-gray-100 {
    max-width: 100%;
  }
}
</style>
