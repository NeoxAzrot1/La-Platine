import React from 'react';
import SpotifyProvider from 'components/SpotifyProvider'
import Router from './Router.js'

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const App = () => {
  return (
    <SpotifyProvider clientId={spotifyClientId} redirectUri={spotifyRedirectUri} >
      <Router/>
    </SpotifyProvider>
  )
}

export default App
