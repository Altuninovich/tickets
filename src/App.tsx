import React, { useEffect, useState } from 'react';
import './App.scss';
import { Tickets } from './components/Tickets/Tickets'
import { TicketsType, useHttp } from './hooks/http.hook';
//import { TicketType } from './hooks/http.hook';
import cn from 'classnames'
import { Loader } from './components/Loader/Loader';
//import { Loader } from './components/Preloader/Loader';

export type TransfersFilterType = {
  withoutTransplant: boolean
  oneTransplant: boolean
  twoTransplants: boolean
  threeTransplants: boolean
}
const initStateTransfersFilter: TransfersFilterType = {
  withoutTransplant: true,
  oneTransplant: true,
  twoTransplants: true,
  threeTransplants: true,
}

const chekSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check" viewBox="2 3 12 12">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
</svg>

function App() {
  const { tickets, loading, getPrice } = useHttp()
  const [currencyСode, setСurrencyСode] = useState('RUB')
  //const [valutePrice, setValutePrice] = useState<number | null>(null)
  const [currentStateTickets, setCurrentStateTickets] = useState<TicketsType>([])
  const [transfersFilter, setTransfersFilter] = useState<TransfersFilterType>(initStateTransfersFilter)

  const hendleClickModePriceUSD = async (e: any) => {
    const { outerText } = e.target
    setСurrencyСode(outerText)
    const data = await getPrice()
    const priceUSDRUB: number = data.USDRUB
    const newCurrentStateTickets: TicketsType = tickets.map((t) => ({ ...t, price: Math.ceil(t.price / priceUSDRUB) }))
    setCurrentStateTickets(newCurrentStateTickets)
  }

  const hendleClickModePriceRUB = (e: any): void => {
    const { outerText } = e.target
    setСurrencyСode(outerText)
    setCurrentStateTickets(tickets)
  }

  const hendleClickModePriceEUR = async (e: any) => {
    const { outerText } = e.target
    setСurrencyСode(outerText)
    const data = await getPrice()
    const priceUSDRUB: number = data.USDRUB
    const priceUSDEUR: number = data.USDEUR
    const newCurrentStateTickets: TicketsType = tickets.map((t) => ({ ...t, price: Math.ceil((t.price / priceUSDRUB) * priceUSDEUR) }))
    setCurrentStateTickets(newCurrentStateTickets)
  }

  const hendleClickTransfersFilter = (filterName: 'withoutTransplant' | 'oneTransplant' | 'twoTransplants' | 'threeTransplants') => () => {
    setTransfersFilter({ ...transfersFilter, [filterName]: !transfersFilter[filterName] })

  }

  const btnClassPriceRUB = cn({
    'mode_price-total': true,
    'mode_price-rub': true,
    'mode_price-active': currencyСode === 'RUB',
  })
  const btnClassPriceUSD = cn({
    'mode_price-total': true,
    'mode_price-usd': true,
    'mode_price-active': currencyСode === 'USD',
  })
  const btnClassPriceEUR = cn({
    'mode_price-total': true,
    'mode_price-eur': true,
    'mode_price-active': currencyСode === 'EUR',
  })

  useEffect(() => setCurrentStateTickets(tickets), [tickets])

  return (
    <div className="App">
      <div className="App_wrapper">
        <div className="modes">
          <div className="modes_price-title">ВАЛЮТА</div>
          <div className="modes_price">
            <div onClick={hendleClickModePriceRUB} className={btnClassPriceRUB}>RUB</div>
            <div onClick={hendleClickModePriceUSD} className={btnClassPriceUSD}>USD</div>
            <div onClick={hendleClickModePriceEUR} className={btnClassPriceEUR}>EUR</div>
          </div>
          <div className="modes_transfer">
            <div className="modes_transfer-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className="modes_transfer-filtering">
              <div className="modes_transfer-filtering_wrapper">
                <div onClick={hendleClickTransfersFilter('withoutTransplant')} className="mode_transfer-item withoutTransplant">
                  <div className="checkbox">
                    {transfersFilter.withoutTransplant && chekSvg}
                  </div>
                  <div className="filter-name">
                    Без пересадок
                  </div>
                </div>
                <div onClick={hendleClickTransfersFilter('oneTransplant')} className="mode_transfer-item oneTransplant">
                  <div className="checkbox">
                    {transfersFilter.oneTransplant && chekSvg}
                  </div>
                  <div className="filter-name">
                    1 пересадка
                  </div>
                </div>
                <div onClick={hendleClickTransfersFilter('twoTransplants')} className="mode_transfer-item twoTransplants">
                  <div className="checkbox">
                    {transfersFilter.twoTransplants && chekSvg}
                  </div>
                  <div className="filter-name">
                    2 пересадки
                  </div>
                </div>
                <div onClick={hendleClickTransfersFilter('threeTransplants')} className="mode_transfer-item threeTransplants">
                  <div className="checkbox">
                    {transfersFilter.threeTransplants && chekSvg}
                  </div>
                  <div className="filter-name">
                    3 пересадки
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tickets">
          {loading ? <Loader/> : <Tickets currentStateTickets={currentStateTickets} 
                   transfersFilter={transfersFilter}
                   currencyСode={currencyСode}
           />}
        </div>
      </div>
    </div>
  );
}

export default App;
