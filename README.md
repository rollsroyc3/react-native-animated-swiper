# react-native-animated-swiper

[![npm version](https://badge.fury.io/js/react-native-animated-swiper.svg)](https://badge.fury.io/js/react-native-animated-swiper)

<img src="https://raw.githubusercontent.com/sonaye/react-native-animated-swiper/master/demo.gif" width="400">

## Install

```bash
yarn add react-native-animated-swiper
```

## Definition

| Prop            | Type             | Required | Default                       |
| --------------- | ---------------- | -------- | ----------------------------- |
| backgroundColor | `string[]`       | No       | `transparent`                 |
| children        | `any`            | No       | `null`                        |
| dots            | `bool`           | No       | `false`                       |
| dotsBottom      | `number`         | No       | `30`                          |
| dotsColor       | `string`         | No       | `rgba(0, 0, 0, 0.25)`         |
| dotsColorActive | `string`         | No       | `rgba(0, 0, 0, 0.75)`         |
| dotStyle        | `object`         | No       | `dotStyleDefault`             |
| dotStyleActive  | `object`         | No       | `dotStyleDefault`             |
| driver          | `Animated.Value` | No       | `new Animated.Value(0)`       |
| onSwipe         | `func`           | No       | `(index, event) => undefined` |
| shadow          | `bool`           | No       | `false`                       |
| shadowStyle     | `object`         | No       | `shadowStyleDefault`          |

## Example

```js
import React from 'react';

import { Text, View } from 'react-native';

import Swiper from 'react-native-animated-swiper';

const Example = () => (
  <Swiper
    backgroundColor={['#4285f4', '#0f9d58', '#f4b400', '#db4437']}
    dots
    dotsColor="rgba(255, 255, 255, 0.25)"
    dotsColorActive="rgba(255, 255, 255, 0.75)">
    <Slide title="Lorem" />
    <Slide title="ipsum" />
    <Slide title="dolor" />
    <Slide title="sit" />
  </Swiper>
);

const Slide = ({ title }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = {
  slide: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 48 }
};

export default Example;
```
