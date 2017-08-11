import React from 'react';
import ReactDOM from 'react-dom';

import sinon from 'sinon'
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import Todos from './Todos'
import TodoForm from './TodoForm'

describe('<App /> container', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should display a welcome message', () => {
    const wrapper = shallow(<App />);
    const textHeader = <h2>Welcome to React</h2>;
    expect(wrapper.contains(textHeader)).equal(true);
  });

  it('should call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should have 3 todos in the state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().todos).to.have.length(3)
  });

  it('should contains a Todos component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Todos)).to.have.length(1)
  });

  it('should contains a TodoForm component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodoForm)).to.have.length(1)
  });

})

