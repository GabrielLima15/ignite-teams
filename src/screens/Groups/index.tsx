import { Header } from '@components/Header'
import { Container } from './styles'
import React from 'react'
import { Highlight } from '@components/Highlight'

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turma" subtitle="Jogue com sua turma" />
    </Container>
  )
}
