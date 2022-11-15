import { Link, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Page404, UserDetail, Users } from "./pages";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/users'>ユーザー一覧</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App;
