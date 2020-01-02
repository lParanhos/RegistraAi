import React, { Component } from 'react';
import { Text } from 'react-native';
import Speedometer from 'react-native-speedometer-chart';

export default function Chart({ expenses, revenues }) {

    console.tron.log("aqui")
    const expression = ((expenses * 100) / revenues) >= 0 ? (expenses * 100) / revenues : 0;
    const result = Math.floor(expression);

    function label(value) {
        console.tron.log(value)
        if (value <= 33) {
            return "Você está indo super bem !"
        } else if (value > 33 && value <= 50) {
            return "Legal !"
        } else if (value > 50 && value <= 70) {
            return "Melhor segurar os gastos !"
        } else if (value > 70 && value <= 100) {
            return "É, dessa vez não sobrou quase nada :/"
        } else {
            return "Você passou dos limites :("
        }
    }

    return (
        <>
            <Speedometer
                value={0}
                totalValue={revenues === 0 ? 0.1 : revenues}
                internalColor="#f70505"
                outerColor='#10c951'
                showPercent
                percentStyle={{ fontSize: 20, fontWeight: 'bold' }}
            />
            <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign: "center" }}>{label(result)}</Text>
        </>
    );
}