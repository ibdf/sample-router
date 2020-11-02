<template>
  <div>
    <h3>Showing:</h3>
    {{ resultId }}
  </div>
</template>
<script>
export default {
  props: {
    resultId: {
      type: String,
      default: '',
    },
  },
};
</script>