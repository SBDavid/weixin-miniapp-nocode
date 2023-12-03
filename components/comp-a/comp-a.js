// components/comp-a/comp-a.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test: function test() {
      this.setData({})
    }
  }
})
