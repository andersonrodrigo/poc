<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Prova de Conceito
        
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <!--q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
             </q-list-->

              <q-card >
    
  <q-card-title>
   Noticias Cadastradas
  </q-card-title>

  <q-card-separator />

  <q-list v-for="item in listaNoticias" v-bind:key="item.id">
    <q-collapsible icon="explore" :label="item.titulo" @click="abreNoticia(item)">
      <div @click="abreNoticia(item)">
        {{item.tags}}
        </div>
    </q-collapsible>
   
   
  </q-list>
</q-card>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      listaNoticias: []
    }
  },
  methods: {
    openURL,
    abreNoticia (item) {
      this.$router.push({ path: '/abreNoticia/' + item.id + '/' + new Date().getTime()})
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
