<template lang="html">
  <div>
    <div v-for="data in merah" class="card red darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ data.title }}</span>
        <p>{{ data.description }}</p>
        <p><b>"{{ data.assign }}"</b></p>
      </div>
      <div class="card-action">
        <a @click="deleteTask(data['.key'])" href="#!">DELETE</a><br>
        <a href="#!">MOVE RIGHT</a>
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
    }
  }
}
</script>

<style lang="css">
</style>
