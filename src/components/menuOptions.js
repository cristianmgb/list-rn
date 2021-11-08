import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

function MenuItem(props) {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => props.action(props.data.item.title)}
      style={[styles.card, {backgroundColor: props.data.item.color}]}>
      <Image style={styles.cardImage} source={{uri: props.data.item.image}} />
      <Text style={styles.title}>{props.data.item.title}</Text>
    </TouchableOpacity>
  );
}

const MenuOptions = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.data}
        horizontal={false}
        keyExtractor={item => item.id}
        renderItem={item => {
          return <MenuItem data={item} action={props.click} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    backgroundColor: '#E6E6E6',
  },
  card: {
    width: width,
    height: 150,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 40,
  },
});

export default MenuOptions;
