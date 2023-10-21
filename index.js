
document.querySelector('.cross').style.display='none';
document.querySelector('.menubtn').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        
        document.querySelector('.cross').style.display='none';
        setTimeout(()=>{
            document.querySelector('.menu').style.display='inline';

        },300);
        
    }
    else{
        document.querySelector('.menu').style.display='none';
        

        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';

        },300);
        
    }
})
