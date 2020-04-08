<template>
  <Page>
    <ActionBar>
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigator.navigate('/home')"
      />
      <Label :text="social_get_title" class="title" />
    </ActionBar>

    <StackLayout
      orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Label :text="social_get_title" class="header" />
      <Label text="generated via store vuex" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const STORE_SOCIAL = namespace('social')

@Component
export default class Social extends Vue {
  // getter
  @STORE_SOCIAL.Getter('getTitle') social_get_title!: string
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
