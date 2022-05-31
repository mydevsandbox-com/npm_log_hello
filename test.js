const { logHello } = require('./index');
const test = logHello();
const testMatch = 'Hello from @mydevsandbox-com/log-hello';

if (test === testMatch) {
  console.log('Expected response matched');
} else {
  const errMsg = `Expected response did not match!
  \tGot: ${test}
  \tExpected: ${testMatch}
  `;
  throw new Error(errMsg);
}
