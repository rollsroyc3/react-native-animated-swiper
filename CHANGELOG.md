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
