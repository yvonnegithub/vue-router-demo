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

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})