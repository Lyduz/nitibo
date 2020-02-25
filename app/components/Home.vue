<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label text="Nitibo" style="font-size: 20%;" />
    </ActionBar>

    <StackLayout
      orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Button
        style="font-size: 25px; width: 80%; background-color: #dcd427;"
        @tap="onPlay"
        >Click Me :)</Button
      >
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";

const JSON_HELPER = namespace("json_helper");

@Component
export default class Home extends Vue {
  @JSON_HELPER.Action("setLoggedUsername") actionSetLoggedUsername?: any;

  onPlay(event: any): void {
    //store in state
    this.actionSetLoggedUsername("I am Karl Anthony Baluyot");

    // @ts-ignore
    this.$navigator.navigate('/categories')
    
    console.log("HOME", "I GOT HERE");
  }
}
</script>
