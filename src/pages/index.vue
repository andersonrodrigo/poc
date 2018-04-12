<template>
  <q-page class="flex flex-center">
     
      <q-btn label="Nova Noticia" @click="abreNovaNoticia()"/>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    abreNovaNoticia () {
      this.$router.push({ path: '/noticias' })
    }
  }
}
</script>
