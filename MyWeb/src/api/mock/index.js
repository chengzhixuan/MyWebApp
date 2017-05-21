/**
 * Created by gupo-03 on 2017/5/9.
 */
import Mock from 'mockjs'
import user from './user'
import article from './article'
import demolist from './demolist'
Mock.setup({
  timeout: '200'
})

function mocklist (templates) {
  for (let t of templates) {
    Mock.mock(t.url, t.type, t.template)
  }
}
if (process.env.API_MOCK_ON) {
  mocklist(user)
  mocklist(article)
  mocklist(demolist)
}
