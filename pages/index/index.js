// index.js
Page({
  data: {
    tree: [
      {
        id: 'comp-b',
        props: {
          name: 'Tom'
        },
        children: [
          {
            id: 'comp-c',
            props: {
              name: 'Jerry in the Tom'
            }
          }
        ]
      },
      {
        id: 'comp-c',
        props: {
          name: 'Jerry'
        }
      },
    ]
  }
})
