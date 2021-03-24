<template>
  <div class="index-template">
    <header>
      <h1>
        <a hreef="/">develop.kimizuka.org</a>
      </h1>
    </header>
    <main>
      <blog-list :items="blogs" />
      <mock-list :items="mocks" />
    </main>
    <footer>
      <p>&copy; kimizuka</p>
    </footer>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Component, Prop, Vue } from 'nuxt-property-decorator';
  import { Blog, Mock } from '~/types/index.d.ts';

  @Component({})
  export default class IndexTemplate extends Vue {
    @Prop({
      type: Array,
      default: () => []
    })
    blogs: Blog[];

    @Prop({
      type: Array,
      default: () => []
    })
    mocks: Mock[];
  }
</script>

<style lang="scss" scoped>
  header, footer {
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: flex-end;
    height: 50px;
  }
</style>
