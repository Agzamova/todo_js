'use strict';
let text = document.querySelector('.input-text')
let save = document.querySelector('.input-btn')
let list = document.querySelector('.list')

save.addEventListener('click', function() {
    let li = document.createElement('li')
    let label = document.createElement('label')
    let input = document.createElement('input')
    let div = document.createElement('div')
    let btn_edit = document.createElement('button')
    let btn_delete = document.createElement('button')
    li.classList.add('list-item')
    label.classList.add('item')
    input.classList.add('checkbox')
    input.setAttribute('type', 'checkbox')
    div.classList.add('btns')
    btn_edit.classList.add('btn-edit')
    btn_edit.classList.add('btn')
    btn_delete.classList.add('btn-delete')
    btn_delete.classList.add('btn')
    label.textContent = text.value
    btn_edit.textContent = 'Edit'
    btn_edit.addEventListener('click', (e) => {
        let value = label.textContent
        label.textContent = ''
        label.classList.remove('done')
        let edit = document.createElement('input')
        edit.value = value
        label.append(edit)
        edit.addEventListener('keypress', function(e) {
            if (e.key == 'Enter') {
                label.textContent = e.target.value
                let inp = document.createElement('input')
                inp.classList.add('checkbox')
                inp.setAttribute('type', 'checkbox')
                label.prepend(inp)
            }
        })
    })
    btn_delete.textContent = 'Delete'
    btn_delete.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()
    })
    label.prepend(input)
    div.append(btn_edit)
    div.append(btn_delete)
    li.append(label)
    li.append(div)
    list.append(li)
    text.value = ''
})

document.addEventListener('change', e => {
    if (e.target.matches('.checkbox')) {
        e.target.parentElement.classList.toggle('done')
    }
})