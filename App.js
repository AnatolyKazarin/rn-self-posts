import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { AppLoading } from "expo"
import { bootstrap } from "./src/bootstrap"
import { AppNavigation } from "./src/navigation/AppNavigation"

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => {
          setIsReady(true)
        }}
        onError={e => console.log(e)}
      />
    )
  }

  return <AppNavigation />
}
