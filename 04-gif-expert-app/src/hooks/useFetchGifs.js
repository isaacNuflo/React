import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (query, filter) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(query, filter)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [query, filter])
    return state;
}