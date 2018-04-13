<template>
  <q-page padding>
   
   <q-card >
    
  <q-card-title>
   Noticias Cadastradas
  </q-card-title>

  <q-card-separator />

  <q-list v-for="item in listaNoticias" v-bind:key="item.id">
    <q-collapsible icon="explore" :label="item.titulo">
      <div v-html="item.conteudo">
      
      </div>
    </q-collapsible>
   
   
  </q-list>
</q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ListarNoticias',
  data () {
    return {
      listaNoticias: []
    }
  },
  mounted () {
    let me = this
    this.$axios.get(process.env.API + '/noticias/all')
      .then((response) => {
        me.listaNoticias = response.data
        console.log(me.listaNoticias)
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
