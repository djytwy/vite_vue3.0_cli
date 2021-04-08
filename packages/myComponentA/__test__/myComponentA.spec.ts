import { mount } from '@vue/test-utils'
import myComponentA from '../src/index.vue'

describe('myComponentA.vue', ( )=> {
  const testText = 'this is a beautiful girl !'
  test('render', () => {
    const wrapper = mount(myComponentA, {
      props: {
        content:testText,
      },
    })
    expect(wrapper.text()).toEqual(testText)
  })
})
