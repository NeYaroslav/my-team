export type ValueOrNull<T> = {
  [P in keyof T]: T[P] | null
}
