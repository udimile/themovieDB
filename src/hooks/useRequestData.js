import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const getData = (url) => {

    setLoading(true)

        axios.get(url)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

//     const getData = (url) => {
//         url.then(res => {
//         setLoading(false)
//         setData(res.data)

//     }).catch(e => {
//         console.log("error", e)
//         setLoading(false)
//     })
// }
    useEffect(() => {
        getData(url)
    }, [url])

    return [data, loading, getData]
}

export default useRequestData