import React, { useContext } from 'react'
import { AppContext } from './App';

export default function NavComponent() {
  const { setSearch } = useContext(AppContext)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(event.target.SearchBar.value.length !== 0) setSearch(event.target.SearchBar.value)
  }

  const handleChange = (event) =>{
    if(event.target.value.length !== 0) setSearch(event.target.value)
  }

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">E-NEWS</a>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" onChange={handleChange} name='SearchBar' type="search" placeholder="Search" aria-label="Search"/>
              <input className="btn btn-outline-success" type="submit" value="Search" />
             </form>
        </div>
    </nav>
  )
}