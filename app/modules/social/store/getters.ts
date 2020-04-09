import { GetterTree } from 'vuex'
import { State } from './state'

export const Getters: GetterTree<typeof State, () => any> = {
  getTitle(State): string {
    return State.title
  },
}
