import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile(){
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.pfpHolder}>
            <Text style={styles.pfpImage}>👤</Text>
          </View>
          <Text style={styles.name}>Shlok Punjal</Text>
          <Text style={styles.profession}>React Native Dev</Text>
        </View>

        <View style={styles.hr}></View>

        <View style={styles.mid}>
          <View style={styles.card}>
            <Text style={styles.cardText}>📧 punjalshlok@gmail.com</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>📍 Solapur, India</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>🎂 18 years old</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0e0e0e",
  },

  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#111",
    width: "100%",
    padding: 20,
  },

  headerText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },

  mid: {
    width: "90%",
    gap: 4,
  },

  profile: {
    // justifyContent: "center",
    alignItems: "center",
  },

  pfpHolder: {
    width: 120,
    height: 120,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#5f5f5f",
  },

  pfpImage: {
    fontSize: 30,
  },

  name: {
    color: "#fff",
    fontSize: 24,
    margin: 8,
    marginTop: 24,
  },

  profession: {
    color: "#a19f9f",
    fontSize: 20,
  },

  hr: {
    borderColor: "#a19f9f",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "85%",
  },

  card: {
    width: "100%",
    padding: 24,
    backgroundColor: "#111",
    borderRadius: 12,
    margin: 6,
  },

  cardText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 16,
  },

  submitBtn: {
    backgroundColor: "#fff",
    padding: 24,
    width: 348,
    borderRadius: 16,
    bottom: 24,
  },

  submitText: {
    fontSize: 20,
    textAlign: "center",
  },
})