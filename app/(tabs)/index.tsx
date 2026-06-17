import { useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity onPress={() => router.push('/detail')}>
        <Text style={styles.btn}>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0e0e0e' },
  text: { color: '#fff', fontSize: 32 },
  btn: {color: '#fff'}
})