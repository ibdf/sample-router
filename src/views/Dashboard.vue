<template>
  <div>
    <h1>Dashboard: lists apps</h1>
    <router-link :to="{ name: 'app-1-view-1' }">
      App 1
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
