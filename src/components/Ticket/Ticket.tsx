import { type } from "os"
import React, { FC } from "react"
import { TicketType } from "../../hooks/http.hook"
import "./Ticket.scss"

type ITicketsProps = {
    ticket: TicketType
    currencyСode: string
}

type Stops = 0 | 1 | 2 | 3

const getNumberStops = (stops: Stops) => {
    const value = {
        0: 'Без пересадок',
        1: '1 пересадка',
        2: '2 пересадки',
        3: '3 пересадки'
    }
    return value[stops]
}

export const Ticket: FC<|ITicketsProps> = (props) => {
    const {ticket, currencyСode} = props
    
    return (
        <div className="ticket">
            <div className="wrapper-price">
                <div className="ticket_company-name">
                    {ticket.carrier}
                    </div>
                <div className="ticket_price-wrapper">
                <div className="ticket_price">
                    <div>Купить</div>
                    <div>{`за ${ticket.price}-${currencyСode}`}</div>
                </div>
                </div>
            </div>
            <div className="ticket_content">
                <div className="ticket_start-point">
                    <div className="ticket_data-time">
                        {ticket.departure_time}
                    </div>
                    <div className="ticket_data-city">
                        {ticket.origin_name}
                    </div>
                    <div className="ticket_data-date">
                        {ticket.departure_date}
                    </div>
                </div>
                <div className="ticket_transfers">{getNumberStops(ticket.stops)}</div>
                <div className="ticket_end-point">
                <div className="ticket_data-time">
                        {ticket.arrival_time}
                    </div>
                    <div className="ticket_data-city">
                        {ticket.destination_name}
                    </div>
                    <div className="ticket_data-date">
                        {ticket.arrival_date}
                    </div>
                </div>
            </div>
        </div>
    )
}


/*
arrival_date: "12.05.18"
arrival_time: "22:10"
carrier: "TK"
departure_date: "12.05.18"
departure_time: "16:20"
destination: "TLV"
destination_name: "Тель-Авив"
origin: "VVO"
origin_name: "Владивосток"
price: 12400
stops: 3
*/