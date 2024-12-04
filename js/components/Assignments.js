import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
      <div class="flex flex-col space-y-4 p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
        <section class="space-y-4">
          <!-- Display In Progress assignments -->
          <assignment-list :assignments="filters.inProgress" title="In Progress" class="bg-gray-50 p-3 rounded-md shadow-sm"></assignment-list>
          
          <!-- Display Completed assignments -->
          <assignment-list :assignments="filters.completed" title="Completed" class="bg-gray-50 p-3 rounded-md shadow-sm"></assignment-list>
        </section>

        <!-- Assignment Create Component -->
        <assignment-create @add="add" class="mt-4 p-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition"></assignment-create>
      </div>
  `,

  data() {
    return {
      assignments: [],
      newAssignment: '',
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  created() {
    // Check if data is already in localStorage
    const cachedAssignments = localStorage.getItem('assignments');
    
    if (cachedAssignments) {
      // If found in localStorage, use it
      this.assignments = JSON.parse(cachedAssignments);
    } else {
      // If not in localStorage, fetch from the API
      fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(assignments => {
          this.assignments = assignments;
          // Cache the fetched data in localStorage
          localStorage.setItem('assignments', JSON.stringify(assignments));
        });
    }
  },

  methods: {
    add(name) {
      const newAssignment = {
        name: name,
        completed: false,
        tag: 'new',
        id: this.assignments.length + 1,
      };

      // Add the new assignment to the list
      this.assignments.push(newAssignment);

      // Update localStorage to include the new assignment
      localStorage.setItem('assignments', JSON.stringify(this.assignments));
    },
  },
};
