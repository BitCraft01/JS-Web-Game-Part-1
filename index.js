function newImage(location, left, bottom){
    let thing = document.createElement('img')
    thing.src = location
    thing.style.position = 'fixed'
    thing.style.left = left + 'px'
    thing.style.bottom = bottom + 'px'
    document.body.append(thing)
    return thing
}

function newItem(location, left, bottom){
    let thing = newImage(location, left, bottom);

    thing.addEventListener('dblclick', function () {
        thing.remove()
    })
}



newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);


