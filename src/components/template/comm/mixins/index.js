const mixin = {
  mounted() {
    Object.keys(this.data).map(item => {
      if (this.$attrs[item] !== undefined) {
        this.data[item] = this.$attrs[item]
      }
    })
  }
}

export default mixin