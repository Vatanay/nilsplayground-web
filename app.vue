<template>
  <div class="font-sans">
    <LanguageSwitcher />
    <Header />
    <SmallImages />
    <!--<DarkSection />-->
    <TabsSection />
    <FAQSection />
    <ParentSection />
    <!-- Cookie Notice 
    <section data-aos="fade-right" id="cookies"
        class="fixed max-w-full md:max-w-md p-4 mx-auto bg-white border border-gray-200 left-0 md:left-12 bottom-0 md:bottom-16 rounded-none md:rounded-2xl w-full">
        <h2 class="font-semibold text-gray-800">🍪 Cookie Notice</h2>

        <p class="mt-4 text-sm text-gray-600">We use cookies to ensure that we give you the best
            experience on our website. <a href="#" class="text-blue-500 hover:underline">Read cookies policies</a>.
        </p>
        <div class="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button
                class="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
                Manage your preferences
            </button>

            <button
                class="close-cookie text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                Accept
            </button>
        </div>
    </section>
    -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import TabsSection from './components/TabsSection.vue';
//import DarkSection from './components/DarkSection.vue';
import ParentSection from './components/ParentSection.vue';
import SmallImages from './components/AppImages.vue';
import FAQSection from './components/FAQSection.vue';
import Footer from './components/Footer.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

const activeTab = ref('plan');
const cookieConsent = ref(false);

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50,
  });
});
</script>

<style>
</style>
