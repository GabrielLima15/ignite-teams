import { Header } from '@components/Header'
import { Container } from './styles'
import { useState } from 'react'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { FlatList } from 'react-native'
import { ListyEmpty } from '@components/ListEmpty'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title="Turma" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListyEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  )
}
