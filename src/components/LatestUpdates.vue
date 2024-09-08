<script setup lang='ts'>
import { ref } from 'vue'
import ArticleItem from '@/components/ArticleItem.vue'
import { MOCK_DATA } from '@/mock-data'
import type { IArticle } from '@/interfaces/Article.interface'

const articles = ref<IArticle[]>((window as any).LATEST_ARTICLES || MOCK_DATA);
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
<div class="latest-updates">
  <h2 class="title">Latest Updates</h2>
  <div class="latest-updates-content">
    <div class="link-area" v-if="articles.length">
      <ul>
        <ArticleItem
          v-for="article in articles"
          :ref="article.url"
          :article="article"/>
      </ul>
    </div>
    <div v-else>Any updates</div>
  </div>

</div>
</template>

<style scoped>
.latest-updates {
  width: 100%;
  max-width: 500px;
  color: black;
}

.latest-updates-content {
  border: 1px solid grey;
  padding: 16px;
  box-sizing: border-box;
}

.title {
  text-align: center;
}
</style>
