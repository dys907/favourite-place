import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Alert, Text } from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { Colours } from '../../constants/colours';
import OutlinedButton from '../UI/OutlinedButton';


const ImagePicker = (params) => {

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()
    const [pickedImage, setPickedImage] = useState()

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()

            return permissionResponse.granted
        }

        if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant permissions to use this app')
            return false
        }
        return true

    }



    async function takeImageHandler() {

        const hasPermission = await verifyPermissions()

        if (!hasPermission) {
            return
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.5,
        })

        setPickedImage(image.assets[0].uri)
        console.log(image.assets[0].uri)
    }

    let imagePreview = <Text>No image taken yet</Text>

    if (pickedImage) {
        imagePreview =<Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return <View>
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
        <OutlinedButton icon="camera" onPress={takeImageHandler}> Take Image</OutlinedButton>
    </View>
    
}

export default ImagePicker

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

// const ImagePickerComponent = () => {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         if (!result.cancelled) {
//             setImage(result.uri);
//         }
//     };

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     return (
//         <View style={styles.container}>
//             <Button title="Pick an image from camera roll" onPress={pickImage} />
//             {image && <Image source={{ uri: image }} style={styles.image} />}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginTop: 20,
//     },
// });

// export default ImagePickerComponent;