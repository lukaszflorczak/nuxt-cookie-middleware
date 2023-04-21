<template>
  <h1>Dashboard</h1>

  <pre>{{ cookie }}</pre>
</template>

<script lang="ts" setup>
console.log('Dashboard setup');
const cookie = useCookie('cookie', { default: () => 1 });
</script>
