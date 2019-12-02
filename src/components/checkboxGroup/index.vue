<template>
  <div class="tn-checkbox-group">
    <ul>
      <li v-for="opt in options" :key="opt.value">
        <tn-checkbox
          :label="opt.value"
          v-model="model"
          @change="handlerChange"
          :disabled="opt.disabled">
          {{opt.label}}
        </tn-checkbox>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tn-checkbox-group',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    model: {
      get () {
        return this.value ? this.value : this.checkedList
      },
      set (val) {
        this.$emit('input', val)
        this.checkedList = val
      }
    }
  },
  data () {
    return {
      checkedList: []
    }
  },
  methods: {
    handlerChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>
<style lang="less" scoped>
.tn-checkbox-group{}
</style>
