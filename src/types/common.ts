export type TypedData<TYPE extends string, DATA = undefined> = DATA extends undefined
  ? {type: TYPE}
  : {type: TYPE; data: DATA}

export type Notification = {
  id: number
  message: string
}

export type ConvertDirectionType = 'from' | 'to'
