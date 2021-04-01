import React, {Component} from 'react';

function withFetch(WrappedComponent, url) {

  class WithFetch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isFetching: false,
        isError: false,
        err: null,
      }
    }

    componentDidMount() {
      if(url) {
        this.fetchData(url);
      }
    }

    fetchData = async (url) => {
      this.setState({
        data: [],
        isFetching: true,
        isError: false,
      })

      try {
        const resp = await fetch(url)

        if(resp.ok) {
          const data = await resp.json();
          this.setState({
            data: data,
            isFetching: false,
          });
        } else {
          throw new Error('Error while getting the data');
        }
      }
      catch (err) {
        this.setState({
          isFetching: false,
          isError: true,
          error: err,
        })
      }
    }

    render() {
      return(
        <WrappedComponent {...this.state} {...this.props} />
      )
    }
  }

  return WithFetch; 
}

export default withFetch;