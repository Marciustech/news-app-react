import React, { useEffect, useContext } from 'react'
import { AppContext } from './App';
import NewsCard from './NewsCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export default function News() {
    const { search } = useContext(AppContext)
    async function fetchNews(){
        let url = 'https://newsapi.org/v2/everything?' +
          `q=${search}&` +
          `from=${(new Date).toISOString().split("T")[0]}&` +
          `sortBy=popularity&` +
          `language=${window.navigator.language}&` +
          `apiKey=e11860fa46804405afb585c24a127d29` 
        const res = await axios.get(url);
        return res.data;
    }

    const { data, isLoading, isError, error, refetch } = useQuery(["newsQueryUniqueKey"], fetchNews)
    let newsHandler = (d) => {
        let arrayOfReactElements = []; 
        if(!d) return null
        //document.getElementById("newsHolder").innerHTML = "";
        Object.keys(d.articles).forEach(key => {
            arrayOfReactElements.push(<NewsCard id={key} key={key} articles={d.articles[key]} />);
        });
        return arrayOfReactElements
    } 

    useEffect(() => {
        refetch()
    }, [ search ])

    if(isLoading){
        return (<><h1>Today's <b>{search}</b> News:</h1>
                <hr></hr>
                <div className="text-center">
                    <div className="spinner-border" role="status"/>
                </div></>)
      }
      
          if(isError){
            return (<><h1>Today's <b>{search}</b> News:</h1>
                    <hr></hr>
                        <div className="text-center">{error.code}</div>
                        <div className="text-center">{error.message}</div>
                        <div className="text-center">{error.response.data.message}</div>
                    </>) 
          }
  return (
    <div className='container-fluid bg-body text-body'>
        <h1>Today's <b>{search}</b> News:</h1>
        <hr></hr>
        <div id='newsHolder' className='d-flex flex-column flex-wrap justify-content-evenly'>
            {newsHandler(data)}
        </div>
        
    </div>
  )
}