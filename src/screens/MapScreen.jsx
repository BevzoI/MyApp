import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const MAPS_KEY = "AIzaSyAETyzBKmy48ZvXelCLs0Q9RwxcVOe9yrM";

const MapScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const post = route?.params?.post;
  console.log("post", post);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: post.location.latitude,
          longitude: post.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
        onLongPress={(e) => setLocation({ coords: e.nativeEvent.coordinate })}
      >
        {!!post && (
          <Marker
            coordinate={{
              latitude: post.location.latitude,
              longitude: post.location.longitude,
            }}
            title={post.title}
            description={post.address}
            draggable
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
