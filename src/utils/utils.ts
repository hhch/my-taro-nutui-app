function group(array: Array<any>, subNum: number) {
  let index = 0
  let newArray: Array<any> = []
  while (index < array.length) {
    const arr = array.slice(index, (index += subNum)) as Array<any>
    newArray.push(arr)
  }
  return newArray
}
export { group }
