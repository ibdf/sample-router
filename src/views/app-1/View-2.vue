<template>
  <div>
    <h1>My search results</h1>
    - look up url address and<br>
    - load search results from store
    <div>
      <br>
      <h3>
        Showing results for <b>{{ address }}</b>
        <ul>
          <li>
            <a
              href="#"
              @click.prevent="loadResult('result 1')"
            >result 1</a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="loadResult('result 2')"
            >result 2</a>
          </li>
        </ul>
      </h3>
      <router-view :key="$route.fullPath" />
      <div
        v-if="error"
        class="error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      error: null,
      address: '',
    };
  },
  mounted () {
    if (!this.$route.query['address']) {
      this.error = "no results found";
    } else {
      this.address = this.$route.query['address'];
    }
  },
  methods: {
    loadResult(resultId) {
      this.$router.push({ name: 'app-1-view-2-children', params: { resultId: resultId }});
    },
  },
};
</script>