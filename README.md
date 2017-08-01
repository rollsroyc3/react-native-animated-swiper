# react-native-animated-swiper
<img src="https://raw.githubusercontent.com/sonaye/react-native-animated-swiper/master/demo.gif" width="400">

# Installation
`yarn add react-native-behavior react-native-animated-swiper`

# Definition
```javascript
type swiper = {
  bounces?: boolean,        // default = true
  children: any,            // all children must have a (backgroundColor: string) prop
  dots?: boolean,           // default = false
  dotsColor?: string,       // default = 'rgba(0, 0, 0, 0.25)'
  dotsColorActive?: string, // default = 'rgba(0, 0, 0, 0.75)'
  dotStyle?: Object,        // default = dotStyleDefault
  dotStyleActive?: Object,  // default = {}
  shadow?: boolean,         // default = false
  shadowStyle?:, Object     // default = shadowStyleDefault
  dotsBottom?: number       // default = 29
};

type dotStyleDefault = {
  borderRadius: 4,
  height: 8,
  marginLeft: 4,
  marginRight: 4,
  width: 8
};

type shadowStyleDefault = {
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOpacity: 0.125,
  shadowRadius: 8
};
```

## Example
```javascript
import React from 'react';
import { Text, View } from 'react-native';

import Swiper from 'react-native-animated-swiper';

const Example = () =>
  <Swiper
    dots
    dotsColor="rgba(255, 255, 255, 0.25)"
    dotsColorActive="rgba(255, 255, 255, 0.75)">
    <Slide backgroundColor="#4285f4" title="Lorem" />
    <Slide backgroundColor="#0f9d58" title="ipsum" />
    <Slide backgroundColor="#f4b400" title="dolor" />
    <Slide backgroundColor="#db4437" title="sit" />
  </Swiper>;

const Slide = ({ title }) =>
  <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
    <Text
      style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 48 }}>
      {title}
    </Text>
  </View>;

export default Example;
```
