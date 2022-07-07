import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

type MyStatusBarType = {
  backgroundColor: string | any;
  barStyle?: string | any;
};

const MyStatusBar = ({
  backgroundColor,
  barStyle,
  ...props
}: MyStatusBarType) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        {...props}
      />
    </SafeAreaView>
  </View>
);

export default MyStatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
