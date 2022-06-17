<template>
  <div>
    
    <header>
      <router-link to='/other'>其他</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header {
  height: 55px;
  background-color: #444;
}
</style>