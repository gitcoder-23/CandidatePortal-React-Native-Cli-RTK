import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {GetAllArticleAction} from '../../app/actions/articleAction';

type ArticleListType = {
  navigation: any;
  route: any;
};

const ArticleList = ({navigation, route}: ArticleListType) => {
  const dispatch = useAppDispatch();
  const {articleItems, isLoading} = useAppSelector(state => state.articles);
  console.log('articleItems->', articleItems);

  useEffect(() => {
    dispatch(GetAllArticleAction({}));
  }, []);

  const checkDetails = (item: any) => {
    console.log('item->', item);

    navigation.navigate('ArticleDetails', {
      SingleArticle: item,
    });
  };

  return (
    <>
      <View style={styles.screenView}>
        {isLoading && <ActivityIndicator size="large" color="#0f5fa3" />}

        <View style={styles.containerView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={articleItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableHighlight
                key={index}
                onPress={() => checkDetails(item)}>
                <View style={styles.row}>
                  <Image source={{uri: item.author.image}} style={styles.pic} />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt} ellipsizeMode="tail">
                        {item.author.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
            ListEmptyComponent={
              <View style={styles.notFoundContainer}>
                <Text style={styles.notFountText}>No data found</Text>
              </View>
            }
          />
        </View>
      </View>
    </>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },

  containerView: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#f5f6fa',
    borderRadius: 10,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: '6%',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  Alert_Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    height: 470,
    width: '90%',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#81b535',
  },
  textView: {
    zIndex: 100,
    top: 10,
    left: (Dimensions.get('window').width - 225) / 2,
    position: 'absolute',
    height: '50%',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    width: 185,
  },
  titleView: {
    height: 130,
    width: '100%',
    flexDirection: 'column',
  },
  Alert_Title: {
    fontSize: 25,
    color: '#F5F6FA',
    textAlign: 'center',
    padding: 15,
    height: '100%',
    width: '100%',
    fontWeight: '500',
    backgroundColor: '#81b535',
    borderWidth: 3,
    borderColor: '#F5F6FA',
  },
  coloredView: {
    height: 100,
    backgroundColor: '#1760A5',
    marginTop: 30,
    borderRadius: 0,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#81b535',
    marginLeft: -3,
  },
  Alert_Message: {
    fontSize: 18.5,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 8,
    color: '#878787',
  },
  buttonStyle: {
    padding: 10,
    width: 145,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#087bc0',
    borderRadius: 5,
    alignSelf: 'center',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  viewForRow: {
    flexDirection: 'row',
  },
  nameTxt: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'open-sans',
    fontWeight: '700',
    color: '#646669',
    marginRight: 15,
  },

  show: {},
  hide: {
    display: 'none',
  },

  notFoundContainer: {
    flex: 1,
    backgroundColor: '#0f5fa3',
    margin: 20,
    borderRadius: 15,
  },
  notFountText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 25,
  },
});
