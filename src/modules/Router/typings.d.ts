interface IRouter {
  routes: Routes<any, { default: React.ComponentType }>
  history: History<any>
  fallback?: NonNullable<React.ReactNode>
  Wrapper: React.ElementType<any>
}
