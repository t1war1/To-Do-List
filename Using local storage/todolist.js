$(()=>{
let addbtn= $("#add-btn");
let value= $("#add-new-todo");
let list=$("#list");
let delBtn = $("#del-btn");
let warning=$("#warning");
let message=$("#message");
let count=-1;
list.html("");
addbtn.click(()=> {
   let taskvalue = value.val();
   alert(taskvalue);
    if(taskvalue!=="")
    {
        warning.css("display","none");
        if(count<1)
        {
            message.css("display","none");
                count=0;
        }
        count++;
        value.val("");
        let task = $("<li></li>");
         task.addClass("list-group-item");
        let taskname=$("<span></span>");
        taskname.html(taskvalue);
        task.append(taskname);

            let removeElement=$("<i></i>")
            removeElement.addClass("fa fa-times col-1 border ml-3").attr("title","Remove Task");
            task.append(removeElement);

            let increasePriority=$("<i></i>");
            increasePriority.addClass("fa fa-arrow-up col-1 border").attr("title","Increase Priority");
            task.append(increasePriority);

        let decreasePriority=$("<i></i>");
        decreasePriority.addClass("fa fa-arrow-down col-1 border").attr("title","Decrease Priority");
        task.append(decreasePriority);

        list.append(task);

        removeElement.click(()=>{
            removeElement.parent().remove();
        });

//         increasePriority.onclick=function () {
//             let p=increasePriority.parentNode;
//             let a=p.previousSibling.childNodes[0].innerHTML;
//             p.previousSibling.childNodes[0].innerHTML=p.childNodes[0].innerHTML;
//             p.childNodes[0].innerHTML=a;
//         };

//         decreasePriority.onclick=function () {
//             let p=decreasePriority.parentNode;
//             let a=p.nextSibling.childNodes[0].innerHTML;
//             p.nextSibling.childNodes[0].innerHTML=p.childNodes[0].innerHTML;
//             p.childNodes[0].innerHTML=a;
//         }
//     }
//     else{
//         warning.innerHTML="Enter the task correctly!!!";
//         warning.style.display='block';
//     }
//

    }}
);

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

});
