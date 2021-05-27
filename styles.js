
import {

    StyleSheet,

  } from 'react-native';

const styles = StyleSheet.create({
    menu_header: {
      paddingVertical: 20,
      paddingLeft: 29,
      width: '100%',
      backgroundColor: '#000',
      flexDirection: 'row',
      alignItems: 'center',

  
    },
    menu_header_title: {
        fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: '500',
      fontStyle: 'normal',
      color: 'white',
      marginLeft:33
  
    },
  

  
    menu_element: {
      paddingVertical: 10,
      paddingLeft: 29,
      paddingRight: 20,
      width: '100%',
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      position:'relative'
  
    },
    menu_element_text: {
        fontFamily: "Roboto",
      fontSize: 15,
      fontWeight: '500',
      fontStyle: 'normal',
      color: 'black',
       marginLeft: 35
    },
    
    menu_icon_style: {
      width: 18,
      height: 18
    },

    screen_header: {
        paddingVertical: 20,
        paddingLeft: 29,
        paddingRight: 20,
        width: '100%',
        backgroundColor: '#212121',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    screen_header_title: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',
        color: 'white',
         marginLeft: 36,

    },

    header_left_content: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },

    header_dots_btn: {
        padding:5,
        borderRadius:50
        // justifyContent: 'center'
    },
  
    screen_wrap: {
      backgroundColor: '#303030',
      height: '100%'
    },

    screen_content_wrap: {
        backgroundColor: '#202020',
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical:29,
        marginTop:22 ,
        maxHeight: '85%'
      },
    screen_content: {

    },
  
    screen_content_text: {
        fontFamily: "Roboto",
      fontSize: 15,
      fontWeight: '500',
      fontStyle: 'normal',
      color: '#ffffff',
      lineHeight:20
    },
    sectionDescription: {
        
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  export default styles;
  