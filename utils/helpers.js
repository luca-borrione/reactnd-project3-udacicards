// @flow
import { Notifications, Permissions } from 'expo';
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
  throw new TypeError(`unexpected type: ${typeof map} - expected map`);
}

export function expectList(list: any): TList<any> {
  if (list && isList(list)) {
    return list;
  }
  throw new TypeError(`unexpected type: ${typeof list} - expected list`);
}

type LocalNotification = {
  [key: string]: string | {
    [key: string]: string | boolean
  },
};

export const getLocalNotification = (): LocalNotification => ({
  title: "It's Quiz time!",
  body: "👋 don't forget to practice!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

export function getNotificationTimestamp() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(20);
  date.setMinutes(0);
  date.setSeconds(0);
  return date.getTime();
  /* DEBUG PURPOSES
  const debugDate = new Date();
  debugDate.setMinutes(debugDate.getMinutes() + 1);
  return debugDate.getTime();
  */
}

type SchedulingOptions = {
  [key: string]: string | number,
};

export const getSchedulingOptions = (timestamp: number): SchedulingOptions => ({
  time: timestamp,
  repeat: 'day',
});

export async function scheduleLocalNotificationAsync(): Promise<number | void> {
  const { status }: { status: string } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    return undefined;
  }

  await Notifications.cancelAllScheduledNotificationsAsync();
  const localNotification: LocalNotification = getLocalNotification();
  const timestamp: number = getNotificationTimestamp();
  const schedulingOptions: SchedulingOptions = getSchedulingOptions(timestamp);
  await Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  return timestamp;
}

export const cancelAllScheduledNotificationsAsync = () => (
  Notifications.cancelAllScheduledNotificationsAsync()
);
