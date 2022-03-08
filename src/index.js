import './less/index.less'

// Your code goes here!


// modal 


//1) Load event
window.addEventListener('load', () => {
    alert (`Page is loaded`)
})

// constants
const header = document.querySelector('h1')
const btn = document.querySelectorAll('.btn')
const nav = document.querySelectorAll('.nav-link')
const bodyColr = document.querySelector('body')
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  





//2) copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        alert(`Copied: '${text}'`)
    })
})

// 3) click
window.addEventListener('click', evt => {
     console.log("clicked")
     evt.target.style.color ='pink'
}); 

btn.forEach(el => el.addEventListener('click', function() {
    console.log('button clicked')
    el.style.backgroundColor ='black'
}));

// 4) double click (not working!)

window.addEventListener('dblclick', ()  => {
    console.log('double click!')
    alert ('double trouble!')
})

//  5) MouseOver

nav.forEach(el => el.addEventListener('mouseover', () => {
    el.style.color ='purple';
    setTimeout(function() {
        el.style.color = "";
      }, 500);
    }, false)
);




// 6) Resize

window.addEventListener('resize', () => {
    alert ("Hey man don't resize me, thats not cool!");
});

// 7) keydown

window.addEventListener('keydown', evt => {
        if(evt.code == 'KeyA') {
            alert ('A is for Apple')
        } else if (evt.code == 'KeyB') {
            alert('B is for Bumblebee')
        } else {
                setBg();
        }
    })
// 8) Key Up
    window.addEventListener('keyup', evt => {
                setBg();
    })
//9) scroll

window.addEventListener('scroll', () => {
    bodyColr.style.backgroundColor = "gray";
    setTimeout(function() {
        bodyColr.style.backgroundColor='';
    }, 500);
},false);


// 10) mouse wheel
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  document.onwheel = zoom;
  