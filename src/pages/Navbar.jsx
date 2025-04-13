import React, { useContext } from 'react'
import PixabayContext from '../components/PixabayContext'

const Navbar = () => {
    const {fetchImageByCategory, setQuery} = useContext(PixabayContext)
    return (
        <div>
            <div className="container my-3 text-center">
                <button type="button" onClick={() => fetchImageByCategory("nature")} className="btn btn-outline-primary mx-3">Nature</button>
                <button type="button" onClick={() => fetchImageByCategory("fashion")} className="btn btn-outline-light mx-3">Fashion</button>
                <button type="button" onClick={() => fetchImageByCategory("animal")} className="btn btn-outline-warning mx-3">Animal</button>
                <button type="button" onClick={() => fetchImageByCategory("food")} className="btn btn-outline-danger mx-3">Food</button>
                <button type="button" onClick={() => fetchImageByCategory("transport")} className="btn btn-outline-warning mx-3">Transport</button>
                <button type="button" onClick={() => fetchImageByCategory("buildings")} className="btn btn-outline-info mx-3">Buildings</button>
                <button type="button" onClick={() => fetchImageByCategory("computer")} className="btn btn-outline-light mx-3">Computer</button>
                <button type="button" onClick={() => fetchImageByCategory("health")} className="btn btn-outline-warning mx-3">Health</button>
            </div>
            <div className='container text-center style={{width:"800px"}}'>
                <input type="search" className="form-control bg-dark text-light" onChange={(e)=>setQuery(e.target.value)}/>
            </div>
        </div>
    )
}

export default Navbar
