<script setup lang='ts'>

import type ICheckbox from '@/interfaces/checkbox.interface'

const props = defineProps<ICheckbox>();

defineEmits<{
  (e: 'update', value: boolean): void
}>();

const { label, value } = props;
</script>

<template>
  <label class="filter-checkbox">
    <input type="checkbox" :checked="value" @change="$emit('update', ($event.target as HTMLInputElement).checked)"/>
    {{ label }}
  </label>
</template>

<style scoped>
.filter-checkbox {
  display: inline-block;
  margin-right: 10px;
}
</style>
