<template>
  <!-- banner组件 -->
  <div class="banner">
    <v-carousel
      v-model="type"
      hide-delimiter-background
      show-arrows-on-hover
      cycle
    >
      <v-carousel-item
        class="carouselImg"
        v-for="(item, i) in bannerList"
        :key="i"
        nuxt
        :src="item.bannerUrl"
        @click="jump(item)"
      >
      <img :src="item.bannerUrl" >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      type: 0
    }
  },
  methods: {
    jump (item) {
      if (item.jumpUrl) {
        window.open(item.jumpUrl)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width: 1200px;
    height: 500px;
  }
  .carouselImg {
    cursor: pointer;
  }
</style>
