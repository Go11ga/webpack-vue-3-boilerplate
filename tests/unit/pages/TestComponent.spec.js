import { shallowMount } from '@vue/test-utils';
import TestComponent from '@/components/TestComponent.vue';

describe('TestComponent', () => {
  const wrapper = shallowMount(TestComponent);

  it('wrapper text', () => {
    expect(wrapper.text()).toBe('TestComponent');
  });
});
