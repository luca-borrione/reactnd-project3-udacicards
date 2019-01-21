// @flow

export function expectString(string: any): string {
  if (typeof string === 'string') {
    return string;
  }
  throw new TypeError(`unexpected type: ${typeof string} - expected string`);
}

export default undefined;
