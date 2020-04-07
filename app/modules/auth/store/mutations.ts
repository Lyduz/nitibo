import { MutationTree } from 'vuex'
import state from './state'

const Mutations: MutationTree<typeof state> = {
  SET_TITLE(state, data: string) {
    state.title = data
  },
}

export default Mutations
