<template>
  <Page>
    <ActionBar>
      <Label text="Lyduz" class="title" />
    </ActionBar>

    <StackLayout
      orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Button class="button" @tap="goTo('social')">Social Page</Button>
      <Button class="button" @tap="goTo('chart')">Chart Page</Button>
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

  goTo(route: string): void {
    //store in state
    this.actionSetLoggedUsername("I am Karl Anthony Baluyot");
    // @ts-ignore
    this.$navigator.navigate(`/${route}`)
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #03DAC5;
  color: #000000;
}
.title{
  font-size: 20%;
}
.button{
    font-size: 25px; 
    width: 80%; 
    background-color: #03DAC5;
    color: #000
}
</style>
