import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentList , AssignmentCreate},

  template: `
      <div flex space-between gap-2 mb-6>
    <section class="space-y-6">
      <!-- Display In Progress assignments -->
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      
      <!-- Display Completed assignments -->
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>

    <!-- Assignment Create Component -->
    <assignment-create @add="add"></assignment-create>
  </div>
      
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 , tag:"math"},
        { name: "Turn in Homework", complete: false, id: 2 ,tag:"science" },
        { name: "Read Chapter 4", complete: false, id: 3 ,tag:"science"},
      ],
      newAssignment: '' ,
    }
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
  methods: {
    add(name) {
        this.assignments.push({
            name: name,
            completed:false,
            tag: 'new',
            id: this.assignments.length + 1
        });
    }
  }
};
