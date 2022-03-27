// new image function
function newImage (imageSource, left, bottom) {
    let newImage = document.createElement('img')
    newImage.src = imageSource
    newImage.style.position = 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    document.body.append(newImage)
}
// new item function
function newItem (imageSource, left, bottom) {
    let newItem = document.createElement('img')
    newItem.src = imageSource
    newItem.style.position = 'fixed'
    newItem.style.left = left
    newItem.style.bottom = bottom
    document.body.append(newItem)

    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
}



// green character
newImage('assets/green-character.gif', '100px', '100px')
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// pine tree
newImage('assets/pine-tree.png', '450px', '200px')
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

//sword that can be picked up
newItem('assets/sword.png', '500px', '405px')
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })


// other clickable items
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')


// more images
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '300px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newImage('assets/rock.png', '50px', '350px')
