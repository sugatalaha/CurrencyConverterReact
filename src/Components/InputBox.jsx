import {React ,useId} from 'react'
export default function InputBox(
    {
        label,
        amount,
        onAmountChange,
        currencyOptions=[],
        selectCurrency="usd",
        amountDisable=false,
        onCurrencyChange,
        currencyDisable=false,
        className=""
    }
) {
    const amountInputId=useId();
  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                  style={{color:'black'}}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
                  style={{color:'black'}}
              >

                  {currencyOptions.map((currency) => (
                      <option key={currency} value={currency} style={{color:'black'}}>
                          {currency}
                      </option>
                  ))}

              </select>
          </div>
      </div>

  )
}
