import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export type TicketType = {
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: 0 | 1 | 2 | 3
    price: number
}

export type TicketsType = Array<TicketType>

type UseHttpType = {
    tickets: Array<TicketType>
    loading: boolean
    getPrice: () => Promise<any>
}


export const useHttp = (): UseHttpType => {
    const [tickets, setTickets] = useState<TicketsType>([])
    const [loading, setLoading] = useState(false)

    const getPrice = async (): Promise<object> => {
        try {
            const response = await axios.get('http://api.currencylayer.com/live?access_key=816daecdb6c897bdb6ffa5739cf6b342')
            return response.data.quotes 
        } catch (error) {
            throw error
        }
    }

    async function getTickets<TicketsType>(): Promise<TicketsType> {
        const response: TicketsType = await axios.get('/tickets.json')
        //const response: TicketsType = await axios.get('https://altuninovich.github.io/airtickets/tickets.json')
        return response
       }

    useEffect(() => {
        setLoading(true)
        const response = getTickets()
        response.then((p: any) => {
            const {tickets} = p.data
            setTickets(tickets)
            setLoading(false)
        })
    }, [])

    return {tickets, loading, getPrice}
}