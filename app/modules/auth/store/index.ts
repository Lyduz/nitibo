import { MutationTree, ActionTree, GetterTree } from 'vuex'
import storeState from './state'
import storeActions from './actions'
import storeGetters from './getters'
import storeMutations from './mutations'

const state = storeState
const actions = <ActionTree<typeof state, any>>storeActions
const mutations = <MutationTree<typeof state>>storeMutations
const getters = <GetterTree<typeof state, any>>storeGetters
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
