function price(data) {
    const profit = 1.15;
    Object.keys(data).forEach(key => {
        data[key] = (Math.round(data[key] * profit));
    })
    return data
}
console.log(price({apple: 800, banana: 600, milk: 700}));