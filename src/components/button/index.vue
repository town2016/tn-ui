<template>
  <button
    class="tn-button"
    v-bind="$attrs"
    :disabled="disabled"
    :class="[
      `tn-button_${type}`,
      `tn-button_${size}`,
      {
        'tn-button_disabled': disabled || loading,
        'tn-button_block': size === 'large'
      }
    ]"
    @click="handlerClick">
    <i class="tn-icon rotate" :class="{'icon-loading': loading}"></i> <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'tn-button',
  props: {
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default',
      validator: (val) => {
        return [
          'primary',
          'default',
          'text'
        ].indexOf(val) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: (val) => {
        return [
          'large',
          'normal',
          'small'
        ].indexOf(val) > -1
      }
    }
  },
  methods: {
    handlerClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/mixin.less');
.tn-button{
  display: inline-block;
  vertical-align: middle;
  &.tn-button_block{
    display: block;
  }
  &:hover{
    .opacity(0.8);
  }
  font-size: 14px;
  .border-radius(4px);
  &.tn-button_primary{
    background-color: @mainColor;
    color: #fff;
  }
  &.tn-button_default{
    background-color: #fff;
    color: #666;
    border: 1px solid @borderColor;
  }
  &.tn-button_text{
    border: none;
    color: @mainColor;
  }
  &.tn-button_large{
    padding: 10px 16px;
    font-size: 16px;
    width: 100%;
  }
  &.tn-button_normal{
    padding: 8px 14px;
  }
  &.tn-button_small{
    font-size: 12px;
    padding: 4px 10px;
  }
  &.tn-button_disabled{
    .opacity(0.5);
    cursor: not-allowed;
  }
  .icon-loading{
    vertical-align: -1px;
  }
}
@keyframes rotated {
  from {
    .transform(rotate3d(0, 0, 1, 0deg))
  }
  to {
    .transform(rotate3d(0, 0, 1, 360deg))
  }
}
@-webkit-keyframes rotated {
  from {
    .transform(rotate3d(0, 0, 1, 0deg))
  }
  to {
    .transform(rotate3d(0, 0, 1, 360deg))
  }
}
.rotate {
  .animation(rotated 1.5s linear infinite)
}
</style>
