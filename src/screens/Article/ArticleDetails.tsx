import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Image source={{uri: singleArticle.author.image}} style={styles.pic} />
      </View>
      <Text>ArticleDetails</Text>
    </View>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
