import { Text, View, StyleSheet, Pressable } from 'react-native';


export default function ItemBanner({name, navigation}) {
  return (
    <View style={styles.ItemBanner}>
    <View>
      <Text>Top Deals </Text>
      <Text style={styles.item}>{name} </Text>
    </View>
    
      <Pressable onPress={()=>{
        navigation.navigate('ShopScreen',{'category':''}) 
      }}>
        <Text> View All </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  ItemBanner: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
