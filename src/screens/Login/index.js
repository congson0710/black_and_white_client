import React from 'react';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import Input from '../../components/Input';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
    }
  }
`;

const FORM_NAME = 'LOGIN_FORM';

const Section = styled.div`
  width: 20%;
`;

const styles = {
  inputStyle: {
    borderRadius: '20px',
    textIndent: '35px',
    height: '40px',
  },
  iconStyle: {
    position: 'absolute',
    top: '10px',
    left: '15px',
    fontSize: '20px',
  },
  submitButtonStyle: {
    width: '20%',
    height: '40px',
    borderRadius: '20px',
    fontSize: '16px',
    margiTop: '4px',
  },
};

const PureLoginForm = ({ handleSubmit }) => (
  <div className="flex justify-center">
    <div className="flex-grow" style={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit}>
        <div className="flex mt3 justify-center">
          <Section>
            <label className="db f4 lh-copy" htmlFor="userName">
              User name
            </label>
            <div style={{ position: 'relative' }}>
              <i style={styles.iconStyle} className="fas fa-user" />
              <Field
                id="userName"
                name="userName"
                component={Input}
                style={styles.inputStyle}
              />
            </div>
          </Section>
        </div>
        <div className="flex mt3 justify-center">
          <Section>
            <label className="db f4 lh-copy" htmlFor="password">
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <i style={styles.iconStyle} className="fas fa-lock" />
              <Field
                id="password"
                name="password"
                component={Input}
                type="password"
                style={styles.inputStyle}
              />
            </div>
          </Section>
        </div>
        <div className="flex mt3 justify-center">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            style={styles.submitButtonStyle}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
);

const prepareProps = withProps(({ mutate }) => ({
  onSubmit: values => {
    mutate({
      variables: values,
    });
  },
}));

const enhance = compose(
  setDisplayName('LoginForm'),
  connect(
    null,
    null
  ),
  graphql(LOGIN_MUTATION),
  prepareProps,
  reduxForm({
    form: FORM_NAME,
  })
);

export default enhance(PureLoginForm);
