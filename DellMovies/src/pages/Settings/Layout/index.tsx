import React, {useRef} from 'react';
import NumericInput from 'react-native-numeric-input'

import {Container, OptionText} from './styles';

interface SettingsProps {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

const Settings: React.FC<SettingsProps> = ({
  fontSize,
  setFontSize,
}) => {
    const fontSizeRef = useRef<NumericInput>(null);

  return (
    <Container>
        <OptionText>'Tamanho da fonte'</OptionText>
        <NumericInput type='up-down' onChange={setFontSize} />
      
    </Container>
  );
};

export default Settings;
