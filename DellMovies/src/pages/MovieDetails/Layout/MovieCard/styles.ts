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

export const CardDetails = styled.View`
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardCheap = styled.Text`
  border-radius: 30px;
  background-color: #e0e0e0;
  padding: 5px 15px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.title};
`;

type CardTextProps = {
  bold?: boolean;
};
export const CardText = styled.Text<CardTextProps>`
  font-size: 12px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => props.theme.colors.title};
`;

export const CardIcon = styled.View`
  border-radius: 100px;
  padding: 10px;
  top: -65px;
  right: 30px;
`;
