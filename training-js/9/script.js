function padIt(str, n) {
    do {
        if (n % 2 === 0) {
            str = str + '*';
        } else {
            str = '*' + str;
        }
        n--;
    } while (n > 0);

    return str;
}