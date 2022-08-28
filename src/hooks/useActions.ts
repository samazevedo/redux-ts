// useDispatch is used to get access to the dispatch action
// import { useDispatch } from 'react-redux'
import { useAppDispatch } from './useAppDispatch'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../state'

export const useAction = () => {
    const dispatch = useAppDispatch()

    return bindActionCreators(actionCreators, dispatch)
    // it returns an object like
    // {searchRepositories: dispatch(searchRepositories)}
}
