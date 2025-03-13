<template>
  <section class="py-16 px-6 bg-white" id="improvement">
    <div class="w-[90%] mx-auto">
      <!-- Tabs -->
      <div class="flex justify-center mb-12">
        <div class="bg-gray-100 rounded-full p-1 inline-flex">
          <button 
            class="px-6 py-2 text-sm font-medium rounded-full"
            :class="activeTab === 'plan' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'plan'">
            {{ $t('tabs.vocabulary') }}
          </button>
          <button 
            class="px-6 py-2 text-sm font-medium rounded-full"
            :class="activeTab === 'challenges' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'challenges'">
            {{ $t('tabs.cognitive') }}
          </button>
          <button 
            class="px-6 py-2 text-sm font-medium rounded-full"
            @click="activeTab = 'trainers'">
            {{ $t('tabs.problem') }}
          </button>
          <button 
            class="px-6 py-2 text-sm font-medium rounded-full"
            :class="activeTab === 'community' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-50'"
            @click="activeTab = 'community'">
            {{ $t('tabs.coordination') }}
          </button>
        </div>
      </div>
      
      <!-- Plan Setup Tab Content -->
      <div v-if="activeTab === 'plan'">
        <div class="grid grid-cols-3 gap-4 w-full items-center justify-items-center">
          <div class="text-right">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tabs.vocabulary_content.title') }}</h2>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.vocabulary_content.text1') }}</p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.vocabulary_content.text2') }}
            </p>
          </div>
          <div><img src="~/assets/images/screenshot-2.png" alt="Uygulama Ekranı" class="h-96 object-contain" /></div>
          <div class="text-left">
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.vocabulary_content.text3') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.vocabulary_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Challenges Tab Content -->
      <div v-if="activeTab === 'challenges'">
        <div class="grid grid-cols-3 gap-4 w-full items-center justify-items-center">
          <div class="text-right">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tabs.cognitive_content.title') }}</h2>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.cognitive_content.text1') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.cognitive_content.text2') }}
            </p>
          </div>
          <div><img src="~/assets/images/screenshot-1.png" alt="Uygulama Ekranı" class="h-96 object-contain" /></div>
          <div class="text-left">
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.cognitive_content.text3') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.cognitive_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Trainers Tab Content -->
      <div v-if="activeTab === 'trainers'">
        <div class="grid grid-cols-3 gap-4 w-full items-center justify-items-center">
          <div class="text-right">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tabs.problem_content.title') }}</h2>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.problem_content.text1') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.problem_content.text2') }}
            </p>
          </div>
          <div><img src="~/assets/images/screenshot-7.png" alt="Uygulama Ekranı" class="h-96 object-contain" /></div>
          <div class="text-left">
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.problem_content.text3') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.problem_content.text4') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Community Tab Content -->
      <div v-if="activeTab === 'community'">
        <div class="grid grid-cols-3 gap-4 w-full items-center justify-items-center">
          <div class="text-right">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tabs.coordination_content.title') }}</h2>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.coordination_content.text1') }}
            </p>
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.coordination_content.text2') }}
            </p>
          </div>
          <div><img src="~/assets/images/screenshot-3.png" alt="Uygulama Ekranı" class="h-96 object-contain" /></div>
          <div class="text-left">
            <p class="text-gray-600 mb-6">
              {{ $t('tabs.coordination_content.text3') }}
            </p>
            <p class="text-gray-600 mb-6">
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
