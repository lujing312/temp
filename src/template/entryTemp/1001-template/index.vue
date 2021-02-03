<template>
  <div :class="data.isPc ?'':'isMobile'">
    <div class="pc-show">
      PC模板
    </div>
    <div class="mobile-show">
      <div class="test">h5模板</div>
    </div>
  </div>
</template>
<script>
import mixin from '../comm/mixins/index'
export default {
  mixins: [mixin],
  data() {
    return {
      data: {
        isPc: true,
        temData: {}
      }
    }
  },
  mounted() {
    console.log(this.data, '======')
  }
}
</script>
<style lang="scss" scoped>
  .mobile-show {
    display: none;
  }
  .isMobile {
    .pc-show{
      display: none;
    }
    .mobile-show {
      display: block;
    }
  }
    
</style>