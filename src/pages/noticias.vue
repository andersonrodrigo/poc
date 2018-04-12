<template>
  <q-page padding>
    <q-input v-model="titulo" float-label="Titulo"/>
    <q-datetime v-model="data" type="date" float-label="Data" format='DD/MM/YYYY'/>
    <!--q-input v-model="conteudo" float-label="Conteudo"
     type="textarea"
    :max-height="100"
    rows="7"/-->


      <vue-editor v-model="conteudo"></vue-editor>
    
    <q-input v-model="tags" float-label="Tags"/>

      <q-btn label="Cancelar" @click="salvar()"/>
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
      titulo: '',
      data: new Date(),
      conteudo: '',
      tags: '',
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
