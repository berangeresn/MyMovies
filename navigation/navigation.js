import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import Search from '../components/Search';
import FilmDetail from '../components/filmDetail';
import Favorites from '../components/Favorites';
import News from '../components/News'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen : Search,
    navigationOptions:  {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen : Favorites,
    navigationOptions : {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen : FilmDetail
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search : {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_search.png')}
          style={styles.icon}/>
      }
    }
  },
  Favorites : {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_favorite.png')}
          style={styles.icon}/>
      }
    }
  }
},
  News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        }
      }
    },
{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF',
    showLabel: false,
    showIcon: true
  }
}
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
