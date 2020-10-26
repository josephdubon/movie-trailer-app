import React from 'react'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import requests from './requests'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentary' fetchUrl={requests.fetchDocumentaryMovies} />
    </div>
  )
}

export default App
