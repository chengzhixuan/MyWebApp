/**
 * Created by gupo-03 on 2017/5/16.
 */
import axios from './axios'
export default {
  getDemoDetails (demoid) {
    return new Promise((resolve, reject) => {
      axios.get('/getdemodetails', {
        params: {
          demoid: demoid
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getDemoList () {
    return new Promise((resolve, reject) => {
      axios.get('/getdemolist', {
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
