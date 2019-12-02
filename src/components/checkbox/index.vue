<template>
  <label class="tn-checkbox" :class="{'tn-checkbox_disabled': disabled}">
    <span class="tn-checkbox_inner" :class="{
      'tn-checkbox_checked': isChecked,
    }">
      <i class="tn-icon icon-seleted"></i>
      <input
        v-model="model"
        type="checkbox"
        :value="label"
        @change="handlerChange"
        :name='name'
        :disabled="disabled"/>
    </span>
    <span class="tn-checkbox_label"><slot>{{label}}</slot></span>
  </label>
</template>
<script>
export default {
  name: 'tn-checkbox',
  props: {
    label: {},
    value: {},
    name: String,
    disabled: Boolean,
    checked: Boolean
  },
  data () {
    return {
      selfModel: false
    }
  },
  created () {
    console.log(this.value)
  },
  computed: {
    model: {
      get () {
        return this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        this.$emit('input', val)
        this.selfModel = val
      }
    },
    isChecked () {
      if (Array.isArray(this.model)) {
        return this.model.includes(this.label)
      } else {
        return this.model
      }
    }
  },
  methods: {
    handlerChange (e) {
      this.$emit('change', this.selfModel)
    }
  }
}
</script>
<style lang="less">
@import url('../../assets/less/mixin.less');
.tn-checkbox{
  display: inline-table;
  line-height: 1;
  font-size: 0;
  .tn-checkbox_label{
    margin-left: 5px;
    font-size: 14px;
    vertical-align: middle;
  }
  .tn-checkbox_inner{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    overflow: hidden;
    .border-radius(50%);
    border: 1px solid @borderColor;
    background-color: #fff;
    input[type='checkbox']{
      width: 14px;
      height: 14px;
      line-height: 1;
      .opacity(0);
    }
    i{
      display: none;
      position:absolute;
      top:0px;
      left: 0px;
      width: 100%;
      height: 100%;
      text-align: center;
      color: #fff;
      font-size: 14px;
      line-height: 14px;
    }
    &.tn-checkbox_checked{
      background-color: @mainColor;
      border-color: @mainColor;
      i{
        display: inline-block;
      }
    }
  }
  &.tn-checkbox_disabled{
    .opacity(0.5);
    .userSelect(none);
    cursor: not-allowed;
  }
}
</style>
