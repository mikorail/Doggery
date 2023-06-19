<template>
  <div>
    <AppHeader/>
    <Nuxt/>
    <AppFooter/>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import AppHeader from '../components/parent/AppHeader.vue';
import AppFooter from '../components/parent/AppFooter.vue';

export default {
  name: 'default',
  components : {
    AppHeader,
    AppFooter,
  }
}
</script>
