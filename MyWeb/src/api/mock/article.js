/**
 * Created by gupo-03 on 2017/5/10.
 */
export default [
  {
    url: /\/getcourselist/,
    type: 'get',
    template: {
      'result': 1,
      'status': 200,
      'data|3-6': [
        {
          'label': '@cword(2,5)',
          'children|6-10': [
            {
              'label': '@cword(3,6)',
              'children|1-4': [
                {
                  'label': '@cword(3,6)'
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
          'subhead': '@cword(5, 10)'
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
          'subhead': '@cword(5, 10)'
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
          'content': '@cword(20, 100)',
          'title': '@cword(5, 10)',
          'subhead': '@cword(5, 10)'
        }
      ],
      'status': 200
    }
  }
]
