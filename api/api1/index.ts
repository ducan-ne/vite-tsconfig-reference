import { state, State } from "@fe/state"
import { FromPkg } from "@pkg/cache"

export const Test123 = true

const a: State = {
  test: true
}
console.log(a, state, FromPkg)