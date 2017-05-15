/**
 * Created by gupo-03 on 2017/4/10.
 */
export default (value) => {
  if (!isNaN(value)) {
    var newDate = new Date(parseInt(value))
    // newDate.setTime(value)
    // value = newDate.toLocaleString()
    value = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
    value = value.replace('GMT+8', '')
    value = value.replace('年', '-')
    value = value.replace('月', '-')
    value = value.replace('日', '')
    if (value.indexOf('上午') !== -1) {
      value = value.split('上午')[0] + value.split('上午')[1]
    }
    if (value.indexOf('下午') !== -1) {
      let after = value.split('下午')
      let arr = parseInt(after[1].split(':')[0]) + 12
      value = after[0] + arr + ':' + after[1].split(':')[1] + ':' + after[1].split(':')[2]
    }
    let year = value.split(' ')[0].split('/')
    value = year.join('-') + ' ' + value.split(' ')[1]
  }
  var date = new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (value.split(' ')[1].indexOf('-') !== -1) {
    let arr = value.split(' ')[1].split('-')
    value = value.split(' ')[0] + ' ' + arr.join(':')
  }
  var stringTime = value
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  var strtime = stringTime.split(' ')[0].split('-').concat(stringTime.split(' ')[1].split(':'))
  var nowtime = currentdate.split(' ')[0].split('-').concat(currentdate.split(' ')[1].split(':'))
  let interval = []
  for (let i = 0; i < nowtime.length; i++) {
    interval.push(nowtime[i] - strtime[i])
  }
  for (let i = 0; i < interval.length; i++) {
    switch (i) {
      case 0:
        if (interval[0] > 0) {
          return stringTime.split(' ')[0]
        }
        break
      case 1:
        if (interval[1] > 0) {
          return strtime[1] + seperator1 + strtime[2] + ' ' + strtime[3] + seperator2 + strtime[4]
        }
        break
      case 2:
        if (interval[2] === 1) {
          return '昨天' + ' ' + strtime[3] + seperator2 + strtime[4]
        } else if (interval[2] < 1 && interval[2] > 0) {
          return '今天' + ' ' + strtime[3] + seperator2 + strtime[4]
        } else if (interval[2] > 1) {
          return strtime[1] + seperator1 + strtime[2] + ' ' + strtime[3] + seperator2 + strtime[4]
        }
        break
      case 3:
        if (interval[3] >= 1) {
          return '今天' + ' ' + strtime[3] + seperator2 + strtime[4]
        }
        break
      case 4:
        if (interval[4] >= 1) {
          return interval[4] + '分钟前'
        } else {
          return '刚刚'
        }
      case 5:
        return '刚刚'
    }
  }
}
