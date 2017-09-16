<template lang="html">
  <div>
    <div v-for="data in merah" class="card red darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ data.title }}</span>
        <p>{{ data.description }}</p>
        <p><b>"{{ data.assign }}"</b></p>
      </div>
      <div class="card-action">
        <a @click="moveLeft(data['.key'], data.title, data.description, data.assign)" href="#!"><i class="small material-icons">arrow_back</i></a>
        <a @click="moveRight(data['.key'], data.title, data.description, data.assign)" href="#!"><i class="small material-icons">arrow_forward</i></a>
        <a @click="deleteTask(data['.key'])" href="#!"><i class="small material-icons">delete</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  firebase: function () {
    return {
      merah: this.$db.ref('tasks/merah/')
    }
  },
  methods: {
    deleteTask (key) {
      this.$db.ref(`tasks/merah/${key}`).remove()
    },
    moveRight (key, title, desc, assign) {
      this.$db.ref(`tasks/merah/${key}`).remove()
      this.$db.ref(`tasks/kuning/`).push({
        title: title,
        description: desc,
        assign: assign
      })
    },
    moveLeft (key, title, desc, assign) {
      this.$db.ref(`tasks/merah/${key}`).remove()
      this.$db.ref(`tasks/hitam/`).push({
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
