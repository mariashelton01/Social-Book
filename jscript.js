//....SIDEBAR....
//....SIDEBAR....
const menuItem = document.querySelectorAll('menu-item');

//remove active classlist.......
const removeActive = ()=>{  
   menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
    removeActive();
    item.classList.add{'active'}

    if(item.id != 'notifice'){
        document.querySelector('.notification').style.display ='none'
    }else{
        document.querySelector('.notification').style.display='block'
        document.querySelector('notfice .count').style.display='none'
       }
    })
})


//........MESSAGE.........
//........MESSAGE.........
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click',()=>{

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display='none'


    setTimeout(()=>{
        messageBox.classList.remove('box-sh');
    }, 1000);
    message.querySelector('.count').style.display='none'
})
