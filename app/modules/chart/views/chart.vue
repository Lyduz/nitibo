<!--This page is using the layout components of nitibo @/layout/default.vue-->
<template>
  <Default :title="chart_get_title">
    <Label :text="chart_get_title" class="header" />
  </Default>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Default } from '@/layout'

const STORE_CHART = namespace('chart')

@Component({
  components: {
    Default,
  },
})
export default class Chart extends Vue {
  @STORE_CHART.Getter('getTitle') chart_get_title!: string

  mounted(): void {
    console.log(`Mounted: ${this.chart_get_title}`)
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #03dac5;
  color: #000000;
}
.title {
  font-size: 20%;
}
.header {
  font-size: 35%;
}
</style>
