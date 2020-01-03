import React from 'react';

import { Container, Title, InputValue, Description, CheckBox, CheckBoxLabel, Check, InputDescription } from './styles';

export default function AddExpense() {
    return (
        <Container>
            <Title></Title>
            <InputValue />
            <Description>
                <CheckBox>
                    <CheckBoxLabel></CheckBoxLabel>
                    <Check />
                </CheckBox>
                <InputDescription />
            </Description>

        </Container>
    );
}

AddExpense.navigationOptions = {
    title: 'Adicionar'
}