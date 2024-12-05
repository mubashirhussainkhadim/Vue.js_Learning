import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./panel.js";
export default {
    components: { Assignment, AssignmentTags , Panel },

    template: `
        <panel v-show="assignments.length" class="w-90" id="my-panel">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-semibold text-black">{{ title }}
                <span class="text-gray-500 text-sm">({{ assignments.length }})</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            <!-- Assignment Tags component with filter functionality -->
          
          </div>
               <assignment-tags
                @change="currentTag = $event" 
                v-model="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
                class="flex space-x-3 mb-2"
            ></assignment-tags>
          <!-- List of assignments -->
          <ul class="space-y-4 ">
            <assignment 
                v-for="assignment in filterAssignments" 
                :key="assignment.id" 
                :assignment="assignment" 
                class="py-3 px-4 bg-gray-600 rounded-lg shadow-sm  mb-2 transition-all"
            ></assignment>
          </ul>
          <slot></slot>
        </panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean , default: false}
    },

    data() {
        return {
            currentTag: 'all' // Default to 'all' tag
        }
    },

    computed: {
        filterAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    }
}
