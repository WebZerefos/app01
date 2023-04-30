import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCard from './components/FlatCard';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

// video 10
