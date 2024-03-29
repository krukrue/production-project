import React from 'react'
import { ErrorPage } from 'widgets/page-error'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (/* error: Error */) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // eslint-disable-next-line i18next/no-literal-string
      return <React.Suspense><ErrorPage></ErrorPage></React.Suspense>
    }
    return children
  }
}

export default ErrorBoundary
