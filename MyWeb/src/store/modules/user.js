/**
 * Created by gupo-03 on 2017/5/9.
 */
import * as MutationType from '../mutation-type'
import * as ActionType from '../action-type'

const state = {
  UserInformation: ''
}
// this.$store.getters.user_information
const getters = {
  user_information: state => state.UserInformation
}
// this.$store.dispatch(ActionType.USER_INFORMATION, UserInformation)
const actions = {
  [ActionType.USER_INFORMATION] ({commit}, UserInformation) {
    commit(MutationType.USER_INFORMATION, UserInformation)
  }
}
// this.$store.commit(MutationType.USER_INFORMATION, UserInformation)
const mutation = {
  [MutationType.USER_INFORMATION] (state, UserInformation) {
    state.UserInformation = UserInformation
  }
}

export default {
  state,
  getters,
  actions,
  mutation
}
