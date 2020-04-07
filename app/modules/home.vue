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
import { Getter, Action, namespace } from "vuex-class";

const STORE_SOCIAL = namespace("social");
const STORE_CHART = namespace("chart");

@Component
export default class Home extends Vue {

  // getters
  @STORE_SOCIAL.Getter("title") storeSocial_title?: any;
  // setters
  @STORE_SOCIAL.Action("setTitle") storeSocial_setTitle?: any;
  @STORE_CHART.Action("setTitle") storeChart_setTitle?: any;

  goTo(route: string): void {
    //store in state
    this.storeSocial_setTitle("Social Page");
    // @ts-ignore
    this.$navigator.navigate(`/${route}`)
  }

  mounted(){
      this.storeChart_setTitle("Chart Page");
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
