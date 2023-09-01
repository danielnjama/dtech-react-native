import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';


export default function ItemScrollView({ navigation, category }) {
  const [currentData, SetCurrentData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      fetch('https://api.dtechnologys.com/hispecs/')
        .then((response) => response.json())
        .then((apiData) => {
          SetCurrentData(apiData);
          setLoading(false);

          // console.log('Updated data:', data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
   
    }, 2000);
  }, []);

  
  category
    ? (filteredData = currentData.filter((item) => item.category === category))
    : (filteredData = currentData);
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.singleItem}
      onPress={() => {
        navigation.navigate('ShopDetailScreen', { item });
      }}>
      <Image
        source={{ uri: `https://api.dtechnologys.com${item.image}` }}
        style={styles.image}
      />
      <Text style={styles.itemName}> {item.name} </Text>
      <Text style={styles.itemPrice}> Ksh {item.price.toLocaleString()} </Text>
    </Pressable>
  );
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          {filteredData.length !== 0 ? (
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              horizontal
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text> No items at the moment </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  singleItem: {
    width: 110,
    flex: 1,
    marginLeft: 5,
    margin: 10,
  },
  image: {
    height: 130,
    width: 110,
  },
  itemName: {
    fontSize: 12,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
