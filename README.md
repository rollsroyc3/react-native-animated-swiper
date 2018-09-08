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
| children        | `any`            | No       | `null`                        |
| dots            | `bool`           | No       | `false`                       |
| dotsBottom      | `number`         | No       | `100`                         |
| dotsColor       | `string`         | No       | `rgba(0, 0, 0, 0.25)`         |
| dotsColorActive | `string`         | No       | `#000`                        |
| dotsStyle       | `object`         | No       | `dotsStyleDefault`            |
| driver          | `Animated.Value` | No       | `new Animated.Value(0)`       |
| onSwipe         | `func`           | No       | `(event, index) => undefined` |

## Example

```js
import React from 'react';

import { Text, View } from 'react-native';

import Swiper from 'react-native-animated-swiper';

const Example = () => (
  <Swiper
    dots
    dotsColor="rgba(97, 218, 251, 0.25)"
    dotsColorActive="rgba(97, 218, 251, 1)"
    style={styles.slides}>
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
  slides: { backgroundColor: '#F5FCFF' },
  slide: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { color: 'rgba(97, 218, 251, 1)', fontSize: 36 }
};

export default Example;
```
