import './App.css'
import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary'
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { ReactQuery } from "./components/ReactQuery";
import { Transition } from "./components/Transition";

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <hr />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>全体エラーです!</p>}>
        <Suspense fallback={<p>全体ローディング中</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
