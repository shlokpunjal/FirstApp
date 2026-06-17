import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Detail() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e' },
  text: { color: '#fff', fontSize: 32, marginBottom: 24 },
  back: { color: '#888', fontSize: 16 }
})