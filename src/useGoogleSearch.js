
import {useState, useEffect} from 'react'
// const CONTEXT_KEY = 'b1e95dc36f4ace91c'
// const API_KEY = 'AIzaSyAP9V6vXWaVvf9b5-zlHNC8icZffCiIiOY'
const useGoogleSearch = (term) => {
    const [data, setdata] = useState(null);
    useEffect(()=>{
    const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAP9V6vXWaVvf9b5-zlHNC8icZffCiIiOY&cx=b1e95dc36f4ace91c&q=${term}`).then(response => response.json()).then(result => { setdata(result) })
    }
    fetchData();
    }, [term])
    return {data}
}
export default useGoogleSearch
