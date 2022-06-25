// let childcontainer = document.getElementById('childcontainer');
// let applybox = document.getElementsByClassName('apply-box')

// childcontainer.addEventListener('click', function(){
//     applybox.classList.add('disappear')
//     applybox.classList.add('overlay')
// })

function onabort(){
    document.getElementsByClassName("overlay").style.display = "block"
}

function off(){
    document.getElementsByClassName("overlay").style.display = "none"
}