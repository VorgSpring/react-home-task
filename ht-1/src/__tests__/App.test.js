import React from 'react';
import App from '../App';
import NewsPost from '../NewsPost';
import {shallow} from 'enzyme';

describe('App component', () => {
  const wrapper = shallow(<App />);

  describe('test render', () => {
    it('contain div with class App', () => {
      expect(wrapper.find('div.App')).toHaveLength(1);
    });
    it('contain input', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });
  });

  describe('check presence of instance methods', () => {
    const wrapper = shallow(<App />);
    it('contain instance method handleChange', () => {
      expect(wrapper.instance().onChange).toBeDefined();
    });

    it('contain instance method handleNewPost', () => {
      expect(wrapper.instance().onClick).toBeDefined();
    });
  });

  describe('check state content', () => {
    const wrapper = shallow(<App />);
    it('contain news array', () => {
      expect(wrapper.state().newsPosts).toEqual([]);
    });
    it('contain newsInput with empty string', () => {
      expect(wrapper.state().value).toEqual('');
    });
  });

  describe('check callbacks', () => {
    it('save from input to state.newsInput', () => {
      const wrapper = shallow(<App />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      expect(wrapper.state().value).toEqual(10);
    });
    it('create new post from value state.newsInput via click on button', () => {
      const wrapper = shallow(<App />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      wrapper.find('button').simulate('click');
      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().newsPosts[0].value).toEqual(10);
    });
  });

  describe('check Comments rendering', () => {
    it('render NewsPost component on create new post', () => {
      const wrapper = shallow(<App />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      wrapper.find('button').simulate('click');
      wrapper.update();
      const newsFromState = wrapper.state().newsPosts[0];
      expect(
        wrapper.contains(
          <NewsPost key={newsFromState.value} value={newsFromState.value} />
        )
      ).toBeTruthy();
    });
  });
});
