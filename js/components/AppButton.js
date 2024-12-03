 export default {
    template: `
      <button class="bg-blue-500 ml-2 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300" :disabled="processing">
        <slot/>
      </button>
    `,
    data() {
        return{
            processing : true
        }
    }
  }