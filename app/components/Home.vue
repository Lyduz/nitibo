<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label text="NativeScript"
        style="font-size: 20%;" />
    </ActionBar>

    <StackLayout orientation="vertical"
      horizontalAlignment="center"
      verticalAlignment="center">
      <Button style="font-size: 25px; width: 80%; background-color: #dcd427;"
        @tap="onPlay">Click Me :)</Button>
    </StackLayout>

  </Page>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { mapActions } from 'vuex'

  @Component({
    methods: {
      ...mapActions('json_helper', [
        'setLoggedUsername'
      ])
    }
  })
  export default class Home extends Vue {

    //---> METHODS
    onPlay(event) {

      //store in state
      this.setLoggedUsername("I am Karl Anthony Baluyot")
      console.log('HOME', 'I GOT HERE')

      //navigate to categories
      this.$router.push({
        path: '/categories'
      })

    }

  }
</script>