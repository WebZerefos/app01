import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contacts} from '../services/data';

const ContactList = () => {
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(item => (
          <View key={item.id} style={styles.userCard}>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <View style={styles.userInfo}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#cecece',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginVertical: 3,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textName: {
    fontWeight: 'bold',
    color: '#687387',
  },
  textStatus: {
    fontSize: 10,
    color: '#777777',
  },
});
