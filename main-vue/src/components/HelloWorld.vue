<template>
  <div>
    <div class="sub-vue">
      main-vue
    </div>
    <button @click="$router.push('/sub-vue/test')">跳转子应用</button>
    <button @click="$router.push('/sub-app/test')">跳转app子应用</button>
    <button @click="$router.push('/vue')">跳转vue</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sub-vue {
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 20px;
  background-color: aquamarine;
  width: 120px;
  line-height: 40px;
}
</style>
