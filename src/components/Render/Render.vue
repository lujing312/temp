
<script>
export default {
  name: 'Render',
  props: {
    code: {
      type: [Number, String],
      default: 'One'
    },
    attr: {
      type: [Number, String, Object, Array],
      default: () => {}
    }
  },
  methods: {
  },
  render(createElement) {
    return createElement(
      'temp-' + this.code,
      {
        attrs: this.attr,
        ref: 'model'
      }
    )
  }
}
</script>

