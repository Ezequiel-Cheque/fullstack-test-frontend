import { Navigation } from "./ui/components/Navigation"
import { AuthProvider } from "./ui/context/AuthProvider"

import "./ui/styles/main.css";

function App() {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App