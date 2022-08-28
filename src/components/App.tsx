import { Provider } from 'react-redux'
import { store } from '../state'
import { Repositories } from './Repositories'

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>NPM Package Search</h1>
                <Repositories />
            </div>
        </Provider>
    )
}
