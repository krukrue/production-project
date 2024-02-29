import React from 'react'

export const AboutPage = React.lazy(async () => await import('./about-page/about-page'))
export const MainPage = React.lazy(async () => await import('./main-page/main-page'))
export const NotFoundPage = React.lazy(async () => await import('./not-found-page/not-found-page'))
