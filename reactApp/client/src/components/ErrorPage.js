import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
        </div>
        <h2>We are sorry, page not found!</h2>
        <p className='mb-5'>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable
        </p>
        <a href="/">Back To Homepage</a>
      </div>
    </>
  )
}

export default ErrorPage