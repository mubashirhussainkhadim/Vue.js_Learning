export default {
    template: `
        <li>
            <label class="p-2 flex justify-between  rounded  gap-2 align-items-center">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li> 
    `,

    props: {
        assignment: Object
    }
}