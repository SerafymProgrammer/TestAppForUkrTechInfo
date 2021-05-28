import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from '../styles';
import Header from '../components/Header';

export default function ForumsScreen({navigation}) {
  const is_light_mode = useSelector(state => state.envReducer.isLigthMode);
  return (
    <View
      style={[
        styles.screen_wrap,
        is_light_mode ? {backgroundColor: 'white'} : {},
      ]}>
      <Header title={'Forums'} navigation={navigation} />

      <View
        style={[
          styles.screen_content_wrap,
          is_light_mode ? {backgroundColor: 'white'} : {},
        ]}>
        <ScrollView style={styles.screen_content}>
          <Text style={styles.screen_content_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            convallis malesuada feugiat. Sed gravida eros id interdum interdum.
            Donec blandit laoreet arcu ac tincidunt. Cras efficitur tempus
            lacus, nec sollicitudin purus imperdiet eget.{' '}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
