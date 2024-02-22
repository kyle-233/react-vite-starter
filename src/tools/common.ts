/**
 * 对象/数组下划线转驼峰/驼峰转下划线
 * @param obj [需要转换的数据]
 * @param reverse [是否反转->驼峰转下划线]
 * @param result [一般不用传，作为返回数据用，如果传了，则在此基础上扩展返回数据]
 */

export const snakeCase = (key: string): string => {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export const snakeCaseToCamelCase = <T extends {}>(obj: AnyObj | any[], reverse?: boolean, result?: AnyObj): T => {
  const returnResult: AnyObj = result === undefined && Array.isArray(result) ? [] : {}
  for (const [key, val] of Object.entries(obj)) {
    const index = reverse ? snakeCase(key) : snakeCase(key)
    returnResult[index as keyof typeof returnResult] =
      Array.isArray(val) || val ? snakeCaseToCamelCase<T>(val, reverse) : val
  }
  return returnResult as T
}
