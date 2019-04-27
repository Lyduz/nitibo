import { MutationTree, ActionTree, GetterTree } from 'vuex'

const state = {
    loggedUsername: '',
}

const getters = <GetterTree<typeof state, any>>{
    // getLevelState(state) {               must make use of mapState
    //     return state.levelState
    // }

}

const mutations = <MutationTree<typeof state>>{
    SET_LOGGED_USERNAME(state, payload) {
        state.loggedUsername = payload
    },

}

const actions = <ActionTree<typeof state, any>>{
    setLoggedUsername(context, data) {
        context.commit("SET_LOGGED_USERNAME", data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
