import React from 'react';
import { View } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';

import {styles} from './styles';

import Home from '../Home';

function App() {
  return (
    <NativeRouter>
        <View style={styles.container}>
          <Route exact path='/' component={Home}/>
        </View>
    </NativeRouter>
  );
}

export default App;
