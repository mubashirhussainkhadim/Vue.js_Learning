export default {
    template: `
      <button 
        :class="{
          'focus:outline-none focus:ring-2 focus:ring-blue-300': true,
          'bg-blue-500 ml-2 text-white px-6 py-2 rounded-lg hover:bg-blue-700': type === 'primary',
          'bg-gray-500 ml-2 text-white px-6 py-2 rounded-lg hover:bg-gray-700': type === 'secondary',
          'bg-gray-200 ml-2 text-gray-500 px-6 py-2 rounded-lg hover:bg-gray-300': type === 'muted',
          'is-loading': processing,
        }" 
        :disabled="processing"
      >
        <slot></slot>
      </button>
    `,
    
    props: {
      type: {
        type: String,
        default: 'primary' // Default type is 'primary'
      },
      processing: {
        type: Boolean,
        default: false,
    }
    },
   
  };
  