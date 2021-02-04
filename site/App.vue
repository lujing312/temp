<template>
  <div id="app">
    <temp-render
      :ref="'temp-' + code"
      :code="code"
      :attr="obj"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      code: 'One',
      obj: {
        isPc: false,
        tempData: {
          title: '标题',
          subTitle: '副标题',
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
  /* font-size: 14px; */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.pt48, .py48 {
  padding-top: 48px;
}
.pb48, py48 {
  padding-bottom: 48px;
}
.underline {border-bottom: 1px solid #ccc;}
</style>
