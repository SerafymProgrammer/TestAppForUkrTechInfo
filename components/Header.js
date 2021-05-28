import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../styles';
import ArrowLeft from '../images/arrow_left.svg';
import Dots from '../images/dots.svg';



function Header(props) {
    const is_light_mode = useSelector(state => state.envReducer.isLigthMode);
    return (
      <View
        style={[
          styles.screen_header,
          is_light_mode ? {backgroundColor: 'white'} : {},
        ]}
        elevation={10}>
        <View style={styles.header_left_content}>
  
          <ArrowLeft onPress={() => props.navigation.goBack()} />
          <Text style={styles.screen_header_title}> {props.title}</Text>
        </View>
  
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={styles.header_dots_btn}>
          <Dots fill={is_light_mode ? '#4c4c4c' : 'white'} />
        </TouchableOpacity>
      </View>

    );
  }

  export default Header;
  