/**
 * Created by gupo-03 on 2017/5/10.
 */
import axios from './axios'
export default {
  getCourseList (title) {
    return new Promise((resolve, reject) => {
      axios.get('/getcourselist', {
        params: {
          'title': title
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getNav () {
    return new Promise((resolve, reject) => {
      axios.get('/getnav', {
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getHotArticle () {
    return new Promise((resolve, reject) => {
      axios.get('/gethotarticle', {
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getHotDemo () {
    return new Promise((resolve, reject) => {
      axios.get('/gethotdemo', {
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getNewArticle () {
    return new Promise((resolve, reject) => {
      axios.get('/getnewarticle', {
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
