import { createAction } from '@reduxjs/toolkit'

export const sortByScore = createAction('sortByScore')
export const sortByLowestPrice = createAction('sortByLowestPrice')
export const sortByHighestPrice = createAction('sortByHighestPrice')
export const sortAlphabetically = createAction('sortAlphabetically')
