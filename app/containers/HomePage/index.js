import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import TinTuc from './TinTuc';
import NoiDungChinh from './NoiDungChinh';
import HomeSlider from './HomeSlider';
import QuanLy from './QuanLy';
import HomeSliderMobile from './HomeSliderMobile';
import HomeMobile from './HomeMobile';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeMenuActive } from '../LanguageProvider/actions';

const key = 'home';

export function HomePage({
                           username,
                           loading,
                           error,
                           repos,
                           onMenuActive,
                           onSubmitForm,
                           onChangeUsername,
                           location,
                         }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    console.log('location', location);
    activeMenu();
    onMenuActive();
  }, []);

  function activeMenu() {

  }

  return (
    <div className='homepage-container'>
      <div className="homepage-container-large">
        <HomeSlider/>
        <NoiDungChinh/>
        <QuanLy />
        <TinTuc/>
      </div>
      <div className="homepage-container-mobile">
        <HomeSliderMobile/>
        <HomeMobile/>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onMenuActive: () => {
      dispatch(changeMenuActive(1));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
