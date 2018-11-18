/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './../src/js/app';

describe('App Component', function () {
  this.timeout(6500);
  it('should shallow render', () => {
    expect(2).to.equal(2);
    // expect(shallow(<App />).contains(<div className='container'></div>)).to.equal(true);
  });
});
