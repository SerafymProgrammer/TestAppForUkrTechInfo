/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Alert} from 'react-native';
import styles from './styles';
import ArrowLeft from './images/arrow_left.svg';
import Dots from './images/dots.svg';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import menu_data from './data';
import TriengleUp from './images/Triengle_up.svg';
import TriangleDown from './images/Triangle_down.svg';
import {envActions} from './redux/actions';
import {BoxShadow} from 'react-native-shadow';

const shadowOpt = {
  width: Dimensions.get('screen').width,
  height: 68,
  color: '#222222',
  border: 2,
  radius: 5,
  opacity: 0.2,
  x: 0,
  y: 5,
  // style:{marginVertical:5}
};

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
        {/* <ArrowLeft /> */}

        <ArrowLeft onPress={() => props.navigation.goBack()} />
        <Text style={styles.screen_header_title}> {props.title}</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={styles.header_dots_btn}>
        <Dots fill={is_light_mode ? '#4c4c4c' : 'white'} />
      </TouchableOpacity>
    </View>
    // </BoxShadow>
  );
}

function HomeScreen({navigation}) {
  const is_light_mode = useSelector(state => state.envReducer.isLigthMode);
  return (
    <View
      style={[
        styles.screen_wrap,
        is_light_mode ? {backgroundColor: 'white'} : {},
      ]}>
      <Header title={'Home page'} navigation={navigation} />

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
            lacus, nec sollicitudin purus imperdiet eget. Aenean tempus purus
            vitae erat luctus cursus. Aliquam et ipsum eu risus facilisis
            commodo non nec ex. Ut quis diam ut purus ultrices commodo
            pellentesque quis magna. Proin sollicitudin elit eget orci
            malesuada, eget iaculis turpis sodales. Nullam feugiat ligula
            placerat, mattis est quis, commodo lectus. Morbi id magna ac lacus
            convallis dapibus. Curabitur sollicitudin, ligula vel interdum
            efficitur, sem mi pulvinar neque, fringilla condimentum metus augue
            eu mi. Praesent interdum nisl quis elit efficitur imperdiet.
            Suspendisse in dapibus mi. Vivamus aliquam condimentum purus eget
            tempor. Pellentesque viverra nibh a finibus finibus. Suspendisse
            diam ipsum, egestas nec accumsan sed, ultrices eu tortor. Morbi
            maximus rutrum elit eu facilisis. Aliquam tincidunt lectus sed velit
            porta, vitae dictum turpis placerat. Donec luctus lorem eget risus
            lacinia, eget ornare mi eleifend. Praesent accumsan orci dignissim
            justo porttitor aliquam. Integer placerat orci a maximus hendrerit.
            Etiam in mi molestie, elementum lacus sed, pellentesque nisl. In hac
            habitasse platea dictumst. Vivamus nec dui eget augue egestas
            malesuada. Proin non vehicula nibh. Nunc efficitur neque eu augue
            auctor pulvinar. Ut vitae nunc nibh. Cras placerat efficitur tellus,
            sed gravida velit tincidunt in. Nunc facilisis sit amet nisl
            tincidunt laoreet. Integer eget aliquet turpis. Pellentesque
            pulvinar efficitur sapien eu vehicula. Aliquam nibh arcu, dictum
            quis eleifend et, congue ac nibh. Sed diam dolor, fringilla sit amet
            mauris ut, aliquam hendrerit augue. Quisque ac arcu vel magna
            posuere bibendum. Donec blandit fermentum libero, non sollicitudin
            sem pharetra quis. Mauris tempus, magna vulputate accumsan
            porttitor, erat diam consequat nisi, a feugiat purus mi et neque.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

function ForumsScreen({navigation}) {
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

const Drawer = createDrawerNavigator();

const CustomDrawer = ({navigation, initIdRoute}) => {
  const isDrawerOpen = useIsDrawerOpen();
  const [current_link, set_current_link] = React.useState(initIdRoute);
  const [show_inbox_content, set_show_inbox_cotent] = React.useState(false);

  const is_light_mode = useSelector(state => state.envReducer.isLigthMode);
  const current_route = useSelector(state => state.envReducer.current_route);
  const dispatch = useDispatch();

  const setIsLightMode = useCallback(
    status => dispatch(envActions.setIsLightMode(status)),
    [dispatch],
  );

  const setCurrentRoute = useCallback(
    status => dispatch(envActions.setCurrentRoute(status)),
    [dispatch],
  );

  React.useEffect(() => {
    setIsLightMode(isDrawerOpen);
  }, [isDrawerOpen]);

  const select_link = (id, link) => {
    console.log(id, link);
    if (id === 'inbox_') {
      set_show_inbox_cotent(!show_inbox_content);
      return;
    }
    set_current_link(id);

    try {
      if (link === 'forums' || link === 'home') {
        navigation.navigate(link);
      }
    } catch (error) {
      alert('No such route');
    }
  };

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={isDrawerOpen ? '#4e4e4e' : '#000000'}
      />

      <View style={styles.menu_header} elevation={5}>
        <ArrowLeft />
        <Text style={styles.menu_header_title}>Menu</Text>
      </View>

      {menu_data.id_position.map(item => {
        const Img = props => menu_data[item].icon(props);
        return (
          <View key={menu_data[item].id}>
            <TouchableOpacity
              onPress={() =>
                select_link(menu_data[item].id, menu_data[item].link)
              }>
              <View style={styles.menu_element}>
                <View style={{width: 18, height: 18}}>
                  <Img
                    width={18}
                    height={18}
                    // source={menu_data[item].icon
                    fill={
                      current_link === menu_data[item].id ||
                      (menu_data['inbox'].inbox_content.id_position.find(
                        item => current_link.indexOf(item) !== -1,
                      ) &&
                        item === 'inbox')
                        ? '#4285F4'
                        : '#737373'
                    }
                  />

                  {/* //   // current_link === menu_data[item].id ||
                    menu_data['inbox'].inbox_content.id_position.find(
                      item => current_link.indexOf(item) !== -1,
                    )
                      ? 
                      "#4285F4"
                      : '#737373'
                  //  */}
                </View>
                {/* <Image source={menu_data[item].icon} style={[styles.menu_icon_style ]}/> */}
                <Text
                  style={[
                    styles.menu_element_text,
                    current_link === menu_data[item].id ||
                    (menu_data['inbox'].inbox_content.id_position.find(
                      item => current_link.indexOf(item) !== -1,
                    ) &&
                      item === 'inbox')
                      ? {color: '#4285F4'}
                      : {color: 'black'},
                  ]}>
                  {menu_data[item].title}
                </Text>
                {item === 'inbox' ? (
                  <View style={{position: 'absolute', right: 30}}>
                    {show_inbox_content ? <TriangleDown /> : <TriengleUp />}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            {show_inbox_content && item === 'inbox'
              ? menu_data['inbox'].inbox_content.id_position.map(inbox_item => {
                  return (
                    <TouchableOpacity
                      key={menu_data['inbox'].inbox_content[inbox_item].id}
                      onPress={() =>
                        select_link(
                          menu_data['inbox'].inbox_content[inbox_item].id,
                          menu_data['inbox'].inbox_content[inbox_item].link,
                        )
                      }>
                      <View
                        style={[
                          styles.menu_element,
                          {backgroundColor: '#EFEFEF'},
                        ]}>
                        <Text
                          style={[
                            styles.menu_element_text,
                            menu_data['inbox'].inbox_content[inbox_item].id ===
                            current_link
                              ? {color: '#4285F4'}
                              : {color: 'black'},
                          ]}>
                          {menu_data['inbox'].inbox_content[inbox_item].title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
        );
      })}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={props => (
          <CustomDrawer initIdRoute={'inbox_'} {...props} />
        )}>
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="forums" component={ForumsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
