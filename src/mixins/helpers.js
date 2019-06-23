export const money = value => {
    if (typeof value !== "string") value = String(value);
    value = value.split("").reverse();

    for (let i in value)
        if ((i - 3) % 3 === 0 && i != 0) value[i] = `${value[i]},`;

    const result = value.reverse().join("");

    return result;
};