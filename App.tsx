/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { StatusBar } from 'react-native'
import { Groups } from '@screens/Groups'
import { Loading } from '@components/Loading'
import { NewGroup } from '@screens/NewGroup'

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <NewGroup /> : <Loading />}
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
    </ThemeProvider>
  )
}
