const n = 12;

const dividers = (number) => {
    let mod = number;

    while (mod > 0) {
        if (number % mod === 0) {
            console.log(mod);
        }
        mod--;
    }
}

dividers(n);