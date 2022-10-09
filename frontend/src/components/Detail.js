/* eslint-disable react/prop-types */
import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location)
    // Если нет props -> отправляем на главную страницу
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    return
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
