import { ActionTree } from 'vuex'
import { State } from './state'

export const Actions: ActionTree<typeof State, any> = {
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  },
}
