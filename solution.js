function expandedForm(num) {
    const numString = num.toString();
    const expanded = [];
    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString[i]);
        if (digit !== 0) {
            const placeValue = Math.pow(10, numString.length - i - 1);
            expanded.push(digit * placeValue);
        }
    }
    return expanded.join(' + ');
}