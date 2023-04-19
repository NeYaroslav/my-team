import type { RootState, AppDispatch } from './store'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
