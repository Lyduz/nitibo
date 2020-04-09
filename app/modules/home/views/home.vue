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
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { AuthRepository } from '@/modules/auth/repository'

const STORE_SOCIAL = namespace('social')
const STORE_CHART = namespace('chart')

@Component
export default class Home extends Vue {
  $navigator!: {
    navigate: (route: string) => void
  }

  // social store
  @STORE_SOCIAL.State('title') social_title!: string
  @STORE_SOCIAL.Action('setTitle') social_set_title!: (payload: string) => void

  // chart store
  @STORE_CHART.Action('setTitle') chart_set_title!: (payload: string) => void

  /**
   * Navigate to view.
   *
   * @param   {string}  route
   *
   * @return
   */
  goTo(route: string): void {
    // store in state
    this.social_set_title('Social Page')

    this.$navigator.navigate(`/${route}`)
  }

  mounted(): void {
    // get and print users
    AuthRepository.getUsers()
      .then((data) => {
        console.log('DATA RESPONSE', data)
      })
      .catch((error) => {
        console.log('RESPONSE ERROR', error)
      })

    this.chart_set_title('Chart Page')
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
.button {
  font-size: 25px;
  width: 80%;
  background-color: #03dac5;
  color: #000;
}
</style>
