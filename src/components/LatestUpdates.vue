<script setup lang='ts'>
import { ref } from 'vue'
import ArticleItem from '@/components/ArticleItem.vue'
import { MOCK_DATA } from '@/mock-data'
import type { IArticle } from '@/interfaces/Article.interface'
import FilterCheckbox from '@/components/FilterCheckbox.vue'
import { CheckboxEnum } from '@/enums/filter-checkbox.enum'


type FilterTypes = {
  [key: string]: boolean;
};

const articles = ref<IArticle[]>((window as any).LATEST_ARTICLES || MOCK_DATA);
Object.defineProperty(window, 'LATEST_ARTICLES', {
  get(): IArticle[] {
    return articles.value;
  },
  set(newValue: IArticle[]) {
    articles.value = newValue;
  }
});

const filters = ref<FilterTypes>({
  news: true,
  essay: true
});

const checkboxes = [
  { label: CheckboxEnum.NEWS, key: 'news' },
  { label: CheckboxEnum.ESSAYS, key: 'essay' },
];

const updateValue = (value: boolean, typeOfFilter: string) => {
  if (typeOfFilter in filters.value) {
    filters.value[typeOfFilter] = value;
  }
}
</script>

<template>
<div class="latest-updates">
  <h2 class="title">Latest Updates</h2>
  <div class="latest-updates-content" v-if="articles.length">
    <div class="filter-area">
      <FilterCheckbox
        v-for="(checkbox, index) in checkboxes"
        :key="index"
        :label="checkbox.label"
        :value="filters[checkbox.key]"
        @update="updateValue($event, checkbox.key)"
      />
    </div>
    <div class="link-area">
      <ul>
        <ArticleItem
          v-for="article in articles"
          :key="article.url"
          :article="article"/>
      </ul>
    </div>
  </div>
  <div v-else class="latest-updates-content">Any updates</div>
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
