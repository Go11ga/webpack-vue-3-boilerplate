<template>
  <div class="error">
    <h2 class="error__title">404</h2>

    <div class="error__link-wrapper">
      <button
        class="error__link"
        @click="onClick"
      >
        На главную
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useHead } from '@unhead/vue';
import { PAGE_TEST } from '@/constants/router';

const router = useRouter();

useHead({
  title: 'Страница не найдена',
});

const onClick = () => {
  router.push({ name: PAGE_TEST });
};
</script>
