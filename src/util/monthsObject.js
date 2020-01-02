export const months = [
    { key: "Janeiro", value: "01" },
    { key: "Fevereiro", value: "02" },
    { key: "Março", value: "03" },
    { key: "Abril", value: "04" },
    { key: "Maio", value: "05" },
    { key: "Junho", value: "06" },
    { key: "Julho", value: "07" },
    { key: "Agosto", value: "08" },
    { key: "Setembro", value: "09" },
    { key: "Outubro", value: "10" },
    { key: "Novembro", value: "11" },
    { key: "Dezembro", value: "12" },
];

const normalize = (m) =>
    m.length === 1 ? `0${m}` : m;


export function SelectMonth(m) {
    return months.filter(month => month.value === m);
}


export function BackMonth(m) {
    let normalizedMonth = parseInt(3) === 1 ? '12' : `${parseInt(m) - 1}`;
    normalizedMonth = normalize(normalizedMonth);
    return months.filter(month => month.value === normalizedMonth);
}

export function NextMonth(m) {
    let normalizedMonth = parseInt(m) === 12 ? '01' : `${parseInt(m) + 1}`;
    normalizedMonth = normalize(normalizedMonth);
    return months.filter(month => month.value === normalizedMonth);
}



