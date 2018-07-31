<template>
  <div class="song-list">
    <ul>
      <li
        class="item"
        @click="selectItem(song,index)"
        v-for="(song,index) in songs"
        :key="song.id"
      >
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', item, index);
    },
    getDesc(song) {
      return `${song.singer}·${song.album}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~common/sass/variable';
@import '~common/sass/mixin';

.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>
