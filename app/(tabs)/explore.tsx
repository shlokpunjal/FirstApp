import { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFetch } from '@/hooks/useFetch'

type User = {
  id: number
  name: string
  email: string
}

export default function Explore() {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.loadingText}>Error: {error}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={<Text style={styles.heading}>Users</Text>}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0e0e0e",
  },

  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  heading: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 32,
    marginBottom: 16,
  },

  userCard: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
  },

  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "500",
  },

  userEmail: {
    color: "#cfcece"
  },
})