import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
// import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
// import { Text, View } from 'react-native';

import Routes from './routes';
import {store} from './store';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    
    <Suspense fallback>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default App;