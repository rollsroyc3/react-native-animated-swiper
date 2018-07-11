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
