import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getMessage() {
      try {
        const response = await fetch("https://gym-app-backend-pnavab.vercel.app/");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("error fetching message", error);
      }
    }

    getMessage();
  }, [])

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
