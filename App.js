import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button
} from 'react-native';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage';


const Tooltip = styled.View`
  background-color: papayawhip;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TooltipText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${props => props.error ? "red" : "black"};
`;

const App = () => {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const toggleTooltip = async () => {
    setTooltipVisibility(!tooltipVisibility);

    try {
      await AsyncStorage.setItem('key', 'value')
    } catch (e) {

    }
  };

  return (
    <>
      <SafeAreaView>
        <View >

          <Button onPress={toggleTooltip} title="Toggle tooltip" testID="toggle"/>

          {tooltipVisibility && (
            <Tooltip>
              <TooltipText error testID="tooltip">
                This is a tooltip!
              </TooltipText>
            </Tooltip>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
