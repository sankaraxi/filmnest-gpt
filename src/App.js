//router
import { createBrowserRouter, Outlet } from "react-router-dom"

//components
import Body from "./components/Body"
import Browse from "./components/Browse"
import Login from "./components/Login"
import Header from "./components/Header"
import MovieDetails from "./components/MovieDetails"

//redux
import appStore from "./utils/redux/appStore"
import { Provider } from "react-redux"
import ActorDetails from "./components/ActorDetails"
import GeminiSearch from "./components/GeminiSearch"


const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />

        <Outlet />
      </div>
    </Provider>
  )
}
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/gptsearch",
        element: <GeminiSearch />,
      },
      {
        path:'/movies/:movId',
        element: <MovieDetails />
      },
      {
        path:'/cast/:castId',
        element: <ActorDetails />
      }
    ] 
  }
])



export default App;