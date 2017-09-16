<template lang="html">
  <div>
    <div class="row">
      <form class="col s12" @submit.prevent="createTask()">
        <div class="row">
          <div class="input-field col s12">
            <h4>New Task</h4>
            <input v-model="title" type="text" name="title" placeholder="Title">
            <input v-model="desc" type="text" name="desc" placeholder="Description">
            <input v-model="assign" type="text" name="name" placeholder="Your name">
            <button class="btn waves-effect waves-light" type="submit" name="submit">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      desc: '',
      assign: ''
    }
  },
  methods: {
    createTask () {
      console.log(this.title, this.desc, this.assign)
      this.$db.ref('tasks/hitam/').push({
        title: this.title,
        description: this.desc,
        assign: this.assign
      })

      this.title = ''
      this.desc = ''
      this.assign = ''
    }
  }
}
</script>

<style lang="css">
</style>
