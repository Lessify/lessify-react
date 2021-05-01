import React from 'react';

export default class Wrap extends React.Component<any, any>{

  render() {
    return (
        <del>{this.props.children}</del>
    );
  }
}
