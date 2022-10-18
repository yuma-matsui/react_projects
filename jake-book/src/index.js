const body = document.querySelector('body')

const title = document.createElement('h1')
title.textContent = '簡単なメモアプリ'

const input = document.createElement('input')

const btn = document.createElement('button')
btn.setAttribute('id', 'btn')
btn.textContent = '追加'

const container = document.createElement('div')
container.classList.add('container')

const listTitle = document.createElement('p')
listTitle.textContent = 'メモ一覧'

const ul = document.createElement('ul')

container.appendChild(listTitle)
container.appendChild(ul)

body.appendChild(title)
body.appendChild(input)
body.appendChild(btn)
body.appendChild(container)

btn.addEventListener('click', () => {
  const itemTitle = input.value
  const listItem = document.createElement('li')
  listItem.textContent = itemTitle

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = '削除'

  listItem.appendChild(deleteBtn)

  ul.appendChild(listItem)
  input.value = ''
  
  const deleteButtons = document.querySelectorAll('.delete-btn')
  if (deleteButtons) {
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const listItem = btn.parentElement
        ul.removeChild(listItem)
      })
    })
  }
})

