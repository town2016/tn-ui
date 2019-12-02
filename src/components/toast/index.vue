<template>
<transition name="tn-toast-fade">
  <div class="tn-toast" v-show="visible" v-html="message"></div>
</transition>
</template>
<script>
export default {
  name: 'tn-toast',
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/mixin.less');
.tn-toast{
  .translate(-50%, -50%, 0);
  .border-radius(4px);
  color: #fff;
  font-size: 14px;
  background-color: rgba(0, 0, 0, .6);
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 6px 16px;
  transition: all .3s linear;
  text-align: center;
  max-width: 80%;
}
.tn-toast-fade-enter,
.tn-toast-fade-leave-active{
  opacity:0;
}
</style>
