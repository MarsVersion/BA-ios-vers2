import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BAKontakt() {
  // State to track whether there's an error loading the link
  const [linkAvailable, setLinkAvailable] = useState(true);

  // Handle email press to open email client
  const handleEmailPress = () => {
    Linking.openURL('mailto:chirurgie@klinikum-vest.de').catch((err) =>
      Alert.alert('Fehler', 'E-Mail konnte nicht geöffnet werden. Bitte überprüfen Sie Ihre E-Mail-App.')
    );
  };

  // Handle phone calling capability
  const handlePhonePress = () => {
    const phoneNumber = 'tel:+4923615683155';
    Linking.openURL(phoneNumber).catch((err) =>
      Alert.alert('Fehler', 'Anruf konnte nicht getätigt werden.')
    );
  };

  // Handle link press with error fallback
  const handleLinkPress = async () => {
    try {
      // Try to open the link
      const supported = await Linking.canOpenURL(
        'https://klinikum-vest.de/Inhalt/Kliniken_Zentren_Bereiche/Zentren/Recklinghausen/Westdeutsches_Adipositaszentrum/Magenverkleinerung/#BMI-Rechner'
      );
      if (supported) {
        await Linking.openURL(
          'https://klinikum-vest.de/Inhalt/Kliniken_Zentren_Bereiche/Zentren/Recklinghausen/Westdeutsches_Adipositaszentrum/Magenverkleinerung/#BMI-Rechner'
        );
      } else {
        throw new Error('URL not supported');
      }
    } catch (error) {
      // Set linkAvailable to false to show fallback UI
      setLinkAvailable(false);
    }
  };

  return (
    <LinearGradient colors={['#ffffff', '#7a0202']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.redCircle} />

        {/* Fallback UI for when the link is not available */}
        {!linkAvailable ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Die angeforderte Webseite ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.
            </Text>
          </View>
        ) : (
          <View style={styles.additionalInfo}>
            <Text style={styles.infoText}>
              Der Bariatric Assistant ermöglicht abhängig vom Schweregrad der Adipositas eine erste Einschätzung der
              Therapiemöglichkeit (operativ/konservativ) und ersetzt nicht die Beratung durch einen erfahrenen Arzt.
            </Text>
            <Text style={styles.infoText}>Neben dem BMI sind wichtige Nebendiagnosen von Bedeutung.</Text>
            <Text style={styles.infoText}>
              Falls eine operative Therapie in Betracht kommt, sollte ein Adipositaszentrum kontaktiert werden.
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Prof. Dr. Martin Büsing</Text>
              {"\n"}
              <Text style={styles.regularText}>Westdeutsches Adipositaszentrum</Text>
            </Text>

            <Text>{"\n"}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.contactText}>Westdeutsches Adipositaszentrum</Text>
              <Text style={styles.contactText}>Klinikum Vest GmbH</Text>
              <Text style={styles.contactText}>Dorstener Straße 151</Text>
              <Text style={[styles.contactText, { marginBottom: 10 }]}>45657 Recklinghausen</Text>
    
              <TouchableOpacity onPress={handleEmailPress}>
  <Text style={styles.emailText}>Email: chirurgie@klinikum-vest.de</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handlePhonePress}>
<Text style={[styles.contactText, { marginTop: 10, textDecorationLine: 'underline' }]}>Tel: +49 2361 56 83 155</Text>
</TouchableOpacity>
<Text style={[styles.contactText, { marginTop: 10 }]}>Wir sind von 8.30 bis 14.00 Uhr erreichbar.</Text>

            </View>


          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'flex-start',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    marginTop: 10,
    marginBottom: 30,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  errorText: {
    fontSize: 16,
    color: '#FF0000',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  additionalInfo: {
    marginTop: 50,
    padding: 10,
    width: '95%',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'left',
    marginTop: 10,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
  regularText: {
    fontStyle: 'normal',
    fontSize: 14,
    color: '#000000',
  },
  textContainer: {
    alignSelf: 'flex-start',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  contactText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#f0f0f0',
    marginBottom: 0,
    textAlign: 'left',
    marginTop: 0,
  },
  emailText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#f0f0f0',
    textDecorationLine: 'underline',
    textAlign: 'left',
  },

});
