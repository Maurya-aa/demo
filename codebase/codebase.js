let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    // spaces
    for (let j = i; j < n; j++) {
        row += ' ';
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }

    console.log(row);
}
