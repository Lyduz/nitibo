import { ActionTree } from 'vuex'
import { State } from './state'

export const Actions: ActionTree<typeof State, () => void> = {
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  },
}
