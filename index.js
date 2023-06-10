//bringing box here
let boxes  =document.querySelectorAll('.box');
//bringing button here
let btn = document.getElementById('btn');
//bringing image here
image  = document.querySelector('.image');


//adding event listener to boxes
boxes.forEach(box => {
    box.addEventListener('dragover', e => {
        
        e.preventDefault();
        box.classList.add('hovered');
    });

    box.addEventListener('drop', e => {
        e.preventDefault();
        box.appendChild(image);
        alert('item dropped succesfully')
    }
   
    );
   
});

// implement reset function

function reset (){
    boxes.forEach(box => {
        box.innerHTML = '';
        let boxed = document.getElementById('boxed');
        // again set src to origin state
        image.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        boxed.appendChild(image);

    });
}

btn.addEventListener('click', reset)


