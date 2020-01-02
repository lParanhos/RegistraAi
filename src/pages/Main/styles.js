import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: #eeee;
`;

export const Card = styled.View`
    background: #FFF;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 10px;
`;

export const Info = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

export const MonthSelector = styled.View`
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 15px;
`;

export const MonthSelectorButton = styled.TouchableOpacity`
`;

export const Month = styled.Text`
    margin: 0 5px 0 5px;
`;

export const InfoBlock = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InfoText = styled.View`
    margin-left: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const IText = styled.Text`
    font-size: 14px;
`;


export const Values = styled.Text`
    color: ${props => props.received ? '#10c951' : '#f70505'};
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonList = styled.View`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled(RectButton)`
    justify-content: space-around;
    align-items: center;
    background: #7159c1;
    width: 150px;
    height: 100px;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    color: #FFF;
`