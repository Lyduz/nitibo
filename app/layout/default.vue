<template>
  <Page>
    <!--header-->
    <ActionBar>
      <Label :text="title" class="title" />
    </ActionBar>

    <!--body-->
    <StackLayout
      orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <slot>
        <!-- page items will be rendered here -->
      </slot>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  @Prop({ default: 'Nitibo' })
  readonly title?: string
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
</style>
