import './App.css';
import { ArticleHeading } from './components';

const article = {
  title: 'Hello',
  content: 'tiger hack',
  published: false
}

function App() {
  return <ArticleHeading article={article} />
}

export default App;
