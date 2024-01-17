/**
 * @pure Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello foobar ${name ?? "world"}!!!`;
}

import * as e from 'node-emoji';

export async function foo(): Promise<string> {
  let x = await fetch('https://google.com');
  return `${x.status} !!! ${e.emojify(":tada:")}`;
}