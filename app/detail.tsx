import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Detail() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => router.back()}>
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e' },
  text: {
    color: '#fff',
    fontSize: 32, 
    marginBottom: 16,
  },

  btn: {
    backgroundColor: '#dbdbdb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#a1a1a1",
  },

  btnText: {
    fontSize: 16,
    fontWeight: "500",
  },
})