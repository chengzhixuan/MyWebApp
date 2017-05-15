/**
 * Created by gupo-03 on 2017/5/15.
 */
import * as MutationType from '../mutation-type'
import * as ActionType from '../action-type'
import auth from '../../auth'

const state = {
  articleid: auth.getArticleId() ? auth.getArticleId() : null
}

const getters = {
  article_id: state => state.articleid
}

const actions = {
  [ActionType.ARTICLE_ARTICLEIDS] ({ commit }, ArticleId) {
    commit(MutationType.ARTICLE_ARTICLEIDS, ArticleId)
  }
}

const mutations = {
  [MutationType.ARTICLE_ARTICLEIDS] (state, articleid) {
    state.articleid = articleid
    auth.setArticleId(articleid)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
