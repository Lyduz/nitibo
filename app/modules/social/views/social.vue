<!--This page is using the layout components of nitibo @/layout/default.vue-->
<template>
  <Default :title="social_get_title">
    <Label :text="social_get_title" class="header" />
    <Label text="generated via store vuex" />
  </Default>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { SocialRepository } from '@/modules/social/repository'
import { Default } from '@/layout'

const STORE_SOCIAL = namespace('social')

@Component({
  components: {
    Default,
  },
})
export default class Social extends Vue {
  // getter
  @STORE_SOCIAL.Getter('getTitle') social_get_title!: string

  mounted(): void {
    // GET https://jsonplaceholder.typicode.com/comments
    SocialRepository.getComments()
      .then((data) => {
        console.log('ALL COMMENTS', data)
      })
      .catch((error) => {
        console.log('RESPONSE ERROR', error)
      })

    // GET https://jsonplaceholder.typicode.com/comments?postId=1
    SocialRepository.getCommentsByPostID(1)
      .then((data) => {
        console.log('POST ID 1 COMMENTS', data)
      })
      .catch((error) => {
        console.log('RESPONSE ERROR', error)
      })

    // POST https://jsonplaceholder.typicode.com/posts
    SocialRepository.createPost({
      title: 'Nitibo',
      body: 'A Nativescript-Vue Typescript Template',
      userId: 1,
    })
      .then((statusCode) => {
        if (statusCode === 201) {
          console.log('SUCCESSFULLY POSTED')
        }
      })
      .catch((error) => {
        console.log('RESPONSE ERROR', error)
      })
  }
}
</script>

<style scoped>
.header {
  font-size: 35%;
}
</style>
