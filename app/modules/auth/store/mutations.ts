import { MutationTree } from 'vuex'
import { State } from './state'

export const Mutations: MutationTree<typeof State> = {
  SET_TITLE(State, data: string) {
    State.title = data
  },
}
