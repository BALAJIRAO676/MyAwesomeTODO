var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

 var removeButton = document.getElementById('remove')
 removeButton.addEventListener('click', removeItem)

 function removeItem(){
     
 }
function addItem(){
    var input =document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)
    
 
    if(item === ''){
        setTimeout(() => {
   var display = document.getElementById('alerting').textContent = 'Enter a valid TODO !'

            alerting.className = 'visualfade'       
            
        },2000)
        return false
    } else{
        // create li
        li = document.createElement('li')

        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        // create label
        var label = document.createElement('label')

        // add these elements on the webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        
        setTimeout(() => {
            li.className = 'visual'

        }, 3)

        input.value = '' 
    }
}
