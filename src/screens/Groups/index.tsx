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
import { Loading } from '@components/Loading'

export function Groups() {
	const [isLoading, setIsLoading] = useState(true)
	const [groups, setGroups] = useState<string[]>([])

	const navigation = useNavigation()

	function handleNewGroup() {
		navigation.navigate('new')
	}

	async function fetchGroups() {
		try {
			setIsLoading(true)

			const data = await groupsGetAll()

			setGroups(data)

		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	function handleOpenGroup(group: string) {
		navigation.navigate('players', { group })
	}

	useFocusEffect(useCallback(() => {
		fetchGroups()
	}, []))

	return (
		<Container>
			<Header />

			<Highlight title="Turma" subtitle="Jogue com sua turma" />

			{
				isLoading ? <Loading /> :
					<FlatList
						data={groups}
						keyExtractor={(item) => item}
						renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
						contentContainerStyle={groups.length === 0 && { flex: 1 }}
						ListEmptyComponent={() => (
							<ListyEmpty message="Que tal cadastrar a primeira turma?" />
						)}
						showsVerticalScrollIndicator={false}
					/>
			}
			<Button title="Criar nova turma" onPress={handleNewGroup} />
		</Container>
	)
}
