import React, {PureComponent, Alert, StyleSheet} from 'react';
import {AuthButton} from '../../../features/account/components/account.styles';
import {RNCamera} from 'react-native-camera';
export class CameraScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        console.log(data);
        //Alert.alert('Success', JSON.stringify(data));
        this.setState({takingPic: false}, () => {
          this.props.onPicture(data);
        });
      } catch (err) {
        console.log(err);
        //Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };
  render() {
    return (
      <>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.front}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          activeOpacity={0.5}
          //style={styleCamera.btnAlignment}
          onPress={this.takePicture}
        />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={this.takePicture}>
          Capture
        </AuthButton>
      </>
    );
  }
}

// const styleCamera = StyleSheet.create({
//   btnAlignment: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
// });
