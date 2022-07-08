import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

type ArticleDetailsType = {
  navigation: any;
  route: any;
};

const ArticleDetails = ({navigation, route}: ArticleDetailsType) => {
  console.log('route->', route);
  const [singleArticle, setSingleArticle] = useState(
    route?.params?.SingleArticle,
  );

  console.log('singleArticle->', singleArticle);

  useEffect(() => {
    setSingleArticle(route?.params?.SingleArticle);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={{marginBottom: 10}}>
          <Image
            source={{uri: singleArticle.author.image}}
            style={styles.pic}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#000'}}>
            Author Name: {singleArticle.author.username}
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#000'}}>Title: {singleArticle.title}</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#000'}}>
            Created Date:{' '}
            {moment(singleArticle.createdAt).format('DD-MMM-YYYY').toString()}
          </Text>
        </View>
        <View>
          <Text style={{color: '#000'}}> {singleArticle.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
