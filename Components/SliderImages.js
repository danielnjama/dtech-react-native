import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import currentCategory from './Categories';

export default function SliderImages() {

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
    {currentCategory.length !==0? currentCategory.map(item =>(<View key={item.id} style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>)):null
      
    }
    </Swiper>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
