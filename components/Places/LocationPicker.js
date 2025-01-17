import { View, StyleSheet } from "react-native"
import OutlinedButton from "../UI/OutlinedButton"
import { Colours } from "../../constants/colours"

const LocationPicker = () => {

    function getLocationHandler() {

    }

    function pickOnMapHandler() {

    }

    return <View>
        <View style={styles.mapPreview}></View>
        <View style={styles.actions}>
            <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
            <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
        </View>
    </View>
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.primary100,
        borderRadius: 4 
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})