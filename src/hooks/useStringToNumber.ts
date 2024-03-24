import { Ref, computed } from 'vue'

interface Rule {
  from: (num: number) => string
  to: (str: string) => number
}

interface Options {
  rule?: Rule
}

export function createUnitRule(unit: string): Rule {
  return {
    to: str => typeof str === 'string' ? Number(str.replace(unit, '')) : undefined,
    from: num => typeof num === 'number' ? `${num}${unit}` : num
  }
}

export default function(str: Ref<string>, options: Options) {
  const { rule } = options

  const number = computed({
    get() {
      return rule.to(str.value)
    },
    set(newVal) {
      str.value = rule.from(newVal)
    }
  })

  return {
    number,
  }
}
