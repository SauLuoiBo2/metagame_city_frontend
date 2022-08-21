export function renderCheckBoolean(isNull?: boolean, T1?: React.ReactNode, T2?: React.ReactNode) {
    if (isNull) {
        return T1;
    } else {
        return T2;
    }
}
