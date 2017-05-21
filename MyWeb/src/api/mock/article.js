/**
 * Created by gupo-03 on 2017/5/10.
 */
export default [
  {
    url: /\/getarticleid/,
    type: 'get',
    template: {
      'result': 1,
      'status': 200,
      'data': {
        'title': '@cword(2,5)',
        'subheader': '@cword(5,10)',
        'author': '@cword(2,3)',
        'time': '@datetime("yyyy-MM-dd HH:mm:ss")',
        'readnum|500-1000': 500,
        'content': '@cword(300,600)',
        'replytopic|5-10': [
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
  },
  {
    url: /\/getcourselist/,
    type: 'get',
    template: {
      'result': 1,
      'status': 200,
      'data|3-6': [
        {
          'label': '@cword(2,5)',
          'id': 1,
          'children|6-10': [
            {
              'label': '@cword(3,6)',
              'id': 2,
              'children|1-4': [
                {
                  'label': '@cword(3,6)',
                  'id': 3
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    url: /\/getnav/,
    type: 'get',
    template: {
      'result': 1,
      'data|10': [
        '@cword(5)'
      ],
      'status': 200
    }
  },
  {
    url: /\/gethotarticle/,
    type: 'get',
    template: {
      'result': 1,
      'data|1-4': [
        {
          'image': 'http://localhost:8081/static/timg.jpg',
          'content': '@cword(20, 100)',
          'title': '@cword(5, 10)',
          'subhead': '@cword(5, 10)',
          'id|100-200': 1,
          'colnum': 'course'
        }
      ],
      'status': 200
    }
  },
  {
    url: /\/gethotdemo/,
    type: 'get',
    template: {
      'result': 1,
      'data|1-4': [
        {
          'image': 'http://localhost:8081/static/timg.jpg',
          'content': '@cword(20, 100)',
          'title': '@cword(5, 10)',
          'subhead': '@cword(5, 10)',
          'id|100-200': 1,
          'colnum': 'demolist'
        }
      ],
      'status': 200
    }
  },
  {
    url: /\/getnewarticle/,
    type: 'get',
    template: {
      'result': 1,
      'data|1-4': [
        {
          'image': 'http://localhost:8081/static/timg.jpg',
          'content': '@cword(300, 600)',
          'title': '@cword(5, 10)',
          'subhead': '@cword(5, 10)',
          'id|100-200': 1,
          'colnum': 'course'
        }
      ],
      'status': 200
    }
  }
]
