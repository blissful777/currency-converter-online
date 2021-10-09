let first_currency = 'RUB'
let second_currency = 'USD'
let flag = true;

function main() {

    let currency_box1 = document.getElementById('currency_box1').children;
    for (let i = 0; i < currency_box1.length; i++) {
        currency_box1[i].style.background = 'white'

        if (currency_box1[i].getAttribute('data-type') === first_currency) {
            currency_box1[i].style.background = '#6128ca'
        }

    }
    let currency_box2 = document.getElementById('currency_box2').children;
    for (let i = 0; i < currency_box2.length; i++) {
        currency_box2[i].style.background = 'white'

        if (currency_box2[i].getAttribute('data-type') === second_currency) {
            currency_box2[i].style.background = '#6128ca'
        }
    }

    let first_quality = document.getElementById('base').value
    let second_quality = document.getElementById('new').value
    if (first_quality === '') {
        first_quality = 1;
        document.getElementById('base').value = 1;
    }

    if (second_quality === '') {
        second_quality = 1;
        document.getElementById('new').value = 1;
    }

    console.log(second_currency, first_currency)

    fetch(`https://api.exchangerate.host/latest?base=${second_currency}&symbols=${first_currency}`)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            console.log(data.rates)
            if (flag) {
                console.log('data.rates[first_currency]', data.rates[first_currency])
                console.log('first_quality', first_quality)
                document.getElementById('new').value = +first_quality / + data.rates[first_currency]
                console.log(second_quality, first_quality)
            } else {
                console.log(data.rates)
                document.getElementById('base').value = +second_quality * data.rates[first_currency]
                console.log(second_quality, first_quality)
            }
        })
}

main()
function param_first(currency) {
    first_currency = currency;
    main();
}

function param_second(currency) {
    second_currency = currency;
    main();
}

function input_value(bol) {
    flag = bol;
    console.log('flag', bol)
    main()
}



