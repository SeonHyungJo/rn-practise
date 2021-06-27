import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Constants from 'expo-constants'; // Constants로 불러온다.

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import WebView from 'react-native-webview';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.screen}>
        {/*<Navigation colorScheme={colorScheme} />*/}
        {/*<StatusBar />*/}
        {/*<SafeAreaView edges={['right', 'bottom', 'left']}>*/}
        {/*  <StatusBar backgroundColor={'transparent'} translucent={true} />*/}
        <StatusBar style="dark" animated translucent/>
        <WebView
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          startInLoadingState
          scalesPageToFit
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          style={{flex: 1}}
          source={{uri: 'https://zaritalk.com'}}
        />
        {/*</SafeAreaView>*/}
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight, // Constants의 statusBarHeight 값을 이용한다.
    paddingBottom: Constants.statusBarHeight, // Constants의 statusBarHeight 값을 이용한다.
  }
});


