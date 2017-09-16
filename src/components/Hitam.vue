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
        <a href="#!">This is a link</a>
        <a href="#!">This is a link</a>
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
  mounted () {
    console.log(this.hitam)
  }
}
</script>

<style lang="css">
</style>
