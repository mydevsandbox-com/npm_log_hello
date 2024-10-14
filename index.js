import console from 'console';

export function logHello(actor) {
  const responseActor = actor || '@mydevsandbox-com/log-hello';
  console.log(`Hello from ${responseActor}`);
  return `Hello from ${responseActor}`;
}
