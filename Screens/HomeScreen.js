import { View, StyleSheet, ScrollView } from 'react-native';

import CategoryItem from '../Components/CategoryItem';
import SliderImages from '../Components/SliderImages';
import ItemScrollView from '../Components/ItemScrollView';
import ItemBanner from '../Components/ItemBanner';


export default function HomeScreen({navigation}) {
  return (
      <ScrollView>
    <View style={styles.mainContainer}>
       
          <CategoryItem navigation={navigation}/>
        

        <View style={styles.SliderImagescontainer}>
          <SliderImages />
        </View>
        <View style={styles.ItemSalesView}>
          <ItemBanner name={'laptops'} navigation={navigation} />
          <ScrollView horizontal>
            <ItemScrollView navigation={navigation} category={'Laptops'} />
            
          </ScrollView>
        </View>
        <View style={styles.ItemSalesView}>
          <ItemBanner name={'Printers'} navigation={navigation} />
          <ScrollView horizontal>
            <ItemScrollView navigation={navigation} category={'Printers'} />
            
          </ScrollView>
        </View>
        <View style={styles.ItemSalesView}>
          <ItemBanner name={'Phones'} navigation={navigation} />
          <ScrollView horizontal>
            <ItemScrollView navigation={navigation} category={'Phones'}/>
           
          </ScrollView>
        </View>
        <View style={styles.ItemSalesView}>
          <ItemBanner name={'Tvs'} navigation={navigation}/>
          <ScrollView horizontal>
            <ItemScrollView navigation={navigation} category={'Tvs'} />
           
          </ScrollView>
        </View>
        <View style={styles.ItemSalesView}>
          <ItemBanner name={'Accessories'} navigation={navigation} />
          <ScrollView horizontal>
            <ItemScrollView navigation={navigation} category={'Accessories'}/>
           
          </ScrollView>
        </View>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },

  SliderImagescontainer: {
    height: 150,
    marginTop: 10,
    marginHorizontal: 10,
  },
  ItemSalesView: {},
});
