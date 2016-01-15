declare const chai:any;

import StarterComponent from './starter.component';

const expect = chai.expect;

describe('# Starter component', () => {
  let instance: StarterComponent;

  beforeEach(() => {
    instance = new StarterComponent();
  });

  it('- Property name should be equal to "Angular2 JSPM Starter"', () => {
    expect(instance.name).to.be.equal('Angular2 JSPM Starter');
  });
});
