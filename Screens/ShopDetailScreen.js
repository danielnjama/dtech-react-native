import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { Linking } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function ShopDetailScreen({ route, navigation }) {
  const { item } = route.params;
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  });
  const phoneNumber = '254717828927'; // Replace with the desired phone number

  function phoneCallHandler() {
    Linking.openURL(`tel:${phoneNumber}`);
  }
  const whatsappMessage = `Hello, I would like to purchase ${item.name} going for ${item.price.toLocaleString()}. Is it still available?`;
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;
  function whatsappButtonHandler() {
    Linking.openURL(whatsappUrl);
  }
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image source={{ uri: `https://api.dtechnologys.com${item.image}` }} style={styles.image} />
        <View style={{ borderBottomWidth: 2, borderColor: 'green' }}></View>
        <View style={styles.itemInfo}>
          <View>
            <Text style={styles.itemname}> {item.name} </Text>
            <Text style={styles.itemprice}> Ksh {item.price.toLocaleString()} </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: 'green',
              marginBottom: 10,
            }}></View>
          <Text style={styles.infotext}> {item.specs}</Text>
        </View>
      </ScrollView>
      <View style={styles.buyContainer}>
        <Pressable
          onPress={() => {
            navigation.dispatch(resetAction);
          }}>
          <Image source={require('../assets/house.png')} style={styles.icons} />
        </Pressable>
        <Pressable onPress={phoneCallHandler}>
          <Image source={require('../assets/call.png')} style={styles.icons} />
        </Pressable>
        <Pressable onPress={whatsappButtonHandler}>
          <Image
            source={require('../assets/whatsapp.png')}
            style={styles.icons}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  itemInfo: {
    marginTop: 3,
    padding: 5,
  },
  buyContainer: {
    backgroundColor: 'green',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  infotext: {
    fontSize: 20,
  },
  icons: {
    width: 40,
    height: 40,
  },
  itemname: {
    fontSize: 13,
    // fontWeight: 'bold'
  },
  itemprice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
