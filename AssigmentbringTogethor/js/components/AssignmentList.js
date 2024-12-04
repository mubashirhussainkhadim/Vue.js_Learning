import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length" >
            <h2 class="font-bold mb-2">{{ title }}
             <span>{{ assignments.length }}</span>
            </h2>
            
            <div class=" flex gap-2  mt-2">
           <button 
  v-for="tag in tags" 
  :key="tag" 
  @click="currentTag = tag" 
  class="border rounded px-1 py-px text-xs"
  :class="{
    'border-blue-500 text-blue-500 bg-white': tag === currentTag
  }">
  {{ tag }}
</button>

            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in filterAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String
    },
    data() {
       return {
        currentTag : ''
       }
    },
    computed: {
        filterAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
             return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['all', ...new Set(this.assignments.map(t => t.tag))];
        }
    }
}
