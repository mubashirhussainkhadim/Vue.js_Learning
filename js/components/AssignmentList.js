import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: `
        <section v-show="assignments.length" class="p-6 bg-white text-black shadow-lg rounded-lg mb-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold text-black">{{ title }}
                <span class="text-gray-500 text-sm">({{ assignments.length }})</span>
            </h2>
            
            <!-- Assignment Tags component with filter functionality -->
            <assignment-tags
                @change="currentTag = $event" 
                v-model="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
                class="flex space-x-3"
            ></assignment-tags>
          </div>

          <!-- List of assignments -->
          <ul class="space-y-4">
            <assignment 
                v-for="assignment in filterAssignments" 
                :key="assignment.id" 
                :assignment="assignment" 
                class="py-3 px-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
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
