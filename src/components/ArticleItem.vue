<script setup lang='ts'>
const props = defineProps({
  article: {type: Object, required: true }
});

const { article } = props;
</script>

<template>
<li>
  <a :href="article.url" target="_blank" class="item">
    <span class="title">{{ article.title }}</span>
    <span class="date">{{ article.date }}</span>
  </a>
</li>
</template>

<style scoped>

</style>
