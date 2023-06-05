import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  Feather,
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons'

const SideMenu = () => {
  // const {messageOne, messageTwo, containerStyles, messageOneStyle, messageTwoStyle} = props;
  
  const [titleText, setTitleText] = useState("Bird's Nest");

  const onPressTitle = ()=>{
    setTitleText("pressed")
    console.log(titleText)
  }
  return (
    <View>
      <View style={[styles.menus, {marginTop: 20}]} >
        <Image
          style={styles.image}
          source={require('../../assets/profilepic.png')}
          resizeMode={'cover'} // <- needs to be "cover" for borderRadius to take effect on Android
        />
        <View style={[{ flexDirection: 'column' }]}>
          <Text style={styles.fullname}>Emmanuel Agyei-Kumi</Text>
          <Text style={styles.idText}>0556292291</Text>
        </View>
      </View>
      <View style={[styles.horiLine, { marginTop: 33 }]} />

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 43 }]} onPress={onPressTitle}>
        <AntDesign
          style={styles.icons}
          name="creditcard"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Payment Summary</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 33 }]}>
        <Entypo style={styles.icons} name="news" size={20} color={'#6C757D'} />
        <Text style={styles.menusText}>News & Updates</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 33 }]}>
        <FontAwesome
          style={styles.icons}
          name="user-o"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Profile</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.horiLine, { marginTop: 33 }]} />

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 20 }]}>
        <AntDesign
          style={styles.icons}
          name="setting"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Dispute Resolution</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.horiLine, { marginTop: 20 }]} />

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 42 }]}>
        <AntDesign
          style={styles.icons}
          name="staro"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Rate app experience</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 33 }]}>
        <MaterialCommunityIcons
          style={styles.icons}
          name="hours-24"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Help & Support</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 33 }]}>
        <AntDesign
          style={styles.icons}
          name="infocirlceo"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>About</Text>
      </View>

      <View onStartShouldSetResponder={() => {console.log('Clicked')}} style={[styles.menus, { marginTop: 33 }]}>
        <SimpleLineIcons
          style={styles.icons}
          name="logout"
          size={20}
          color={'#6C757D'}
        />
        <Text style={styles.menusText}>Logout</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: '#ecf0f1'
  },
  fullname: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: '600',
    color:'#000'
  },
  idText: {
    fontSize: 13,
    textAlign: 'left',
    fontWeight: '400',
    color:'#6C757D'
  },
  horiLine: {
    backgroundColor: '#D9D9D9',
    height: 1,
    width: 300
  },
  menus: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menusText: {
    paddingRight: 6,
    fontSize: 13,
    color: '#000000',
    textAlign: 'left',
    fontWeight: '400'
  },
  icons: {
    marginRight: 10,
    marginLeft: 30,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    marginLeft: 9,
    borderWidth: 2,
    borderRadius: 75
  }
})

export default SideMenu
