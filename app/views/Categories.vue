<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigator.navigate('/home')"
      />
      <Label text="NativeScript" style="font-size: 20%;" />
    </ActionBar>

    <StackLayout>
      <Title titleName="NativeScript-Vue-TypeScript"></Title>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, namespace } from "vuex-class";
import Title from "@/components/Selection/Title.vue";

const JSON_HELPER = namespace("json_helper");

@Component({
  components: {
    Title
  }
})
export default class Categories extends Vue {
  @JSON_HELPER.State("loggedUsername") stateLoggedUsername?: string;

  constructor() {
    super();
  }

  // FIXME: alert has issues
  // sayHello(): any {
  //   // @ts-ignore
  //   return alert(`Message: ${this.stateLoggedUsername}`).then(function() {
  //     console.log("Alert dialog closed.");
  //   });
  // }

  mounted() {
    console.log(`Message: ${this.stateLoggedUsername}`);
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.button-categories-first {
  font-size: 38px;
  width: 80%;
  background-color: #5c7829;
}
</style>
