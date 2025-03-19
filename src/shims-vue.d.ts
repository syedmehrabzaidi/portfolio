// src/shims-vue.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Declare the 'oh-vue-icon' module
declare module 'oh-vue-icon/icons' {
  import { DefineComponent } from 'vue'
  const OhVueIcon: DefineComponent<{}, {}, any>
  export default OhVueIcon
}
