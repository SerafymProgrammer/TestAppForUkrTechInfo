import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles';
import ArrowLeft from '../images/arrow_left.svg';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import menu_data from '../data';
import TriengleUp from '../images/Triengle_up.svg';
import TriangleDown from '../images/Triangle_down.svg';
import {envActions} from '../redux/actions';





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
                  </View>
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

  export default CustomDrawer;