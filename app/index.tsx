import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      key: 1,
      title: "Génie Logiciel",
      description: "Accédez aux ressources complètes pour le développement de logiciels, les algorithmes et la gestion de projets.",
      backgroundImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
      key: 2,
      title: "Sécurité Informatique",
      description: "Découvrez comment protéger les systèmes et les données dans l'ère du numérique, en toute sécurité.",
      backgroundImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    },
    {
      key: 3,
      title: "Réseaux Informatiques",
      description: "Maîtrisez les bases des réseaux, des protocoles et de la configuration des systèmes informatiques.",
      backgroundImage: 'https://images.pexels.com/photos/1181306/pexels-photo-1181306.jpeg',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(auth)/register'); // Naviguer vers la page d'inscription
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Swiper
      loop={false}
      index={currentSlide}
      onIndexChanged={(index) => setCurrentSlide(index)}
      showsPagination={false}
    >
      {slides.map((slide) => (
        <ImageBackground
          key={slide.key}
          source={{ uri: slide.backgroundImage }}
          style={styles.backgroundImage}
        >
          <TouchableOpacity style={styles.skipButton} onPress={() => router.replace('/(auth)/register')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>

          <View style={styles.buttonContainer}>
            {currentSlide > 0 && (
              <TouchableOpacity onPress={handlePrevious} style={styles.navigationButton}>
                <Ionicons name="chevron-back" size={24} color="#32da44" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleNext} style={styles.navigationButton}>
              <Ionicons name={currentSlide === slides.length - 1 ? "checkmark" : "chevron-forward"} size={24} color="#32da44" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    color: '#32da44',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    height: '40%',
    margin: 20,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#32da44',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  navigationButton: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
