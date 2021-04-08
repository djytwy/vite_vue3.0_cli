import { App } from 'vue'
import myComponentA from './src/index.vue'

myComponentA.install = (app: App) => {
  app.component(myComponentA.name ,myComponentA)
}

export default myComponentA
