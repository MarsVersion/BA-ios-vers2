import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';

export default function BAOPVerfahrenScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCaption, setSelectedCaption] = useState(null);
  
    const imageData = [
        {
            source: require('../assets/OPZ 01.jpg'),
            caption: 'OAGB\nONE ANASTOMOSIS GASTRIC BYPASS'
        },
        {
            source: require('../assets/OPZ 02.jpeg'),
            caption: 'RNY - Bypass'
        },
        {
            source: require('../assets/OPZ 03.jpeg'),
            caption: 'Leckage'
        },
        {
            source: require('../assets/OPZ 04.jpeg'),
            caption: ''
        },
        {
            source: require('../assets/OPZ 05.jpeg'),
            caption: ''
        },
        {
            source: require('../assets/OPZ 06.jpeg'),
            caption: ''
        },
        {
            source: require('../assets/OPZ 07.jpeg'),
            caption: '1. Sleeve Gastrectomy\n2. → RNY (Standard)\n3. → Verlängerung BPL auf 240cm\n4. Gastro plikatur'
        },
        {
            source: require('../assets/OPZ 08.jpeg'),
            caption: 'Funktionelle Stenose - "Twisting" der Klammernaht'
        },
        {
            source: require('../assets/OPZ 09.jpeg'),
            caption: 'Anti-Reflux-Nissen-Sleeve'
        },
        {
            source: require('../assets/OPZ 10.jpeg'),
            caption: 'Transit Bipartition with Sleeve: "Santoro" Operation'
        },
        {
            source: require('../assets/OPZ 11.jpeg'),
            caption: 'Loop Transit Bipartition: BRAUN\'S-JJ'
        }
    ];
  
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>OP-Skizze</Text>
                    
                    {imageData.map((item, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Text style={styles.imageCaption}>{item.caption}</Text>
                            <TouchableOpacity 
                                onPress={() => {
                                    setSelectedImage(item.source);
                                    setModalVisible(true);
                                }}
                                style={styles.imageContainer}
                            >
                                <Image 
                                    source={item.source}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
    
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Image
                        source={selectedImage}
                        style={styles.fullScreenImage}
                        resizeMode="contain"
                    />
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: 'Poppins_700Bold',
        color: '#000000',
        marginBottom: 5,
        marginTop: 80,
        textAlign: 'center',
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#7a0202',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    imageWrapper: {
        marginVertical: 25,
        width: '90%',
        alignSelf: 'center',
    },
    imageCaption: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#7a0202',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#7a0202',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    backButton: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: '#7a0202',
        padding: 15,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    backButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
