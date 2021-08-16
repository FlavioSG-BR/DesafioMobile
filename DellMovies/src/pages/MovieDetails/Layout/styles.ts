import styled from 'styled-components/native';

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
