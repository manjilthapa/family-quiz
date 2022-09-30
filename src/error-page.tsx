import React, { FunctionComponent } from "react"
import { useRouteError } from "react-router-dom"
export const ErrorPage: FunctionComponent = () => {
  const error: any = useRouteError()
  return (
    <div>
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
