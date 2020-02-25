<template>
  <FlexboxLayout flexDirection="row" justifyContent="center">
    <Label textWrap="true" class="title-ui">
      {{ titleName }}
    </Label>
  </FlexboxLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  @Prop() private titleName?: string;
}
</script>

<style scoped>
.title-ui {
  background-color: #dcd427;
  width: 100%;
  font-size: 15%;
  font-weight: bold;
}
</style>
