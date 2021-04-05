import React, { useEffect } from 'react'

const currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNH", "CNY", "COP", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW"]

function Home() {
    let currency
    useEffect(async () => {
        const response = await fetch(`https://api.fastforex.io/fetch-all?from=USD&api_key=c36c653679-f6ab4b276c-qr3wad`)
        currency = await response.json()
        const input = document.querySelector('.home__input')
        const result = document.querySelector('.home__result')
        const currencyType = document.getElementById('currency')
        input.oninput = () => {
            const prevValue = input.value
            const newValue = prevValue * currency.results[currencyType.value]
            result.innerHTML = `${prevValue} USD converted into ${newValue} ${currencyType.value}`
        }

    }, [])
    return (
        <main>
            <h1>Home</h1>
            <form >
                <input type="text" className="home__input" />
                <select id="currency">
                    {currencies.map(currency => <option value={currency}>{currency}</option>)}
                </select>
            </form>
            <p className="home__result"></p>
        </main>
    )
}

export default Home
