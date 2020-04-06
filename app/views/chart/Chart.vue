<template>
  <Page>
    <ActionBar>
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigator.navigate('/home')"
      />
      <Label :text="title" class="title"/>
    </ActionBar>

    <StackLayout
      orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
        <Label :text="title" class="header" /> 
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Chart extends Vue {
    // data
    title = "Chart Page";
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
.header{
  font-size: 35%;
}
</style>
