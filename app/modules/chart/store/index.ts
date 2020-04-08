import { State } from './state'
import { Getters } from './getters'
import { Mutations } from './mutations'
import { Actions } from './actions'

export default {
  namespaced: true,
  state: State,
  getters: Getters,
  mutations: Mutations,
  actions: Actions,
}
