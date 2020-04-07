import { ActionTree } from 'vuex'
import state from './state'

const Actions: ActionTree<typeof state, any> = {
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  },
}

export default Actions
