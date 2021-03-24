<template>
  <ol class="blog-list">
    <li
      v-for="item, i in items"
      :key="i"
    >
      <div>
        <div>
          <h2>BLOG</h2>
          <span>{{ getDateString(new Date(item.pubDate)) }}</span>
        </div>
        <p>{{ item.title }}</p>
      </div>
      <a
        :href="item.link"
        target="_blank"
      />
    </li>
  </ol>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';
  import { Blog } from '~/types/index.d.ts';

  @Component({})
  export default class BlogList extends Vue {
    @Prop({
      type: Array,
      required: true
    })
    items: Blog[];

    getDateString(date: Date) {
      return `${ date.getFullYear() }.${ date.getMonth() + 1 }.${ date.getDate() }`;
    }
  }
</script>

<style lang="scss" scoped>
  ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    flex-grow: 1;
    position: relative;
    margin: 2px;
    padding: 16px;
    border: solid 1px #717171;
    min-width: 304px; min-height: 171px;
  }

  h2 {
    display: inline-block;
    color: $red;
    font-weight: bold;
  }

  span {
    margin-left: 12px;
    font-size: 12px;
  }

  p {
    text-decoration: underline;
  }

  a {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: rgba(255, 255, 255, 0);
    transition: background .2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, .1);
    }
  }
</style>
