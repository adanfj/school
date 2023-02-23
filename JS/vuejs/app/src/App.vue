<script >
import Form from './components/bootstrap/Form.vue';
export default {
  data() {
    return {
      name: "Adan",
      year: 1998,
      image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2020/06/montanas-guilin-china-1959927.jpg?itok=4gWWktCl",
      count: 0,
      newText: "",
      fields: [
        {
          legend: 'Fieldset 1',
          fields: [
            {
              label: 'Text 1',
              type: 'text'
            },
            {
              label: 'Textarea',
              type: 'textarea'
            },
            {
              label: 'Check me',
              type: 'checkbox'
            }, {
              label: 'Check me 2',
              type: 'checkbox'
            },{
              label: 'Check me 2',
              type: 'select',
              options:["Option 1","Option 2"],
              value:"Option 1"
            },
          ]
        }
      ]
    }
  },
  components: {
    Form
  },
  methods: {
    reset() {
      this.fields = [...this.fields.map(fieldset => [{
        ...fieldset,
        fields: [...fieldset.fields.map(field => [{
          ...field,
          value: ""
        }][0])]
      }][0])]
    }
  }

}


</script>

<template>
  <header>
  </header>

  <main class="container border rounded mt-4 p-4">
    <div class="row g-1">
      <Form :fields="fields" v-bind="fields"></Form>
      <button class="btn btn-warning" @auxclick="() => {
      
      }" @click="reset">Reset</button>

    </div>
    {{ JSON.stringify(fields) }}

  </main>
</template>

