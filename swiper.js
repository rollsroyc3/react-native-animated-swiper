import React, { Component } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';

import Behavior from 'react-native-behavior';

const { height, width } = Dimensions.get('window');

export default class extends Component {
  engine = new Animated.Value(0);

  position = Animated.divide(this.engine, width);

  scroll = Animated.event([
    { nativeEvent: { contentOffset: { x: this.engine } } }
  ]);

  render() {
    let { children } = this.props;

    let indices = [];
    let states = [];

    // check if we have a single child
    if (!Array.isArray(children)) children = [children];

    // remove if null
    children = children.filter(child => child);

    // if we have a single valid child
    if (children.length === 1) {
      indices.push(0);
      states.push({});
    }

    // if we have no valid children
    if (children.length === 0) {
      indices = [0, 0];
      states = [{}, {}];
    }

    children.forEach((child, i) => {
      indices.push(width * i);
      states.push({ backgroundColor: child.props.backgroundColor });
    });

    return (
      <View style={styles.full}>
        <Behavior
          animatedValue={this.engine}
          clamp
          indices={indices}
          states={states}
          style={styles.slides}
        />

        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.props.onSwipe}
          {...this.props.scrollViewProps}
          horizontal
          onScroll={this.scroll}
          scrollEventThrottle={16}>
          {children.map((slide, i) => (
            <View key={`slide-${i}`} style={styles.slide}>
              {slide}
            </View>
          ))}
        </ScrollView>

        {this.props.dots && (
          <View>
            {this.props.shadow && (
              <View
                style={[
                  styles.shadowContainer,
                  styles.shadow,
                  this.props.shadowStyle
                ]}
              />
            )}

            <View
              style={[
                styles.dotContainer,
                { bottom: this.props.dotsBottom || 30 }
              ]}>
              {children.map((slide, i) => (
                <View
                  key={`swiper-dot-${i}`}
                  style={[
                    styles.dot,
                    this.props.dotStyle,
                    {
                      backgroundColor:
                        this.props.dotsColor || 'rgba(0, 0, 0, 0.25)'
                    }
                  ]}
                />
              ))}
            </View>

            <View
              style={[
                styles.dotContainer,
                { bottom: this.props.dotsBottom || 30 }
              ]}>
              {children.map((slide, i) => (
                <Animated.View
                  key={`swiper-dot-active-${i}`}
                  style={[
                    styles.dot,
                    this.props.dotStyleActive,
                    {
                      backgroundColor:
                        this.props.dotsColorActive || 'rgba(0, 0, 0, 0.75)',
                      opacity: Animated.add(this.position, 1 - i)
                    }
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  full: { flex: 1 },
  slides: { height, position: 'absolute', width },
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
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { height: -0.5, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 7.5
  }
};
