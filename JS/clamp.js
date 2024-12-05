export default function clamp(min, max, value) {
  if (max <= value) {
    return max
  } else if (min >= value) {
    return min
  } else {
    return value
  }
}
