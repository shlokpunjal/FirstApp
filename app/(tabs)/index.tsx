import { useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.subtext}>This is the home</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/detail')} >
        <Text style={styles.btnText}>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0e0e0e' },
  text: {
    color: '#fff',
    fontSize: 32
  },

  btn: {
    backgroundColor: '#dbdbdb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "#a1a1a1",
  },

  btnText: {
    fontSize: 16,
    fontWeight: "500",
  },

  subtext: {
    color: '#b6b5b5', 
    fontSize: 12,
    marginTop: 8,
  },
})