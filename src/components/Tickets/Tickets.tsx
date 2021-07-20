import React, {FC} from "react";
import { TransfersFilterType } from "../../App";
import { TicketType } from "../../hooks/http.hook";
import { Ticket } from "../Ticket/Ticket";

type ITicketsProps = {
    currentStateTickets: Array<TicketType>
    transfersFilter: TransfersFilterType
    currencyСode: string
}


export const Tickets: FC<ITicketsProps> = (props) => {
   const {currentStateTickets, transfersFilter, currencyСode} = props

   if (props.currentStateTickets.length === 0) {
    return (
        <div>билетов нет</div>
    )
}

   const valuesForTransferFilter: Array<number> = Object.values(transfersFilter).reduce((acc: Array<number>, v, index) => {
    if (v) {
      return [...acc, index]
    }
    return acc
  }, [])

  const filteredTickets: Array<TicketType> = currentStateTickets.filter(t => valuesForTransferFilter.includes(t.stops))
        
    return (
        <div className="tickets_wrapper">
               {filteredTickets.map(t => <Ticket ticket={t} currencyСode={currencyСode}/>)}
        </div>
    )
}