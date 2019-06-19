import React from 'react';

import { Animated, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const Swiper = props => {
  const {
    children,
    dots,
    dotsBottom,
    dotsColor,
    dotsColorActive,
    dotsStyle,
    driver,
    onSwipe,
    activeIndex,
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

   const _getWrappedRef = () => {
        // https://github.com/facebook/react-native/issues/10635
        // https://stackoverflow.com/a/48786374/8412141
        return this._swiper && this._swiper.getNode && this._swiper.getNode();
    }

  const scrollTo = index => {
    let wrappedRef = this._getWrappedRef();
    wrappedRef.scrollTo({x: index, y: 0, animated: true})
  }

  const dotsContainerStyle = [styles.dotsContainer, { bottom: dotsBottom }];

  const dotStyle = [dotsStyle, { backgroundColor: dotsColor }];
  const dotActiveStyle = [dotsStyle, { backgroundColor: dotsColorActive }];

  const _snapToItem = (value) => {
 this._swiper.scrollTo({x: index, y: 0, animated: true})
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScroll}
        scrollTo={scrollTo}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        {...rest}
        horizontal
        ref={ref => (this._swiper = ref)}>
        {slides.map((slide, index) => (
          <View key={`slide-${index}`} style={styles.slide}>
            {slide}
          </View>
        ))}
      </Animated.ScrollView>

      {dots && (
        <View style={dotsContainerStyle}>
          {slides.map((slide, index) => (
            <View key={`dot-${index}`} style={dotStyle} />
          ))}
        </View>
      )}

      {dots && (
        <View style={dotsContainerStyle}>
          {slides.map((slide, index) => (
            <Animated.View
              key={`dot-active-${index}`}
              style={[
                dotActiveStyle,
                {
                  opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
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
};

Swiper.defaultProps = {
  activeIndex: 0,
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
  container: { flex: 1 },
  slide: { width },
  dotsContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute'
  }
};

export default Swiper;
