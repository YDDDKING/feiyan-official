<template>
  <!-- banner组件 -->
  <div class="banner">
    <v-carousel
      v-model="type"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        class="carouselImg"
        v-for="(item, i) in bannerList"
        :key="i"
        :src="item.src"
      >
      <!-- <img :src="item.bannerUrl" > -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 0,
      bannerList: [
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/83a63373edc34ea9afff1daadd491a87.jpg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/0922279909af4693b686ee28488338f8.jpg',
        }
      ]
    }
  },
  methods: {
    // jump (item) {
    //   if (item.jumpUrl) {
    //     window.open(item.jumpUrl)
    //   }
    // }
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

<style lang="sass" scoped>
.banner ::v-deep .v-window .v-window__container,.v-item-group,.theme--dark .v-window-item .v-responsive .v-responsive__sizer .v-image__image--cover
  border-radius: 20px

</style>
