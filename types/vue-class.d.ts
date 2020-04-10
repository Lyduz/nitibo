import { Vue } from 'vue-property-decorator'

declare module 'vue-property-decorator' {
  interface Vue {
    $navigator: {
        navigate: (route: string) => void
    }
  }
}
