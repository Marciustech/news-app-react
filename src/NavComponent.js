import React from 'react'

export default function NavComponent({search}) {
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(document.getElementById("mySearch").value)
    search(document.getElementById("mySearch").value)
  }

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">E-NEWS</a>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" id='mySearch' type="search" placeholder="Search" aria-label="Search"/>
              <input className="btn btn-outline-success" type="submit" value="Search" />
             </form>
        </div>
    </nav>
  )
}