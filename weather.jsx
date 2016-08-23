import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { temp: undefined, city: undefined };
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.state.lat = position.coords.latitude;
    //   this.state.lon = position.coords.longitude;
    // });

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        let res = JSON.parse(xhr.responseText);
        
        this.setState({city: res.name, temp: Math.floor(res.main.temp - 273)});
      }
    };

    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?zip=94105,us&appid=2b9c7318840f77bbf02e4a313c4b066f`, true);
    xhr.send();
  }




  render() {

    return (
      <div className="weather">
        <h1> Weather </h1>
        <div className="city-temp">
          <h1> {this.state.city}</h1>
          <h1> {this.state.temp}</h1>
        </div>
      </div>
    );
  }

}

export default Weather;
