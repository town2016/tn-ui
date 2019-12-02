<template>
  <div class="tn-doc">
    <tn-nav title="按钮"></tn-nav>
    <!-- <VueMarkdown :source="md"></VueMarkdown> -->
    <h5>tn-button 类型：type</h5>
    <p>type: default, priamry, text</p>
    <tn-button type="primary">primary</tn-button>
    <tn-button type="default">default</tn-button>
    <tn-button type="text">text</tn-button>
    <h5>tn-button 尺寸：size</h5>
    <p>size: large, normal, small</p>
    <tn-button type="primary" size="large">large</tn-button>
    <br>
    <tn-button type="default" size="normal">normal</tn-button>
    <tn-button type="text" size="small">small</tn-button>
    <h5>tn-button 禁用：disabled</h5>
    <tn-button disabled>禁用按钮</tn-button>
    <h5>tn-button loading：true</h5>
    <tn-button :loading="true" type="primary">带loading按钮</tn-button>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'tn-button-doc',
  components: {
    VueMarkdown
  },
  data () {
    return {
      md: null
    }
  },
  created () {
    this.md = require('./button.md')
  }
}
</script>
