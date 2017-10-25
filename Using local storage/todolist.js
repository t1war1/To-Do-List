window.onload=()=>{
let addbtn=document.getElementById('add-btn');
let value=document.getElementById('add-new-todo');
let list=document.getElementById('list');
let delBtn = document.getElementById('del-btn');
let warning=document.getElementById('warning');
let message=document.getElementById('message');
let count=-1;
list.innerHTML="";
addbtn.onclick = ()=> {
    let taskvalue = value.value;
    if(taskvalue!=="")
    {
        warning.style.display='none';
        if(count<1)
        {
            message.style.display='none';
                count=0;
        }
        count++;
        value.value = "";
        let task = document.createElement('li');
        task.className = 'list-group-item';
        let taskname=document.createElement('span');
        taskname.innerHTML = taskvalue;
        task.appendChild(taskname);

        let removeElement=document.createElement('i');
        removeElement.className='fa fa-times col-1 border ml-3';
        removeElement.title='Remove Task';
        task.appendChild(removeElement);


        let increasePriority=document.createElement('i');
        increasePriority.className='fa fa-arrow-up col-1 border';
        increasePriority.title='Increase Priority';
        task.appendChild(increasePriority);

        let decreasePriority=document.createElement('i');
        decreasePriority.className='fa fa-arrow-down col-1 border';
        decreasePriority.title='Decrease Priority';
        task.appendChild(decreasePriority);

        list.appendChild(task);
        removeElement.onclick=function () {
            list.removeChild(removeElement.parentNode);
            count--;
            console.log(count);
            if(count===0)
            {
                message.innerHTML="Great! You've completed all tasks.";
                message.style.display='block';
            }

        };
        increasePriority.onclick=function () {
            let p=increasePriority.parentNode;
            let a=p.previousSibling.childNodes[0].innerHTML;
            p.previousSibling.childNodes[0].innerHTML=p.childNodes[0].innerHTML;
            p.childNodes[0].innerHTML=a;
        };
        decreasePriority.onclick=function () {
            let p=decreasePriority.parentNode;
            let a=p.nextSibling.childNodes[0].innerHTML;
            p.nextSibling.childNodes[0].innerHTML=p.childNodes[0].innerHTML;
            p.childNodes[0].innerHTML=a;
        }
    }
    else{
        warning.innerHTML="Enter the task correctly!!!";
        warning.style.display='block';
    }

};

delBtn.onclick= ()=>
{
    if(list.childElementCount!==0)
    list.removeChild(list.childNodes[0]);
    count--;
    console.log(count);
    if(count===0)
    {
        message.innerHTML="Great! You've completed all tasks.";
        message.style.display='block';
    }
};

};
