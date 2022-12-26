import React from 'react'
import NewsCard from './NewsCard'

export default function News({news, search}) {
    const state = {news}.news

    const newsHandler = () => {
        var arrayOfReactElements = [];

        Object.keys(state).forEach(key => {
            arrayOfReactElements.push(<NewsCard Key={key} value={state[key]} />);
        });
        return arrayOfReactElements
    }

  return (
    <div className='container-fluid bg-secondary text-white'>
        <h1>Today's "{search}" News:</h1>
        <hr></hr>
        <div className='d-flex flex-wrap justify-content-evenly'>
            {newsHandler()}
        </div>
        
    </div>
  )
}