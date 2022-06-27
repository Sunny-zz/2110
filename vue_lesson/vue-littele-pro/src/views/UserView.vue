<template>
  <div>
    用户个人中心
  </div>
</template>

<script>
import { getUserDetail } from '../http/api'
export default {
  props: ['loginname'],
  watch: {
    loginname: {
      async handler(value){
        const res = await getUserDetail({loginname: value})
        this.userDetail = res.data
      },
      immediate: true
    }
  },
  data() {
    return {
      userDetail: null
    }
  },
}
</script>

<style>

</style>