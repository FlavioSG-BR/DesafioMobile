import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Card = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 23px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.title};
`;

type CardTextProps = {
  bold?: boolean;
};
