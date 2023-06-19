<template>
  <div>
    <h1>Error Page</h1>
    <p v-if="error.statusCode === 404">Page not found.</p>
    <p v-else>Oops! Something went wrong.</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
