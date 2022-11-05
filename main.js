let thankyou = setTimeout(() => {alert('Xystus says thank you for visiting my website')}, 2000);
  
const click = document.getElementById('buton');
click.addEventListener('click', (e) => {
    e.preventDefault();

    var txt = document.getElementById('txt').value;
     
     if(!txt){
       alert('please write your coment to submit')
       return;
       
     }else{
        const mess = document.createElement('div');
        mess.classList.add('mess');
        
        const p = document.createElement('p');
       
        const text = document.createTextNode(txt);
        p.appendChild(text);
        mess.appendChild(p);
    
    document.getElementById('pwrapper').appendChild(mess);
    }
  });


