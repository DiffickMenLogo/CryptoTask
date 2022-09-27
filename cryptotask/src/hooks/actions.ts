import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { portfolioActions } from '../store/reducers/portfolioSlice'

const actions = {
  ...portfolioActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
