import * as React from 'react';
import { Alert } from 'react-native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();
export function navigate(name, params) {
    navigationRef.current.navigate(name, params);
};