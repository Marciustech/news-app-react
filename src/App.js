import './App.css';
import NavComponent from './NavComponent';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [news, setNews] = useState(new Object())
  const [search, setSearch] = useState("Portugal")

  var url = 'https://newsapi.org/v2/everything?' +
          `q=${search}&` +
          `from=${(new Date).toISOString().split("T")[0]}` +
          `sortBy=popularity&` +
          `apiKey=e11860fa46804405afb585c24a127d29`

  const fetchNews = () => {
    axios.get(url)
    .then(res => {
      setNews(res.data.articles)
    })
  }

  useEffect(() => {
    fetchNews()
  }, [search])

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <>
      <NavComponent search={setSearch}/>
      <News news={news} search={search}/>
    </>
  );
}

export default App;
