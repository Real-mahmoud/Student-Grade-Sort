let form=document.querySelector('form');
let errorMessage=document.getElementById('errorMsg')
window.addEventListener('load',function(){

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let username = document.getElementById('name').value;
        let password = document.getElementById('pw').value;

        if (username==='admin' && password==='1234') {
            let mainPage=this.window.open('main.html','_self');
        }
        else {
            form.reset();
            errorMessage.textContent="Invalid username or password";
        }
        
    })
 
})