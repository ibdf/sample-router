<template>
  <div>
    My app view 1
    <label>
      <input
        v-model="searchData"
        type="search"
        value=""
        placeholder="search"
      ><button @click.prevent="search">
        Search
      </button>
    </label>
    <div
      v-if="searchError !== ''"
      class="error"
    >
      {{ searchError }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchData: '',
      searchError: '',
    };
  },
  methods: {
    search () {
      if (this.searchData !== '') {
        this.$router.push({ name: "app-1-view-2", query: { address: this.searchData }});
      } else {
        this.searchError = 'Oops... something went wrong!';
      }
    },
  },
};
</script>
<style scoped>
  label {
    display: block;
  }
</style>