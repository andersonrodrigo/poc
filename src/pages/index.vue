<template>
  <q-page class="flex flex-center">
     
      <q-btn label="Nova Noticia" @click="abreNovaNoticia()"/>
      <q-btn label="Listar Noticias" @click="getNoticias()"/>
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
    },
    getNoticias () {
      this.$router.push({ path: '/listarNoticias' })
    }
  }
}
</script>
