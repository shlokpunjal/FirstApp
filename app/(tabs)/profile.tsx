import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@/context/ThemeContext'

export default function Profile() {
  const { isDark, colors, toggleTheme } = useTheme()

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: colors.header }]}>
          <Text style={[styles.headerText, { color: colors.text }]}>My Profile</Text>
        </View>

        <View style={styles.profile}>
          <View style={[styles.pfpHolder, { backgroundColor: colors.card }]}>
            <Text style={styles.pfpImage}>👤</Text>
          </View>
          <Text style={[styles.name, { color: colors.text }]}>Shlok Punjal</Text>
          <Text style={[styles.profession, { color: colors.subtext }]}>React Native Dev</Text>
        </View>

        <View style={[styles.hr, { borderColor: colors.subtext }]}></View>

        <View style={styles.mid}>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardText, { color: colors.text }]}>📧 punjalshlok@gmail.com</Text>
          </View>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardText, { color: colors.text }]}>📍 Solapur, India</Text>
          </View>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardText, { color: colors.text }]}>🎂 18 years old</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.themeBtn} onPress={toggleTheme}>
          <Text style={styles.themeBtnText}>
            Switch to {isDark ? 'Light' : 'Dark'} Mode
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, width: "100%", justifyContent: "space-between", alignItems: "center" },
  header: { width: "100%", padding: 20 },
  headerText: { fontSize: 24, textAlign: "center" },
  mid: { width: "90%", gap: 4 },
  profile: { alignItems: "center" },
  pfpHolder: {
    width: 120, height: 120, justifyContent: "center", alignItems: "center",
    borderWidth: 1, borderRadius: 60, borderColor: "#5f5f5f",
  },
  pfpImage: { fontSize: 30 },
  name: { fontSize: 24, margin: 8, marginTop: 24 },
  profession: { fontSize: 20 },
  hr: { borderBottomWidth: StyleSheet.hairlineWidth, width: "85%" },
  card: { width: "100%", padding: 24, borderRadius: 12, margin: 6 },
  cardText: { textAlign: "left", fontSize: 16 },
  themeBtn: {
    backgroundColor: "#333", paddingVertical: 14, paddingHorizontal: 24,
    borderRadius: 12, marginBottom: 12,
  },
  themeBtnText: { color: "#fff", fontSize: 14, textAlign: "center" },
  submitBtn: { backgroundColor: "#fff", padding: 24, width: "90%", borderRadius: 16, bottom: 8 },
  submitText: { fontSize: 20, textAlign: "center" },
})