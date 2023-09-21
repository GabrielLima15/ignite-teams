import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { useState, useCallback } from 'react'

import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListyEmpty } from '@components/ListEmpty'
import { Header } from '@components/Header'
import { Button } from '@components/Button'

import { Container } from './styles'
import { groupsGetAll } from '@storage/group/groupsGetAll'

export function Groups() {
	const [groups, setGroups] = useState<string[]>([])

	const navigation = useNavigation()

	function handleNewGroup() {
		navigation.navigate('new')
	}

	async function fetchGroups() {
		try {
			const data = await	groupsGetAll()
			setGroups(data)
		} catch (error) {
			console.log(error)
		}
	}

	useFocusEffect(useCallback(() => {
		fetchGroups()
	}, []))

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
				showsVerticalScrollIndicator={false}
			/>

			<Button title="Criar nova turma" onPress={handleNewGroup} />
		</Container>
	)
}
