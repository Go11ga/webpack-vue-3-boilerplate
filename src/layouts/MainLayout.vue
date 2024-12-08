<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue';

const toast = inject('toast');

onMounted(() => {
  toast.success('Toast main-layout');
});
</script>
