// main.js
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
  // Send PUT Request here
    event.preventDefault();

  fetch('/students', {
    method: 'put',
        headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      nome: 'Heisler Jorge de Lemos Stlano',
      turma: 'Turma A de 2022'
    })
  })

    .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    window.location.reload(true)
  })
})



const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
  fetch('/students', {
    method: 'delete',
        headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
      name: ':'
    })
  })
  .then(res => {
      if (res.ok) return res.json()
    })
    .then(data => {
      window.location.reload()
    })
})
