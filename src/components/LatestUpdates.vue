<script setup lang='ts'>
import { ref } from 'vue'
import type IArticle from '@/interfaces/Article.interface'

const articles = ref<IArticle[]>((window as any).LATEST_ARTICLES || []);
Object.defineProperty(window, 'LATEST_ARTICLES', {
  get(): IArticle[] {
    return articles.value;
  },
  set(newValue: IArticle[]) {
    articles.value = newValue;
  }
});
</script>

<template>
<div>
  <h2>Latest Updates</h2>
  <div class="latest-updates">

  </div>
</div>
</template>

<style scoped>
.latest-updates {
  width: 100%;
  max-width: 500px;
  border: 1px solid grey;
  padding: 16px;
  box-sizing: border-box;
  color: black;
}
</style>
