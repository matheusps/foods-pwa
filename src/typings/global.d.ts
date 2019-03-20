interface Authentication {
  handleAuthentication(): void
  getAccessToken(): any
  getIdToken(): any
  setSession(authResult: Auth0DecodedHash): void
  renewSession(): void
  login(): void
  logout(): void
  isAuthenticated(): boolean
}

interface AuthConfig {
  domain: string
  clientID: string
  redirectUri: string
  responseType: string
  scope: string
}

interface PageProps {}
