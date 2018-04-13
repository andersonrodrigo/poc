<template>
  <q-page padding>
   <div>
     {{noticia.titulo}}  <small>{{noticia.data}}</small>
     </div>
      <div v-html="noticia.conteudo">
      
      </div>
      <div>{{noticia.tags}}</div>
  </q-page>
</template>

<script>
export default {
  name: 'AbreNoticia',
  data () {
    return {
      noticia: {}
    }
  },
  mounted () {
    let me = this
    
    this.$axios.post(process.env.API + '/noticias/getNoticia',{id: me.$route.params.id} )
      .then((response) => {
        me.noticia = response.data
        console.log(me.noticia)
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }
}
</script>

<style>
</style>
