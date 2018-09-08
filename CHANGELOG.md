# 0.0.23

- **Breaking:** Drop `backgroundColor` prop, you can use a custom driver for that (example below).
- **Breaking:** Drop support for shadows, you can use a regular view on top of the swiper for that.
- **Breaking:** `onSwipe` passes `(event, index)` now instead of `(index, event)`.
- **Breaking:** dotsBottom default value is now `100` instead of `30`.
- **Breaking:** `dotStyle` and `dotStyleActive` are now unified under `dotsStyle` (with an `s`).
- Support passing a ref to the scroll view with `ref` prop through `React.forwardRef()`.
- Implement animations with `useNativeDriver`.
- Enhance dots interpolation.

Still want to implement animated background colors? this is how you achieve that now:

```js
import React, { Fragment } from 'react';

import { Animated, Dimensions, Text, View } from 'react-native';

import Swiper from 'react-native-animated-swiper';

const { width } = Dimensions.get('window');

const Example = () => {
  const driver = new Animated.Value(0);

  const backgroundColor = driver.interpolate({
    inputRange: Array(4)
      .fill()
      .map((_, index) => index * width),
    outputRange: ['#4285F4', '#0F9D58', '#F4B400', '#DB4437'],
    extrapolate: 'clamp'
  });

  const onScroll = Animated.event([
    { nativeEvent: { contentOffset: { x: driver } } }
  ]);

  return (
    <Fragment>
      <Animated.View style={[styles.background, { backgroundColor }]} />

      <Swiper
        dots
        dotsColor="rgba(255, 255, 255, 0.25)"
        dotsColorActive="rgba(255, 255, 255, 1)"
        driver={driver}
        onScroll={onScroll}>
        <Slide title="Lorem" />
        <Slide title="ipsum" />
        <Slide title="dolor" />
        <Slide title="sit" />
      </Swiper>
    </Fragment>
  );
};

const Slide = ({ title }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = {
  background: { bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 },
  slide: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { color: '#FFF', fontSize: 36 }
};

export default Example;
```

# 0.0.20

- **Breaking:** `onSwipe` prop now passes `(index, event)`.

```js
// before
const onSwipe = e => e.nativeEvent ..

// after
const onSwipe = (i, e) => e.nativeEvent ..

<Swiper onSwipe={onSwipe} />
```

# 0.0.19

- Fixed a bug where `[...Array(N).keys()]` is not working on Android.

# 0.0.17

- Support overwriting default props.
- Add `driver` prop.

# 0.0.16

- Support having a single child.
- Support not passing a `backgroundColor` prop.

# 0.0.15

- Enhance performance.
- Drop `react-native-behavior` from dependencies.
- **Breaking**: A `backgroundColor` prop is now required instead of having to bass a `backgroundColor` prop to each child.

```js
// before
<Swiper>
  <Slide backgroundColor="r" />
  <Slide backgroundColor="g" />
  <Slide backgroundColor="b" />
</Swiper>
```

```js
// after
<Swiper backgroundColor={['r', 'g', 'b']}>
  <Slide />
  <Slide />
  <Slide />
</Swiper>
```

- **Breaking**: `scrollViewProps` prop has been removed, any extra `ScrollView` props are being forwarded now.

```js
// before
<Swiper scrollViewProps={{ horizontal: false }} />
```

```js
// after
<Swiper horizontal={false} />
```
