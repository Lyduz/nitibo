import { GetterTree } from 'vuex'
import state from './state'

const Getters: GetterTree<typeof state, any> = {
  getTitle(state): string {
    return state.title
  },
}

export default Getters
