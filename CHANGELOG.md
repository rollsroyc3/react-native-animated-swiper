# 0.0.15

- Drop `react-native-behavior`.
- Enhance performance.
- **Breaking**: A `backgroundColor` prop is now required instead of having to bass a `backgroundColor` prop to each child.

```js
// before
<Swiper>
  <Slide backgroundColor="red" />
  <Slide backgroundColor="green" />
  <Slide backgroundColor="blue" />
</Swiper>
```

```js
// after
<Swiper backgroundColor={['red', 'green', 'blue']}>
  <Slide />
  <Slide />
  <Slide />
</Swiper>
```

- **Breaking**: `scrollViewProps` props has been removed, any extra `ScrollView` props are being forwarded now.

```js
// before
<Swiper scrollViewProps={{ horizontal: false }} />
```

```js
// after
<Swiper horizontal={false} />
```
