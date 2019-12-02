<template>
  <div class="tn-navigator">
    <div class="left" @click="goBack">
      <i class="tn-icon icon-arrow-lift"></i>
    </div>
    <div class="title">{{title}}</div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tn-nav',
  props: {
    title: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    goBack () {
      this.$listeners.back ? this.$listeners.back() : this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/mixin.less');
.tn-navigator{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  z-index: 1000000;
  background-color: #fff;
  display: table;
  .boxShadow(0 0 3px rgba(0,0,0,0.3));
  .left{
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    width: 30px;
    text-align: center;
    i{
      font-size: 26px;
      font-weight: 400;
    }
  }
  .title{
    display: table-cell;
    text-align: center;
    font-size: 16px;
    vertical-align: middle;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .right{
    display: table-cell;
    width: 1px;
    padding: 0 10px;
    vertical-align: middle;
    height: 100%;
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>
