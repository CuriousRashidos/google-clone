import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import {useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'
import './Search.css'

import MicIcon from '@material-ui/icons/Mic'
import SearchIcon from '@material-ui/icons/Search'

function Search({hideButtons = false}){

    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const history = useHistory()

    const search = e => {
        e.preventDefault();
        console.log(' you pressed submit ', input)

        
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term : input,
            })
        history.push('/search')
        
    }

    return (
        <form className="search">
            <div className="search__input">    
                <SearchIcon className="search__InputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon /> 
            </div>
            
            <div className={!hideButtons ? "search__buttons" : "search__buttonsHidden"}>
                <Button type='submit' onClick={search}variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>

        </form>
    )
}
export default Search