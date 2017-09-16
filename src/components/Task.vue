<template lang="html">
  <div class="row">
    <div class="col s12 m3">
      <h4>List Hitam</h4>
      <Hitam></Hitam>
    </div>
    <div class="col s12 m3">
      <h4>List Merah</h4>
      <Merah></Merah>
    </div>
    <div class="col s12 m3">
      <h4>List Kuning</h4>
      <Kuning></Kuning>
    </div>
    <div class="col s12 m3">
      <h4>List Hijau</h4>
      <Hijau></Hijau>
    </div>
  </div>
</template>

<script>
import Hitam from '@/components/Hitam'
import Merah from '@/components/Merah'
import Kuning from '@/components/Kuning'
import Hijau from '@/components/Hijau'
export default {
  components: {
    Hitam,
    Merah,
    Kuning,
    Hijau
  }
}
</script>

<style lang="css">
</style>
