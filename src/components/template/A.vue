<template>
  <div :class="data.isPc ?'':'isMobile'">
    <div class="pc-show">
      PC模板A
    </div>
    <div class="mobile-show" :style="{width: data.width}" >
      <div class="test">h5模板A{{data.tempData.title}}</div>
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
        router: '',
        width: '100%',
        tempData: {},
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