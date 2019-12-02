<template>
  <div class="tn-doc">
    <tn-nav title="复选框"></tn-nav>
    <h5>checkbox基础用法</h5>
    <tn-checkbox label="复选框" v-model="checked1" @change="changeHandler"></tn-checkbox>
    <h5>checkbox 禁用状态</h5>
    <tn-checkbox label="复选框" disabled>禁用复选框</tn-checkbox>
    <h5>checkbox 复选框组</h5>
    <tn-checkbox-group :options="options" v-model="opts"></tn-checkbox-group>
    <tn-checkbox-group :options="options2" v-model="opts2"></tn-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'tn-checkbox-doc',
  data () {
    return {
      checked1: true,
      opts: ['basketball'],
      opts2: ['football2'],
      options: [
        {
          label: '篮球',
          value: 'basketball'
        }, {
          label: '足球',
          value: 'football'
        }
      ],
      options2: [
        {
          label: '篮球2',
          value: 'basketball2'
        }, {
          label: '足球2',
          value: 'football2'
        }
      ]
    }
  },
  methods: {
    changeHandler (e) {}
  }
}
</script>
