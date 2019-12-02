<template>
  <div class="tn-input">
    <div
      class="tn-input_content"
      :class="{
        'tn-input_prepend': $slots.prepend,
        'tn-input_append': $slots.append,
        'tn-input_border': border
      }">
      <!-- 前置内容 -->
      <div v-if="$slots.prepend" class="tn-input_prepend-inner">
        <slot name="prepend"></slot>
      </div>
      <div
        class="tn-input_control"
        :class="{
          'tn-input_prefix': prefix,
          'tn-input_suffix': suffix || clearable,
          'tn-input_clearable': clearable
        }">
        <div class="tn-input_control-inner">
          <!-- 前置图标 -->
          <span
            class="tn-input_prefix-inner"
            v-if="prefix">
            <i class="tn-icon" :class="prefix"></i>
          </span>
          <input
            v-bind="$attrs"
            v-model="currentValue"
            @input="inputHandler"
            @focus="focusHandler"
            @blur="blurHandler"
            type="text"
            @change="changeHandler"/>
          <span
            class="tn-input_clear-inner"
            v-if="clearable && currentValue.length > 0"
            @click="clearHandler">
            <i class="tn-icon" :class="{'icon-close': clearable}"></i>
          </span>
          <!-- 后置图标 -->
          <span
            class="tn-input_suffix-inner"
            v-if="suffix">
            <i class="tn-icon" :class="{[suffix]: true}"></i>
          </span>
        </div>
      </div>
      <!-- 后置内容 -->
      <div v-if="$slots.append" class="tn-input_append-inner">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tn-input',
  props: {
    prefix: {
      type: String,
      default: () => ''
    },
    suffix: {
      type: String,
      default: () => ''
    },
    clearable: {
      type: Boolean,
      default: () => false
    },
    value: {
      default: () => ''
    },
    border: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  created () {
    this.currentValue = this.value
  },
  methods: {
    /**
     * 清空数据
     */
    clearHandler () {
      if (!this.clearable) return
      this.currentValue = ''
      this.inputHandler()
    },
    /**
     * 获取焦点事件
     */
    focusHandler (e) {
      this.$emit('focus', this.currentValue)
    },
    /**
     * 失去焦点事件
     */
    blurHandler (e) {
      this.$emit('blur', this.currentValue)
    },
    /**
     * change事件
     */
    changeHandler (e) {
      this.$emit('change', this.currentValue)
    },
    /**
     * 输入事件
     */
    inputHandler (e) {
      this.$emit('input', this.currentValue)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/less/mixin.less');
.tn-input{
  width: 100%;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  .tn-input_content{
    width: 100%;
    display: inline-table;
    &.tn-input_border{
      border: 1px solid @borderColor;
    }
    &.tn-input_prepend, &.tn-input_append{
      .tn-input_prepend-inner, .tn-input_append-inner{
        text-align: center;
        padding: 0 10px;
        width: 1px;
        display: table-cell;
        vertical-align: middle;
        color: #909399;
        background-color: #f5f7fa;
      }
      .tn-input_prepend-inner{
        .border-radius(4px 0 0 4px);
        border-right: 1px solid @borderColor;
      }
      .tn-input_append-inner{
        .border-radius(0 4px 4px 0);
        border-left: 1px solid @borderColor;
      }
    }
    .border-radius(4px);
    .tn-input_control{
      display: table-cell;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      .tn-input_control-inner{
        width: 100%;
        display: inline-table;
        input{
          width: 100%;
          display: table-cell;
          font-size: 14px;
          color: #606266;
        }
      }
    }
    .tn-input_control.tn-input_prefix, .tn-input_control.tn-input_suffix, .tn-input_control.tn-input_clearable{
      position: relative;
      span{
        display: table-cell;
        font-size: 14px;
        vertical-align: middle;
        width: 1px;
        padding: 0 5px;
        i{
          line-height: 1;
          vertical-align: middle;
          color: #c0c4cc;
        }
      }
    }
  }
}
</style>
