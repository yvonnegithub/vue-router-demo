// 全局注册
Vue.component('MyComponent',{

})
// 局部注册
var ComponentA = {

}

var ComponentB = {
  components: {
    'component-a':  ComponentA
  }
}