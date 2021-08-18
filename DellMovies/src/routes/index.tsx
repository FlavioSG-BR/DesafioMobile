import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import App from './App';

const Routes: React.FC = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

export default Routes;
