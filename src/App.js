import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { getUserDataFromBackend } from './QuickbaseFetchFunctions';
import ExampleRetriever from './ExampleRetriever';
import Menu from './Menu';
import SimpleQuizApp from './SimpleQuizApp';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

function App() {
  const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const [userID, setUserID] = useState(undefined);
  const [qbUserData, setQbUserData]= useState({name:'Loading Name',recordId:'Loading ID',emailAddress:'Loading Email'})

  useEffect(() => {
    if(user) {
        setUserID(user.email)
    }
  }, [isAuthenticated, user])

  useEffect(() => {
    if(userID) {
            async function getData() {
              try {
                const accessToken = await getAccessTokenSilently({
                  authorizationParams: {
                    audience: "https://lcs-api.herokuapp.com/",
                    scope: "openID email profile read:current_user update:current_user_metadata",
                  },
                });
                const userData = await getUserDataFromBackend(userID, accessToken)
                .then((result) => {
                  const usefulData = result[0].studentTable[0]
                  return usefulData
                });
                //console.log(userData)
                setQbUserData(userData)
                return userData
              } catch (e) {
                console.log(e.message);
              }
            }
            getData();
    }
  }, [userID])

  return (
    <div className="App" style = {{textAlign: 'center'}}>
      <div className='div-header'style = {{textAlign: 'center'}}>
        <h1>LearnCraft Spanish</h1>
        <LogoutButton />
        <LoginButton />
      </div>
      {isLoading && (
        <h2>Loading...</h2>
      )}
      {!isLoading && !isAuthenticated && (qbUserData.recordId === 'Loading ID') && (
        <h2>You must be logged in to use this app.</h2>
      )}
      {!isLoading && isAuthenticated && (qbUserData.recordId === 'Loading ID') && (
        <h2>Fetching user data...</h2>
      )}
      {/*isAuthenticated && (
        <Profile Name = {qbUserData.name} Email={qbUserData.emailAddress} ID = {qbUserData.recordId}/>
      )*/}
      {(qbUserData.recordId !== 'Loading ID') && (
        <SimpleQuizApp studentID={qbUserData.recordId} studentName={qbUserData.name}/>
      )}
    </div>
  );
}

export default App;
