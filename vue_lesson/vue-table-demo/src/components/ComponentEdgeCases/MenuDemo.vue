<template>
  <div>
    <ul>
      <li v-for="item in menuList" :key="item.id">
        <span>
          {{ item.name }}
        </span>
        <MenuDemo v-if="item.children && item.children.length" :menuList='item.children' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuDemo",
  props: ["menuList"],
};
</script>

<style>
</style>