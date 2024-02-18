const form = document.querySelector('#searchForm')
const price1 = document.querySelector('#price')
const volume1 = document.querySelector('#volume')
const change1 = document.querySelector('#change')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cryptocurr = form.elements.cryptotype.value;
    const currency = form.elements.currencytype.value;
    fetchprice(cryptocurr, currency)
})



fetchprice = (cryptocurr, currency) => {
    const options = {
        method: 'GET',
        url: `https://openapiv1.coinstats.app/coins/${cryptocurr}`,
        params: { currency: `${currency}` },
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'KH3wK55QW5Awrze+C8LhWB0hb5iPTUsAfSQ83clJRnQ='
        }
    };

    axios
        .request(options)
        .then(function (response) {
            const price = response.data.price;
            const volume = response.data.price;
            const change = response.data.priceChange1d

            price1.innerHTML = price
            volume1.innerHTML = volume
            change1.innerHTML = change
        })
        .catch(function (error) {
            console.error(error);
        });
}


