<script setup lang='ts'>
import { computed } from 'vue';
import type { IArticleProps } from '@/interfaces/Article.interface'

const props = defineProps<IArticleProps>();

const { article } = props;

const formattedDate = computed(() => {
  const date = new Date(article.publishDate);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
});
</script>

<template>
<li>
  <a :href="article.url" target="_blank" class="item">
    <span class="title">{{ article.title }}</span>
    <span class="date">{{ formattedDate }}</span>
  </a>
</li>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  font-size: 16px;
}
.title {
  display: inline-block;
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
  color: black;
}

.date {
  display: inline-block;
  color: grey;
}
</style>
