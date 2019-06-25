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

import reducer from './reducer';
import makeSelectHome from './selectors';
import {loadList} from './actions';

const key = 'home';

import Button from '../../components/Button';

function Home({home, handleloadList}) {
    useInjectReducer({ key, reducer });

    return(
        <SafeAreaView>
            <Text>Fetch julien github repos</Text>
            <Button onPress={handleloadList} title='Fetch list' />
            <FlatList
                keyExtractor={item => item.name}
                data={home.list}
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