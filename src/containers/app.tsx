import * as React from 'react';
import { connect } from 'react-redux';
import Types from 'Types';
import { appActions } from '~src/features/app';

const mapStateToProps = (state: Types.RootState) => ({
  appStarted: state.app.started,
});

const dispatchProps = {
  initApp: appActions.initApp,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Component extends React.Component<Props, {}> {
  componentDidMount() {
    setTimeout(() => this.props.initApp(), 2000);
  }
  render() {
    return <h1> initiated: {`${this.props.appStarted}`} </h1>;
  }
}

export const App = connect(
  mapStateToProps,
  dispatchProps
)(Component);
