import history from '../../history'
import auth0, { Auth0DecodedHash, WebAuth } from 'auth0-js'

export default class Auth {
  private accessToken: any = ''
  private idToken: any = ''
  private expiresAt: any = 0

  private auth0: WebAuth = new auth0.WebAuth({
    domain: 'matheusps.auth0.com',
    clientID: 'kvdH3Y0PQDugcCS7k3iJucQxYnM3JSKF',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid',
  })

  handleAuthentication = () =>
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        history.replace('/home')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })

  getAccessToken = () => this.accessToken

  getIdToken = () => this.idToken

  setSession = (authResult: Auth0DecodedHash) => {
    localStorage.setItem('isLoggedIn', 'true')
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = authResult.expiresIn! * 1000 + new Date().getTime()
    history.replace('/home')
  }

  renewSession = () =>
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        console.log(err)
        alert(
          `Could not get a new token (${err.error}: ${err.errorDescription}).`
        )
      }
    })

  login = () => {
    this.auth0.authorize()
  }

  logout = () => {
    this.accessToken = ''
    this.idToken = ''
    this.expiresAt = 0
    localStorage.removeItem('isLoggedIn')
    history.replace('/home')
  }

  isAuthenticated = () => new Date().getTime() < this.expiresAt
}
