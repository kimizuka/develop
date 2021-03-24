<template>
  <div class="index">
    <index-template
      :blogs="blogs"
      :mocks="mocks"
    />
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { parse } from 'fast-xml-parser';
  import { Component, Vue } from 'nuxt-property-decorator';
  import { Blog, Mock } from '~/types/index.d.ts';

  @Component({
    components: {},
    async asyncData({ params }) {
      const [ blog, mock ] = await axios.all([
        axios.get('https://blog.kimizuka.org/rss'),
        axios.get('https://develop.kimizuka.org/mocks.json')
      ]);
      const blogs = parse(blog.data).rss.channel.item;
      const { mocks } = mock.data;

      return { blogs, mocks };
    }
  })
  export default class IndexPage extends Vue {
    blogs?: Blog[] | [] = [];
    mocks?: Mock[] | [] = [];
  }

</script>

<style>
</style>
