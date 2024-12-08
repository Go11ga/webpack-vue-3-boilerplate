<template>
  TestPage

  <TestComponent />
</template>

<script setup>
import { useHead } from '@unhead/vue';
import TestComponent from '@/components/TestComponent';

useHead({
  title: () => 'Test page',
});
</script>
