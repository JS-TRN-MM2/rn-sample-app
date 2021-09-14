/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      //console.log('what is granted', granted);
      if (!granted) return;
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
      //console.log('what is location', location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
