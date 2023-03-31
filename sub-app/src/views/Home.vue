<template>
  <div class="home">
    <HelloWorld/>
    <button @click="$router.push('/sub-vue/test')">test</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
