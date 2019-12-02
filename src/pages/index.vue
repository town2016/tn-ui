<template>
<div class="tn-page">
  <ul>
    <li v-for="item in componentList" :key="item.name">
      <tn-cell :link="item.link" :value="item.name">{{item.name}}</tn-cell>
    </li>
  </ul>
</div>
</template>
<script>
import { getComponents } from './config'
export default {
  name: 'index',
  data () {
    return {
      componentList: []
    }
  },
  created () {
    this.getAllComponents()
  },
  methods: {
    /**
     * 获取文件夹名
     */
    getAllComponents () {
      var components = Object.values(getComponents())
      this.componentList = components.map(e => e.name && {name: e.name.substr(3)})
      this.componentList = this.componentList.map(e => { return {...e, link: `/document/${e.name}`} })
    },
    clickHandler () {
      this.$Toast({
        message: '<p style="color: red">这是自定义事件</p>'
      })
    }
  }
}
</script>
