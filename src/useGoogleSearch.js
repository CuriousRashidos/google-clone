
import {useState, useEffect} from 'react'
const useGoogleSearch = (term) => {
    const [data, setdata] = useState(null);
    useEffect(()=>{
    const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${enter your API KEY here}&cx=b1e95dc36f4ace91c&q=${term}`).then(response => response.json()).then(result => { setdata(result) })
    }
    fetchData();
    }, [term])
    return {data}
}
export default useGoogleSearch
