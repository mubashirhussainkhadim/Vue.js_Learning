export default {
  template: `
    <form @submit.prevent="add">
      <div class="flex items-center border border-gray-600 rounded-lg bg-white p-2">
        <!-- Input Field -->
        <input 
          name="name" 
          v-model="newAssignment" 
          placeholder="New Assignment..." 
          class="flex-1 p-2 text-black bg-gray-50 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500" 
        />

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="bg-gray-800 text-white px-4 py-2 border-l border-gray-600 rounded-r-lg hover:bg-gray-700 transition-all"
        >
          Add
        </button>
      </div>
    </form>
  `,

  data() {
    return {
      newAssignment: '',
    };
  },

  methods: {
    add() {
      if (this.newAssignment.trim()) {
        this.$emit('add', this.newAssignment);
        this.newAssignment = '';
      }
    },
  },
};
