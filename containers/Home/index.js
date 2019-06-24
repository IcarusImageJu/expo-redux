import React, {useEffect, memo} from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import makeSelectHome from './selectors';

const key = 'home';

function Home({home}) {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    return(
        <View>
            <Text>Super page</Text>
            <Text>{home.list.length}</Text>
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
    home: makeSelectHome(),
});
  
export function mapDispatchToProps(dispatch) {
    return {
        dispatch,
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