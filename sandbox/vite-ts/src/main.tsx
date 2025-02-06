import { AgniflowProvider, defaultSystem } from "@agniflow-ui/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AgniflowProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <App />
      </ThemeProvider>
    </AgniflowProvider>
  </React.StrictMode>,
)
