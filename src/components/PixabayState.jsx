import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([])
  const [query, setQuery] = useState("india")

  const api_key = "49679205-2c02a73b9591c4117cfd4fb09"
  
  useEffect(() => {
    const fetchDataByAPI = async () => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`)
      const data = await api.json()
      // console.log(data)
      setImageData(data.hits)

    }
    fetchDataByAPI()

  }, [query])

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`)
    const data = await api.json()
    // console.log(data)
    setImageData(data.hits)
  }

  const fetchBySearch = async () => {
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`)
    const data = await api.json()
    console.log(data)
    setImageData(data.hits)
  }

  return (
    <>
      <PixabayContext.Provider value={{
        imageData,
        query,
        setQuery,
        fetchImageByCategory,
        // fetchBySearch

      }}>{props.children}</PixabayContext.Provider>
    </>
  )
}

export default PixabayState
