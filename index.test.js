import { expect } from 'chai';
import { logHello } from './index.js';

describe('logHello', () => {
  it('should return the correct message when actor is provided', () => {
    const actor = 'TestActor';
    const result = logHello(actor);
    expect(result).to.equal('Hello from TestActor');
  });

  it('should return the default message when actor is not provided', () => {
    const result = logHello();
    expect(result).to.equal('Hello from @mydevsandbox-com/log-hello');
  });
});