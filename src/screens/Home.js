import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import data from '../data/movies.json';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#393e46'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {
    loading: true,
    movies: []
  };

  componentDidMount() {
    this.setState({
      loading: false,
      movies: data.slice(0, 20)
    });
  }

  onPressMovie = () => {};

  render() {
    const { movies, loading } = this.state;

    return (
      <>
        <View style={styles.screen}>
          {loading ? (
            <Loading />
          ) : (
            <ScrollView>
              <View style={styles.content}>
                <Text style={styles.text}>Select a Movie, and see its comments.</Text>
                <>
                  {movies.map(movie => (
                    <MovieCard key={movie.title} movie={movie} />
                  ))}
                </>
              </View>
            </ScrollView>
          )}
        </View>
      </>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height,
    backgroundColor: '#d8d8d8'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  },
  emphasizedText: {
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 10
  }
});

export default Home;
