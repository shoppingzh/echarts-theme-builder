import { javascript, stylistic, typescript, vue, } from '@shoppingzh/eslint-config'

export default [
  {
    ignores: [
      'dist/*'
    ]
  },
  ...javascript(),
  ...stylistic(),
  ...typescript({
    files: [
      '**/*.?([cm])[jt]s?(x)',
      '**/*.vue'
    ],
  }),
  ...vue({
    typescript: true,
  }),
]
