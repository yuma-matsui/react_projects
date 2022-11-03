import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(true)
  const [message, setMessage] = useState('')

  const handleClick = message => {
    setIsToggleOn(prev => !prev)
    setMessage(message)
  }
  return (
    <div>
      { message &&
        <p>{ message }</p>
      }
      <button onClick={() => handleClick('hello') }>
        { isToggleOn ? 'OFF' : 'ON' }
      </button>
    </div>
  )
}

const Clock = ({ startTime }) => {
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => setNow(new Date().toLocaleTimeString()))
  }, [])

  return (
    <div>
      <h1>Start From { startTime.toLocaleTimeString() }</h1>
      <h2>It is: {now}</h2>
      <Toggle />
    </div>
  )
}

const WarningBanner = ({ isWarn }) => {
  if (!isWarn) return null

  return <p style={{ color: 'red' }}>Warning!</p>
}

const Page = () => {
  const [isWarn, setIsWarn] = useState(false)

  const handleToggleClick = () => {
    setIsWarn(prev => !prev)
  }

  return (
    <div>
      <WarningBanner isWarn={isWarn} />
      <button onClick={handleToggleClick}>
        { isWarn ? 'Hide' : 'Show' }
      </button>
    </div>
  )
}

const EssayForm = () => {
  const [essay, setEssay] = useState('')
  const [flavor, setFlavor] = useState([])
  const [checkItems, setCheckItems] = useState([])

  const onChangeEssay = (e) => setEssay(e.target.value)
  const onChangeFlavor = (e) => setFlavor(prev => [...prev, e.target.value])
  const onChangeCheckBox = (e) => {
    if (e.target.checked) setCheckItems(prev => [...prev, e.target.value])
    if (checkItems.includes(e.target.value)) {
      setCheckItems(prev => (prev.filter(item => item !== e.target.value)))
    }
  }
  const onSubmitForm = (e) => {
    console.log(flavor)
    alert(`form was submitted: { essay: ${essay}, flavor: ${flavor}}, checkItems: ${checkItems}`)
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="essay">Essay:</label>
        <textarea
          id='essay'
          value={essay}
          onChange={onChangeEssay}
        />
        <label htmlFor="flavor">flavor:</label>
        <select id='flavor' multiple={true} value={flavor} onChange={onChangeFlavor}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="lemon">Lemon</option>
        </select>
        <div>
          <input type="checkbox" value='hoge' id='hoge' onChange={onChangeCheckBox} />
          <label htmlFor="hoge">hoge</label>
        </div>
        <div>
          <input type="checkbox" value='foo' id='foo' onChange={onChangeCheckBox} />
          <label htmlFor="foo">foo</label>
        </div>
        <input type="submit" value='投稿' />
      </form>
    </>
  )
}

root.render(<EssayForm />)