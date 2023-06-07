import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
  ScrollView
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../component/ListItem'
import ProductMenuList from '../component/ProductMenuList'

const manuList = [
  {
    icon: 'assets/svg/consumer_basic_report.svg',
    menuTitle: 'Personal Loan Summary',
    description: 'The loan be long but we take am',
    manukey: 'consumerLn',
    price: '1',
    hasSub: 'Yes',
    sub: [
      {
        submenu: 'Active Loans',
        icon: 'assets/svg/mobile_credit.svg'
      },
      {
        submenu: 'Closed Loans',
        icon: 'assets/svg/mobile_credit.svg'
      }
    ]
  },
  {
    icon: 'assets/svg/mobile_credit.svg',
    menuTitle: 'Mobile (Momo) Loan Summary',
    description: 'The loan be long but we take am',
    manukey: 'mobileLn',
    price: '1',
    hasSub: 'Yes',
    sub: [
      {
        submenu: 'Active Loans',
        icon: 'assets/svg/loansummary.svg'
      },
      {
        submenu: 'Closed Loans',
        icon: 'assets/svg/mobile_credit.svg'
      }
    ]
  },
  {
    icon: 'assets/svg/mobile_credit.svg',
    menuTitle: 'Detailed Consumer Report',
    description: 'The loan be long but we take am',
    manukey: 'GetConsumerFullCreditReport',
    price: '1',
    hasSub: 'No'
  }
  // {
  //   icon: 'assets/svg/credit_score.svg',
  //   menuTitle: 'Detailed Mobile (Momo) Report',
  //   description: 'The loan be long but we take am',
  //   manukey: 'GetConsumerMobileCredit',
  //   price: '1',
  //   hasSub: 'No'
  // },
  // {
  //   icon: 'assets/svg/loansummary.svg',
  //   menuTitle: 'Narration',
  //   description: 'The loan be long but we take am',
  //   manukey: 'GetNarration',
  //   price: '1',
  //   hasSub: 'Yes',
  //   sub: [
  //     {
  //       submenu: 'Consumer Loan Narration',
  //       icon: 'assets/svg/consumer_basic_report.svg'
  //     },
  //     {
  //       submenu: 'Mobile Loan Narration',
  //       icon: 'assets/svg/mobile_credit.svg'
  //     }
  //   ]
  // }
]

const newsList = [
  {
    icon: 'assets/svg/consumer_basic_report.svg',
    menuTitle: 'News of the Day',
    description: 'The loan be long but we take am'
  }
  // {
  //   icon: 'assets/svg/mobile_credit.svg',
  //   menuTitle: 'Mobile (Momo) Loan Summary',
  //   description: 'The loan be long but we take am',
  // }
]
const productsList = () => {
  for (let index = 0; index < manuList.length; index++) {
    const element = manuList[index]
    return (
      <ProductMenuList
        menuTitle={manuList[index].menuTitle}
        description={manuList[index].description}
      />
    )

    console.log(element)
  }
}

const Home = () => {
  const renderItem = ({ item }) => (
    <ProductMenuList
      menuTitle={item.menuTitle}
      description={item.description}
    />
  )

  const newsItem = ({ item }) => (
    <ProductMenuList
      menuTitle={item.menuTitle}
      description={item.description}
    />
  )

  console.log(manuList[0].menuTitle)

  const { container, image } = styles

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Home, Emmanuel</Text>
        <ProductMenuList
          menuTitle={newsList[0].menuTitle}
          description={newsList[0].description}
        />
        <View>
          {manuList.map((y) => {
            return (
              <ProductMenuList
                menuTitle={y.menuTitle}
                description={y.description}
              />
            )
          })}
        </View>
      </ScrollView>

      {/* <Text >Home</Text> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background: rgba(108, 117, 125, 0.06)'
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 13,
    alignItems: 'center'
  },
  title: {
    marginTop: 15,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 13,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
})
export default Home
