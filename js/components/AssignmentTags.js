export default {
  template: `
       <div class=" flex gap-2  mt-2">
           <button 
             @click="$emit('update:modelValue', tag)" 

  v-for="tag in tags" 
  :key="tag" 
  class="border text-black rounded px-1 py-px text-xs"
  :class="{
    'border-blue-500 text-blue-500 bg-white': tag === modelValue
  }">
  {{ tag }}
</button>
</div>
    `,
    props : {
        initialTags : Array,
        modelValue: String
    },
   
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
};
