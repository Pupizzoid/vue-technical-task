<script setup lang='ts'>
import { computed, ref } from 'vue';
import ArticleItem from '@/components/ArticleItem.vue';
import { MOCK_DATA } from '@/mock-data';
import type { IArticle } from '@/interfaces/article.interface';
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import { CheckboxEnum } from '@/enums/filter-checkbox.enum';
import type ILatestUpdatesProps from '@/interfaces/latest-updates.interface';
import { filterByCategory } from '@/utils/filter-by-category.utils';
import { filterByDate } from '@/utils/filter-by-date.utils';
import { sortByDate } from '@/utils/sort-by-date.utils';

const LATEST_ARTICLES = 'LATEST_ARTICLES';

type FilterTypes = {
  [key: string]: boolean;
};

const props = defineProps<ILatestUpdatesProps>();
const maxItems = props.maxItems ?? 5;

const articles = ref<IArticle[]>((window as any).LATEST_ARTICLES || MOCK_DATA);

Object.defineProperty(window, LATEST_ARTICLES, {
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

const filteredArticles = computed(() => {
  let filtered = filterByDate(articles.value, (article: IArticle) => new Date(article.publishDate), new Date(), 7);
  filtered = filterByCategory(filtered, (article: IArticle) => article.category, filters.value);
  return sortByDate(filtered, (article: IArticle) => new Date(article.publishDate)).slice(0, maxItems);
})
</script>

<template>
<div class="latest-updates">
  <h2 class="title">Latest Updates</h2>
  <div class="latest-updates-content" v-if="filteredArticles.length">
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
          v-for="article in filteredArticles"
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
