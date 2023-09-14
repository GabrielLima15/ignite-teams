/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import React from 'react'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { Loading } from '@components/Loading'
import { Routes } from './src/routes'

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Routes /> : <Loading />}
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
    </ThemeProvider>
  )
}
