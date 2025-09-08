<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import switchLayout from './switchlayout.vue'
import layout from './Layout.vue'
</script>

<template>
  <layout>
    <switchLayout />
    <DefaultTheme.Layout >
        
    </DefaultTheme.Layout>
  </layout>
</template>
