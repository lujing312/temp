<template>
  <div id="app">
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <temp-button>default</temp-button>
    </div>
    <div class="pt48">
      <h2>modal组件</h2>
      <p>1.基础样式</p>
      <temp-button @click="show1=true">default</temp-button>
      <temp-modal 
        @on-ok="show1=false"
        @on-cancel="show1=false"
        :isShow="show1"></temp-modal>
      <p>2.自定义内容</p>
      <temp-button @click="show2=true">自定义内容</temp-button>
      <temp-button @click="show3=true">自定义宽度</temp-button>
      <temp-modal 
        @on-ok="show2=false"
        @on-cancel="show2=false"
        :isShow="show2">
        <template>自定义文字</template>
        <template slot="modal-title">
          <p>Hello World!</p>
        </template>
        <template slot="modal-body">
          <p>test</p>
        </template>
        <template slot="modal-footer">
          <temp-button type="warning" @click="show2=false">取消</temp-button>
        </template>
      </temp-modal>
      <temp-modal 
        @on-ok="show3=false"
        @on-cancel="show3=false"
        :width="300"
        :isShow="show3"></temp-modal>
      <p>3.自定义size</p>
      <temp-button @click="showSize('small')">small</temp-button>
      <temp-button @click="showSize('medium')">medium</temp-button>
      <temp-button @click="showSize('large')">large</temp-button>
      <temp-button @click="showSize('full')">full</temp-button>
      <temp-modal 
        @on-ok="show4=false"
        @on-cancel="show4=false"
        :size="size"
        :isShow="show4"></temp-modal>
    </div>
    <temp-render
        :ref="'temp-' + code"
        :code="code"
        :attr="obj"
      />
  </div>
</template>

<script>
// import Button from '@/components/Button/Button'
// import Modal from '@/components/Modal/Modal'
export default {
  name: 'app',
  // components: {
  //   tempButton: Button,
  //   tempModal: Modal,
  // },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      size: '',
      code: 1001,
      obj: {isPc: true}
    }
  },
  methods: {
    showSize(item) {
      this.size = item
      this.show4 = true
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  /* margin-top: 60px;
  padding-bottom: 200px; */
}
=======
  margin-top: 60px;
  padding-bottom: 200px;
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
>>>>>>> 更新代码
</style>
