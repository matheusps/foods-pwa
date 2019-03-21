import history from '../history'
import auth0, { Auth0DecodedHash, WebAuth } from 'auth0-js'
import authConfig from '../config'

class AuthService implements IAuthentication {
  private accessToken: string
  private idToken: string
  private expiresAt: number
  private auth0: WebAuth

  constructor(config: IAuthConfig) {
    this.accessToken = ''
    this.idToken = ''
    this.expiresAt = 0
    this.auth0 = new auth0.WebAuth(config)
  }

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
    this.accessToken = authResult.accessToken!
    this.idToken = authResult.idToken!
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

export default new AuthService(authConfig)
