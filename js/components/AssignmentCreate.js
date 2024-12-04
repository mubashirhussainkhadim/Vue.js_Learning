export default {template : `
    <form @submit.prevent="add">
           <div class="border border-gray-600 text-black">
          <input name="name" v-model="newAssignment" placeholder="new Assignment ......." class="p-2" />
           <button type="submit" class="bg-white p-2 border-l">Add</button>
           </form>
    ` ,
   data () {
      return {
        newAssignment: ''
      }

   },
   methods: {
    add() {
      this.$emit('add' , this.newAssignment);
      // this.assignments.push({
      //     name: this.newAssignment,
      //     completed:false,
      //     id: this.assignments.length + 1
      // });
      this.newAssignment = '';
  }
   }
}
