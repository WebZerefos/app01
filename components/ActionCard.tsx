import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1400/1*Me-Ma8yt8dx3esyjj7j2KQ.png',
          }}
          style={styles.image}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Read more</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  card: {
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: '900',
    color: '#687387',
    alignSelf: 'center',
  },
  image: {
    height: 150,
  },
  bodyContainer: {
    padding: 8,
  },
  bodyText: {
    lineHeight: 20,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  footerText: {
    color: '#428bca',
    fontWeight: 'bold',
  },
});
