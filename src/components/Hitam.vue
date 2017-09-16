<template lang="html">
  <div>
    <div v-for="data in hitam" class="card grey darken-4">
      <div class="card-content white-text">
        <span class="card-title">{{ data.title }}</span>
        <p>{{ data.description }}</p>
        <p><b>"{{ data.assign }}"</b></p>
        <!-- <p>key: {{ data['.key'] }}</p> -->
      </div>
      <div class="card-action">
        <a @click="deleteTask(data['.key'])" href="#!"><i class="small material-icons">delete</i></a>
        <a @click="moveRight(data['.key'], data.title, data.description, data.assign)" href="#!"><i class="small material-icons">arrow_forward</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  firebase: function () {
    return {
      hitam: this.$db.ref('tasks/hitam/')
    }
  },
  methods: {
    deleteTask (key) {
      this.$db.ref(`tasks/hitam/${key}`).remove()
    },
    moveRight (key, title, desc, assign) {
      this.$db.ref(`tasks/hitam/${key}`).remove()
      this.$db.ref(`tasks/merah/`).push({
        title: title,
        description: desc,
        assign: assign
      })
    }
  }
}
</script>

<style lang="css">
</style>
