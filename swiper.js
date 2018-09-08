import React from 'react';

import { Animated, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const Swiper = React.forwardRef((props, ref) => {
  const {
    children,
    dots,
    dotsBottom,
    dotsColor,
    dotsColorActive,
    dotsStyle,
    driver,
    onSwipe,
    ...rest
  } = props;

  const slides = Array.isArray(children) ? children : [children];

  const position = Animated.divide(driver, width);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: driver } } }],
    { useNativeDriver: true }
  );

  const onMomentumScrollEnd = e => {
    if (onSwipe) {
      onSwipe(e, e.nativeEvent.contentOffset.x / width);
    }
  };

  return (
    <View style={styles.full}>
      <Animated.ScrollView
        horizontal
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScroll}
        pagingEnabled
        ref={ref}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        {...rest}>
        {slides.map((slide, i) => (
          <View key={`slide-${i}`} style={styles.slide}>
            {slide}
          </View>
        ))}
      </Animated.ScrollView>

      {dots && (
        <View style={[styles.dotContainer, { bottom: dotsBottom }]}>
          {slides.map((slide, i) => (
            <View
              key={`dot-${i}`}
              style={[dotsStyle, { backgroundColor: dotsColor }]}
            />
          ))}
        </View>
      )}

      {dots && (
        <View style={[styles.dotContainer, { bottom: dotsBottom }]}>
          {slides.map((slide, i) => (
            <Animated.View
              key={`dot-active-${i}`}
              style={[
                dotsStyle,
                {
                  backgroundColor: dotsColorActive,
                  opacity: position.interpolate({
                    inputRange: [i - 1, i, i + 1],
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp'
                  })
                }
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
});

Swiper.defaultProps = {
  dotsBottom: 100,
  dotsColor: 'rgba(0, 0, 0, 0.25)',
  dotsColorActive: '#000',
  dotsStyle: {
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8
  },
  driver: new Animated.Value(0)
};

const styles = {
  full: { flex: 1 },
  slide: { width },
  dotContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute'
  }
};

export default Swiper;
