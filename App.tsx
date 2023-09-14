/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import React from 'react'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading'
import { Players } from '@screens/Players'
import theme from './src/theme'

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Players /> : <Loading />}
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
    </ThemeProvider>
  )
}
