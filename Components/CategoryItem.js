import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
const laptop = 'https://api.dtechnologys.com//media/uploads/laptop.jpg';
const tv =
  'https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$730_584_PNG$';
const phone =
  'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.standard';
const accessories =
  'https://shop.dtechnologys.com/wp-content/uploads/2022/11/image-8.png';
const printer =
  'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c02918977.png';
const currentCategory = [
  {
    id: 1,
    category: 'Laptops',
    image: laptop,
  },
  {
    id: 2,
    category: 'Phones',
    image: phone,
  },
  {
    id: 3,
    category: 'Tvs',
    image: tv,
  },
  {
    id: 4,
    category: 'Printers',
    image: printer,
  },
  {
    id: 5,
    category: 'Accessories',
    image: accessories,
  },
];

export default function CategoryItem({ navigation }) {
  function categoryOnpressHandler(item) {
    const category = item.category;
    navigation.navigate('ShopScreen', { category });
  }
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.headerCategories}
      onPress={() => categoryOnpressHandler(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.categoryText}> {item.category} </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={currentCategory}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  headerCategories: {
    marginLeft: 10,
    padding: 2,
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius:10,
    borderColor: 'green'
  },
  image: {
    width: 80,
    height: 80,
    // borderRadius: '50%',
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
