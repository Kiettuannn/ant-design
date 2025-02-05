import LayoutDefault from "../Layout/LayoutDefault"
import BookRoom from "../pages/BookRoom"
import CreateRoom from "../pages/CreateRoom";
import Dashboard from "../pages/Dashboard"

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children:[
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/book-room",
        element: <BookRoom />
      },
      {
        path: "/create-room",
        element: <CreateRoom />
      }
    ]
  }
];