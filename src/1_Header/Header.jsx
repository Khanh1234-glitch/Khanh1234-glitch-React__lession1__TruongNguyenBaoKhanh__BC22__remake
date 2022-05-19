import React from 'react'

export default function Header() {
  return (
    <div>
    <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand text-light" href="#">Cybersoft</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-muted" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#">Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#">Forum</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
