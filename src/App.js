import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputImageLinkForm from './components/InputImageLinkForm/InputImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: '5d748bb94be74d378353acf8e66b8939'
});

const particlesOptions = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "size": {
            "value": 1
        }
    } 
}

class App extends Component {
    constructor(props){
        super();
        this.state = {
            imageInput: '',
            imageUrl: '',
            box: {}
        }
    };

    calculateFaceLocation = (data) => {

    };

    onChangeInputFunction = (event) => {
        // console.log(event.target.value);
        this.setState({
            imageInput: event.target.value
        });
    };
    onButtonClickFunction = (event) => {
        // console.log('Click!');
        this.setState({
            imageUrl: this.state.imageInput
        });
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.imageInput)
        .then(
            function(response) {
              // do something with response
              // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
              this.calculateFaceLocation(response);
            },
            function(err) {
              // there was an error
            }
        );
    };
    
    render() {
        return (
            <div className="App">
                <Particles 
                    className='particles'
                    params={particlesOptions}
                />
                <Navigation />
                <Logo />
                <Rank />
                <InputImageLinkForm 
                    onInputChange={this.onChangeInputFunction} 
                    onButtonClick={this.onButtonClickFunction} 
                />
                <FaceRecognition
                    ImageUrlDisplay = {this.state.imageUrl} /*use imageInput this to display image before 
                    clicking on Detect button or use imageUrl to display image after click of button*/
                /> 
           </div>
        );
    }
}

export default App;
