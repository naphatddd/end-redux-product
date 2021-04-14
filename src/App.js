import Layout from './modules/ui/components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ConfigureStore from 'store/configureStore'

const store = ConfigureStore()
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  )
}

export default App
