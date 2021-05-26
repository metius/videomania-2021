import React, {Component} from 'react';

function withFirebase(WrappedComponent, fn) {
  
  class withFirebase extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }

    componentDidMount() {
      if(fn) {
        let array = [];
        fn()
          .then((res) => {
            res.forEach((doc) => {
              array.push(doc.data())
            })
          })
          .then(() => this.setState({
            data: array,
          }))
      }
    }

    render() {
      return(
        <WrappedComponent {...this.state} {...this.props} />
      )
    }
  }

  return withFirebase;
}

export default withFirebase;