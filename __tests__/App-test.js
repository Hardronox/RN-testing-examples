import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'
import 'jest-styled-components'
import AsyncStorage from '@react-native-community/async-storage';

import App from '../App';


test('shows button and tooltip if button is clicked', () => {
  const {queryByTestId} = render(
    <App/>
  );

  expect(queryByTestId('toggle')).not.toBeNull();


  expect(queryByTestId('tooltip')).toBeNull();

  fireEvent.press(queryByTestId('toggle'));

  expect(queryByTestId('tooltip')).not.toBeNull();
});

test('adds item in async storage on click', async () => {
  const {queryByTestId} = render(
    <App/>
  );

  fireEvent.press(queryByTestId('toggle'));

  const key = await AsyncStorage.getItem('key');

  expect(AsyncStorage.setItem).toBeCalledWith('key', 'value');
  expect(key).toBe('value');
});


// latest styled components can't be tested in the time of creating this part

// test('shows that color changes after pressing on button', () => {
//   const {getByTestId, queryByTestId, queryByTestId} = render(
//     <App/>
//   );
//
//   expect(queryByTestId('tooltip')).toHaveStyleRule('color', 'black')
//
//   fireEvent.press(queryByTestId('Toggle tooltip'));
//
//   expect(queryByTestId('tooltip')).toHaveStyleRule('color', 'red')
// });
