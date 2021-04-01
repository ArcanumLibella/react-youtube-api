import React from 'react'
import './App.css'
import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import Header from './components/Header'
import VideosList from './components/VideosList'
import VideoDetails from './components/VideoDetails'

class App extends React.Component {
  state = { videos: [] }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container max-screen-xl mx-auto'>
          <SearchBar onFormSubmit={this.onTermSubmit}/>

          <div className='md:flex md:justify-between m-4 mt-8'>
            <VideoDetails />
            <VideosList />
          </div>
        </main>
      </div>
    )
  }
}

export default App
