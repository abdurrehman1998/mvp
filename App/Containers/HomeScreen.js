import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {FETCH_USERS} from '../Redux/UserRedux';
import {usersInfoSelector} from '../Redux/Selectors';

const Row = ({title, value}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.textStyle} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

const HomeScreen = props => {
  const dispatch = useDispatch();
  const {users, fetchUsersLoading} = useSelector(usersInfoSelector);
  const onPress = () => {
    dispatch(FETCH_USERS());
  };

  const renderItem = ({item, index}) => {
    const {id, userId, title, completed} = item || {};
    return (
      <View style={styles.itemContainer}>
        <Row title={'ID'} value={id} />
        <Row title={'User Id'} value={userId} />
        <Row title={'Title'} value={title} />
        <Row title={'Status'} value={completed ? 'Done' : 'Pending'} />
      </View>
    );
  };

  const keyExtractor = useCallback(item => item?.id, []);

  return (
    <View style={styles.container}>
      <Button title={'Fetch Users 200 records'} onPress={onPress} />
      {fetchUsersLoading && <ActivityIndicator style={styles.loadingStyle} />}
      <Text testID='testItemId'>Test Text</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  loadingStyle: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  titleStyle: {
    flex: 1,
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
  },
});
