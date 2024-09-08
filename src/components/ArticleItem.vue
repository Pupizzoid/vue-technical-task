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
    <span class="date">{{ article.publishDate }}</span>
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
