import Dex from "./components/Dex"
import ListaPoke from "./components/ListaPoke"
import Titulo from "./components/Titulo"
import styles from "./App.module.css"

import { Provider } from "react-redux"
import store from "./store"

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Titulo/>
        <ListaPoke/>
        <div className={styles.dex}>
          <Dex/>
        </div>
      </Provider>
    </div>
  )
}

export default App
