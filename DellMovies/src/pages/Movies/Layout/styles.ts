import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';

export const Container = styled.View`
  flex: 1;
  margin: 20px 20px 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
`;

export const HeaderTitle = styled(HeaderText)`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const ReceiptHistory = styled(
  FlatList as new () => FlatList<MoviesDTO>,
)`
  flex: 1;
`;

export const AddReceiptButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  padding: 12px;
  position: absolute;
  border-radius: 12px;
  bottom: 45px;
  right: 10px;
`;

export const AddReceiptButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 0 8px;
`;
