<template>
  <div :class="data.isPc ?'':'isMobile'">
    <div class="pc-show">
      PC模板
    </div>
    <div class="mobile-show">
      <div class="test">h5模板{{data.tempData.title}}</div>
    </div>
  </div>
</template>
<script>
import mixin from './comm/mixins/index'
export default {
  mixins: [mixin],
  data() {
    return {
      data: {
        isPc: true,
        tempData: {}
      }
    }
  },
  mounted() {
    console.log(this.data, '======-----')
  }
}
</script>
<style lang="scss" scoped>
  .mobile-show {
    display: none;
  }
  .isMobile{
    .pc-show {
      display: none;
    }
    .mobile-show {
      display: block;
      font-size: 0.18rem;
    }
  }
</style>