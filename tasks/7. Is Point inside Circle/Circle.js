import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {

      let distance = Math.sqrt(Math.pow((Point.x - center.x), 2) + Math.pow((Point.y - center.y), 2));
      return distance <= radius;
    }
  }
}
