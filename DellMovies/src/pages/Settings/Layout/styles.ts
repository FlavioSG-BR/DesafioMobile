import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const Option = styled.TouchableOpacity`
  padding: 18px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-color: #eee;
  border-bottom-width: 1px;
`;

export const OptionIcon = styled(Icon)`
  font-size: 28px;
  margin-right: 12px;
`;

export const OptionText = styled.Text`
  font-size: 20px;
`;
