<template>
  <div class="default-layout">
    A layout view that applies common wrapping elements to every child route of App 1
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .default-layout {
    background-color: #FFF8DC;
    color: #444;
    height: 100%;
  }
  .view {
    padding: 2rem 1rem;
  }
</style>