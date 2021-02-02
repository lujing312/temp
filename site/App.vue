<template>
  <div id="app">
    <temp-render 
      :ref="'temp-' + code"
      :code="code"
      :attr="obj"
    />
     <temp-render 
      :ref="'temp-' + code"
      :code="code"
      :attr="hobj"
    />
  </div>
</template>

<script>
// import Button from '@/components/Button/Button'
// import Modal from '@/components/Modal/Modal'
export default {
  name: 'app',
  // components: {
  //   ywButton: Button,
  //   ywModal: Modal,
  // },
  data () {
    return {
      code: 1001,
      obj: {isPc: true},
      hobj: {isPc: false}
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
  /* margin-top: 60px;
  padding-bottom: 200px; */
}
</style>
