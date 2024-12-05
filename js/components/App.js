import Assignments from "./Assignments.js";
import panel from "./panel.js";

export default {
    components: { Assignments , panel },

    template: `
        <assignments></assignments> 
        <panel> 
        <template v-slot:heading>
        hi
        </template>
<template v-slot:footer>
  <div class="footer-container bg-gray-800 text-white py-6 px-4">
    <p class="text-center text-sm">&copy; 2024 Your Company. All rights reserved.</p>
    <ul class="flex justify-center space-x-6 mt-4">
      <li><a href="/privacy-policy" class="text-sm hover:text-gray-400">Privacy Policy</a></li>
      <li><a href="/terms-of-service" class="text-sm hover:text-gray-400">Terms of Service</a></li>
      <li><a href="/contact-us" class="text-sm hover:text-gray-400">Contact Us</a></li>
    </ul>
  </div>
</template>


        </panel>   
    `,
}