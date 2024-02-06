import { Color, LinearGradientObject, RadialGradientObject } from "echarts";

type GradientObject = LinearGradientObject | RadialGradientObject

export function isHorizontal(color: LinearGradientObject) {
  if (!color) return false
  return color.x2 > color.x
}

export function isVertical(color: LinearGradientObject) {
  if (!color) return false
  return color.y2 > color.y
}


export function isNormalColor(color: Color): color is string {
  return color != null && typeof color === 'string'
}

export function isGradientColor(color: Color): color is LinearGradientObject | RadialGradientObject {
  return color != null && typeof color === 'object' && 'type' in color
}

export function isLinearGradient(object: GradientObject): object is LinearGradientObject {
  return object && object.type === 'linear'
}

export function isRadialGradient(object: GradientObject): object is RadialGradientObject {
  return object && object.type === 'radial'
}