/**
 * Created by gupo-03 on 2017/5/15.
 */
export default {
  setArticleId (id) {
    localStorage.ArticleId = id
  },
  getArticleId () {
    return localStorage.ArticleId
  }
}
