// @flow
import {
  isImmutable,
  List, type List as TList,
  Map, type Map as TMap,
} from 'immutable';

export const isMap = (map: any): boolean => (
  isImmutable(map) && Map.isMap(map)
);

export const isList = (list: any): boolean => (
  isImmutable(list) && List.isList(list)
);

export function expectString(string: any): string {
  if (typeof string === 'string') {
    return string;
  }
  throw new TypeError(`unexpected type: ${typeof string} - expected string`);
}

export function expectNumber(number: any, allowNaN: boolean = false): number {
  if (typeof number === 'number') {
    (number: number); // eslint-disable-line no-unused-expressions
  } else {
    throw new TypeError(`unexpected type: ${typeof number} - expected number`);
  }
  // eslint-disable-next-line no-restricted-globals
  if (!allowNaN && isNaN(number)) {
    throw new TypeError('number is not a number');
  }
  return number;
}

export function expectMap(map: any): TMap<any, any> {
  if (map && isMap(map)) {
    return map;
  }
  debugger;
  throw new TypeError(`unexpected type: ${typeof map} - expected map`);
}

export function expectList(list: any): TList<any> {
  if (list && isList(list)) {
    return list;
  }
  throw new TypeError(`unexpected type: ${typeof list} - expected list`);
}
