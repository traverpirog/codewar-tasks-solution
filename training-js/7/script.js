function saleHotdogs(n) {
    let pricePerOne = 100;

    if (n >= 5 && n < 10) {
        pricePerOne = 95;
    }
    if (n >= 10) {
        pricePerOne = 90;
    }

    return pricePerOne * n;
}