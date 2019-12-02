<template>
  <div class="tn-cell" @click="clickHandler">
    <div class="cell-title"><slot></slot></div>
    <div class="cell-value">{{value}}</div>
    <i class="tn-icon icon-arrow-right" v-if="link"></i>
  </div>
</template>
<script>
export default {
  name: 'tn-cell',
  props: {
    link: {
      type: String,
      default: () => ''
    },
    value: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    clickHandler () {
      if (!this.link) return
      this.$listeners.click && this.$listeners.click()
      this.$listeners.click || this.$router.push({
        path: this.link
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/mixin.less');
.tn-cell{
  padding: 14px 10px 14px 16px;
  font-size: 14px;
  line-height: 1em;
  position: relative;
  .flex;
  .flex-align-center;
  &:after{
    display: block;
    content: '';
    height: 1px;
    background-color: @borderColor;
    position: absolute;
    top: 100%;
    left: 16px;
    right: 0;
  }
  .cell-title, .cell-value{
    .flex-1;
  }
  .cell-value{
    text-align: right;
    color: #ccc;
  }
  i.tn-icon{
    display: inline;
  }
}
</style>
