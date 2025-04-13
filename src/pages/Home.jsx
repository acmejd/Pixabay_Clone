import React, { useContext } from 'react'
import PixabayContext from '../components/PixabayContext'

const Home = () => {
    console.log(useContext(PixabayContext))
    const { imageData } = useContext(PixabayContext)
    return (
        <div className="container">
            <div className='flex my-3'>
                {imageData.map((image) => <div key={image.id}>
                    <div className="items">
                        <img src={image.largeImageURL} alt="" />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Home