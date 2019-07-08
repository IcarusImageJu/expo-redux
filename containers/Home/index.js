import React, {useEffect, memo} from 'react';
import {
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import makeSelectHome from './selectors';
import {loadList, loadCurrencies} from './actions';

const key = 'home';

import Button from '../../components/Button';

function Home({home, handleloadList, handleloadCurrencies}) {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    return(
        <SafeAreaView>
            <Text>Fetch julien github repos with fetch</Text>
            <Button onPress={handleloadList} title='Fetch list' />
            <FlatList
                keyExtractor={item => item.name}
                data={home.list}
                renderItem={({item}) => (
                    <Text>{item.name}</Text>
                )}
            />
            <Text>Fetch currency rates witch GQL</Text>
            <Button onPress={handleloadCurrencies} title='Fetch rates' />
            <FlatList
                keyExtractor={item => item.name}
                data={home.rates}
                renderItem={({item}) => (
                    <Text>{item.name}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = createStructuredSelector({
    home: makeSelectHome(),
});
  
export function mapDispatchToProps(dispatch) {
    return {
        handleloadList: () => dispatch(loadList()),
        handleloadCurrencies: () => dispatch(loadCurrencies()),
    };
}
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(Home);