import React from 'react';

import { Animated, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const Swiper = props => {
  const {
    backgroundColor: outputRange,
    children,
    dots,
    dotsBottom,
    dotsColor,
    dotsColorActive,
    dotStyle,
    dotStyleActive,
    onSwipe,
    shadow,
    shadowStyle,
    style,
    ...rest
  } = props;

  const scroll = new Animated.Value(0);

  const position = Animated.divide(scroll, width);

  const inputRange = Array(children.length)
    .fill()
    .map((_, index) => index * width);

  const backgroundColor = scroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp'
  });

  const onScroll = Animated.event([
    { nativeEvent: { contentOffset: { x: scroll } } }
  ]);

  return (
    <View style={styles.full}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        {...rest}
        onMomentumScrollEnd={onSwipe}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={[{ backgroundColor }, style]}>
        {children.map((slide, i) => (
          <View key={`slide-${i}`} style={styles.slide}>
            {slide}
          </View>
        ))}
      </Animated.ScrollView>

      {dots &&
        shadow && (
          <View style={[styles.shadowContainer, styles.shadow, shadowStyle]} />
        )}

      {dots && (
        <View style={[styles.dotContainer, { bottom: dotsBottom }]}>
          {children.map((slide, i) => (
            <View
              key={`swiper-dot-${i}`}
              style={[styles.dot, dotStyle, { backgroundColor: dotsColor }]}
            />
          ))}
        </View>
      )}

      {dots && (
        <View style={[styles.dotContainer, { bottom: dotsBottom }]}>
          {children.map((slide, i) => (
            <Animated.View
              key={`swiper-dot-active-${i}`}
              style={[
                styles.dot,
                dotStyleActive,
                {
                  backgroundColor: dotsColorActive,
                  opacity: Animated.add(position, 1 - i)
                }
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

Swiper.defaultProps = {
  dotsBottom: 30,
  dotsColor: 'rgba(0, 0, 0, 0.25)',
  dotsColorActive: 'rgba(0, 0, 0, 0.75)'
};

const styles = {
  full: { flex: 1 },
  slide: { width },
  dotContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width
  },
  dot: {
    borderRadius: 4,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    width: 8
  },
  shadowContainer: {
    bottom: 0,
    height: 70,
    position: 'absolute',
    width
  },
  shadow: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { height: -0.5, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 7.5
  }
};

export default Swiper;
