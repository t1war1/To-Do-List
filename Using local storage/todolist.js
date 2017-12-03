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
            count--;
            if(count===0)
            {
                message.html("Great! You've completed all tasks. Enter more");
                message.css("display","block");

            }
        });

            increasePriority.click(()=>{
                let p=increasePriority.parent().prev();
                let temp=p.children(":first").text();
                p.children(":first").text(increasePriority.parent().children(":first").text());
                increasePriority.parent().children(":first").text(temp);
            });

            decreasePriority.click(()=>{
               let p=decreasePriority.parent().next();
               let temp=p.children(":first").text();
               p.children(":first").text(decreasePriority.parent().children(":first").text());
               decreasePriority.parent().children(":first").text(temp);
            });
    }
    else{
        warning.html("Enter the task correctly");
        warning.css("display","block");
    }
    }
);

    delBtn.click(()=>{
       if(list.children().length!==0)
           list.children(":first").remove();
       count--;
       console.log(count);
       if(count===0)
       {
           message.html("Great! You've completed all tasks. Enter more");
           message.css("display","block");

       }
    });
});
