<template>
  <div class="tn-doc">
    <tn-nav title="输入框 【input】">
      <span>记录</span>
    </tn-nav>
    <h5>input 基础用法</h5>
    <tn-input disabled/><br>
    <h5>input 【clearable】可清除</h5>
    <tn-input v-model="inputValue1" clearable/>
    <br>
    <h5>input 【prepend】前置元素</h5>
    <p>&lt;span slot="prepend"&gt;http://&lt;/span&gt;</p>
    <tn-input clearable>
       <span slot="prepend">http://</span>
    </tn-input>
    <br>
    <h5>input 【append】前置元素 </h5>
    <p>&lt;span slot="append"&gt;.com&lt;/span&gt;</p>
    <tn-input>
       <span slot="append">.com</span>
    </tn-input>
    <br>
    <h5>input 【prefix】前置icon</h5>
    <tn-input prefix="icon-camera"/>
    <br>
    <h5>input 【suffix】后置icon</h5>
    <tn-input suffix="icon-clock"/>
    <br/>
    <tn-button type="primary"  size="large" :loading="isSubmit" @click="onSubmit">提交</tn-button>
  </div>
</template>
<script>
export default {
  name: 'tn-input-doc',
  data () {
    return {
      inputValue1: '输入内容可清除',
      inputValue2: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit () {
      this.isSubmit = true
      setTimeout(() => {
        this.$Toast({
          message: '提交失败',
          duration: 1000
        })
        this.isSubmit = false
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
