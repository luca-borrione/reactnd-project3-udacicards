import React from 'react';
import { Iterable } from 'immutable';

const { isIterable } = Iterable;

const toJS = (WrappedComponent) => {
  const toJSProps = (wrappedComponentProps) => {
    const propsJS = Object.entries(wrappedComponentProps).reduce(
      (newProps, [key, value]) => ({
        ...newProps,
        [key]: isIterable(value) ? value.toJS() : value,
      }),
      {},
    );
    return <WrappedComponent {...propsJS} />;
  };

  // Keeping static props
  Object.entries(WrappedComponent).forEach(([key, value]) => {
    toJSProps[key] = value;
  });
  return toJSProps;
};

export default toJS;
