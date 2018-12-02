// 全局注册
Vue.component('MyComponent',{
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
// 局部注册
var ComponentA = {

}

var ComponentB = {
  components: {
    'component-a':  ComponentA
  }
}