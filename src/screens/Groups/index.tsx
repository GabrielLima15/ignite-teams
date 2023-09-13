import { Header } from '@components/Header'
import { Container } from './styles'
import React from 'react'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turma" subtitle="Jogue com sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  )
}
