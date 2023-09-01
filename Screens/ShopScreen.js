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

export default function ShopScreen({ navigation, route }) {
  const [currentData, SetCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call with setTimeout
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
      // setData('Fetched Data');
    }, 2000);
  }, []);
  const { category } = route.params;
  category
    ? (filteredData = currentData.filter((item) => item.category === category))
    : (filteredData = currentData);

  const img = 'https://api.dtechnologys.com//media/uploads/laptop.jpg';
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.singleItem}
      onPress={() => navigation.navigate('ShopDetailScreen', { item })}>
      <Image
        source={{ uri: `https://api.dtechnologys.com${item.image}` }}
        style={styles.image}
      />
      <Text> {item.name} </Text>
      <Text> Ksh {item.price.toLocaleString()} </Text>
      <Pressable
        style={styles.Button}
        onPress={() => navigation.navigate('ShopDetailScreen', { item })}>
        <Text style={{ color: 'white' }}> See more </Text>
      </Pressable>
    </Pressable>
  );
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <View style={styles.mainContainer}>
            <View>
              <FlatList
                ListEmptyComponent={
                  <View style={styles.textContainer}>
                    <Text>No data at the moment. Please check back later.</Text>
                  </View>
                }
                data={filteredData ? filteredData : currentData}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  image: {
    width: '90%',
    height: 120,
  },
  singleItem: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'green',
    // marginLeft: 2,
    padding: 5,
  },
  Button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginHorizontal: 8,
    marginTop: 6,
  },
});
