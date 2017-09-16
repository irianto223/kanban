<template lang="html">
  <div>
    <div v-for="data in hijau" class="card light-green darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ data.title }}</span>
        <p>{{ data.description }}</p>
        <p><b>"{{ data.assign }}"</b></p>
        <!-- <p>key: {{ data['.key'] }}</p> -->
      </div>
      <div class="card-action">
        <a @click="moveLeft(data['.key'], data.title, data.description, data.assign)" href="#!"><i class="small material-icons">arrow_back</i></a>
        <a @click="deleteTask(data['.key'])" href="#!"><i class="small material-icons">done</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  firebase: function () {
    return {
      hijau: this.$db.ref('tasks/hijau/')
    }
  },
  methods: {
    deleteTask (key) {
      this.$db.ref(`tasks/hijau/${key}`).remove()
    },
    moveLeft (key, title, desc, assign) {
      this.$db.ref(`tasks/hijau/${key}`).remove()
      this.$db.ref(`tasks/kuning/`).push({
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
