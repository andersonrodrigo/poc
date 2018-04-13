<template>
  <q-page padding>
    <q-input v-model="noticia.titulo" float-label="Titulo"/>
    <q-datetime v-model="noticia.data" type="date" float-label="Data" format='DD/MM/YYYY'/>
    <!--q-input v-model="conteudo" float-label="Conteudo"
     type="textarea"
    :max-height="100"
    rows="7"/-->


      <vue-editor v-model="noticia.conteudo"></vue-editor>
    
    <q-input v-model="noticia.tags" float-label="Tags"/>

      <q-btn label="Cancelar" @click="cancelar()"/>
      <q-btn label="Salvar" @click="salvar()"/>
  </q-page>
</template>

<script>
import Ckeditor from 'vue-ckeditor2'
 import { VueEditor } from 'vue2-editor'
export default {
   components: { Ckeditor, VueEditor},
   name: 'Noticias',
   data () {
    return {
      noticia: {
        titulo: '',
        data: new Date(),
        conteudo: '',
        tags: '',
      },
      config: {
        toolbar: [
          [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ]
        ],
        height: 300
      }
    }
  },
  methods: {
    salvar () {
       this.$axios.post(process.env.API + '/noticias/salvar',this.noticia)
      .then((response) => {
        this.$q.notify(response.data)
        this.$router.push({ path: '' })
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading success',
          icon: 'report_problem'
        })
      })
      this.$router.push({ path: '/' })
    },
    cancelar () {
      this.$router.push({ path: '/' })
    },
    onBlur (editor) {
      console.log(editor)
    },
    onFocus (editor) {
      console.log(editor)
    }
  }
}
</script>

<style>
</style>
