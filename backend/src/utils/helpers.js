const processData = (data) => {
    const numbers = [];
    const alphabets = [];
    
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });

    // Find the highest alphabet in the series (case insensitive)
    const highest_alphabet = alphabets.length > 0 
        ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
        : [];

    return { numbers, alphabets, highest_alphabet };
};

module.exports = { processData };
