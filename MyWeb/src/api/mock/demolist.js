/**
 * Created by gupo-03 on 2017/5/16.
 */
export default [
  {
    url: /\/getdemolist/,
    type: 'get',
    template: {
      'result': 1,
      'status': 200,
      'data|2-5': [
        {
          'title': '@cword(2,5)',
          'content': '@cword(100,200)',
          'image': ['http://localhost:8081/static/timg.jpg', 'http://localhost:8081/static/timg.jpg', 'http://localhost:8081/static/timg.jpg'],
          'author': '@cword(2,3)',
          'time': '@datetime("yyyy-MM-dd HH:mm:ss")',
          'demolistid|100-1000': 1
        }
      ]
    }
  },
  {
    url: /\/getdemodetails/,
    type: 'get',
    template: {
      'result': 1,
      'status': 200,
      'data': {
        'title': '@cword(2,5)',
        'content': '@cword(100,200)',
        'image': ['http://localhost:8081/static/1234.jpg', 'http://localhost:8081/static/1234.jpg', 'http://localhost:8081/static/1234.jpg'],
        'author': '@cword(2,3)',
        'readnum|100-1000': 1,
        'time': '@datetime("yyyy-MM-dd HH:mm:ss")',
        'demolistid|100-1000': 1,
        'demotopic|5-10': [
          {
            'title': '@cword(5,10)',
            'image': 'http://localhost:8081/static/timg.jpg',
            'name': '@cword(2,3)',
            'createtime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'updatetime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'content': '@cword(20,60)',
            'replyid|100-1000': 1,
            'topicreply|0-3': [
              {
                'name': '@cword(2,3)',
                'topicreplyid|100-1000': 1,
                'image': 'http://localhost:8081/static/timg.jpg',
                'createtime': '@datetime("yyyy-MM-dd HH:mm:ss")',
                'content': '@cword(20,60)'
              }
            ]
          }
        ]
      }
    }
  }
]
