import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BAOPVerfahren() {
  return (
    <LinearGradient colors={['#ffffff', '#7a0202']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>OP-Verfahren</Text>
          
          <Image 
  source={require('../assets/OPZ 01.jpg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 02.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 03.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 04.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 05.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 06.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 07.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 08.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 09.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 10.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
<Image 
  source={require('../assets/OPZ 11.jpeg')} 
  style={styles.image}
  resizeMode="contain"
/>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000000',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300, // Increased height for better visibility
    marginVertical: 10,
  },
});
