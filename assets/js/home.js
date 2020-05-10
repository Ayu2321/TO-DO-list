var date = document.getElementsByClassName("date");
var descrip = document.getElementsByClassName("description");
var category = document.getElementsByClassName("category");
var categoryStyle = document.getElementsByClassName("category_style");
var priorityData =  document.getElementsByClassName("priority_data")[0];  
var priority_status= document.getElementsByClassName("priority");
console.log(priority_status);
//priority list
for(let i=0; i<priority_status.length; i++)
         {

            if((priority_status[i].innerHTML=="Critical") || (priority_status[i].innerHTML=="Highest"))
                {
                    var prioritizedTasksList = document.createElement('div');
                    prioritizedTasksList.className = "prioritized_Tasks_List";

                    var fetchedDescription = document.createElement('div');
                    fetchedDescription.className = "fetched_description";
                    fetchedDescription.innerHTML = descrip[i].innerHTML;
                    console.log(descrip[i].innerHTML);

                    var fetchedCategory = document.createElement('div');
                    fetchedCategory.className = "fetched_category";
                    fetchedCategory.classList.add('category_style');
                    fetchedCategory.innerHTML = category[i].innerHTML;

                    var fetchedDate = document.createElement('div');
                    fetchedDate.className = "fetched_date";
                    fetchedDate.innerHTML = date[i].innerHTML;


                    var priorityList = document.createElement('div');
                    priorityList.className = "priority_list";
                    priorityList.innerHTML = priority_status[i].innerHTML;

                   
                    prioritizedTasksList.appendChild(fetchedDescription);
                    prioritizedTasksList.appendChild(fetchedCategory);
                    prioritizedTasksList.appendChild(fetchedDate);
                    prioritizedTasksList.appendChild(priorityList);
                    priorityData.appendChild(prioritizedTasksList);

                }
        }



function tasksBlock(){
    document.getElementById('data').style.display = "block";
    document.getElementsByClassName('priority_data')[0].style.display = "none";
}

function priorityBlock(){
    document.getElementById('data').style.display = "none";
    document.getElementsByClassName('priority_data')[0].style.display = "block";
}
//different colors of different categories
for(let i=0; i<categoryStyle.length; i++)
{
    if(categoryStyle[i].innerHTML=="Personal")
    {
        categoryStyle[i].style.backgroundColor= "#868181";
        
    }
    else if(categoryStyle[i].innerHTML=="Work")
    {
        categoryStyle[i].style.backgroundColor= "rgb(73, 62, 105)";
    }
    else if(categoryStyle[i].innerHTML=="Schooling")
    {
        categoryStyle[i].style.backgroundColor= "rgb(162, 3, 40)";
    }
    else if(categoryStyle[i].innerHTML=="Cleaning")
    {
        categoryStyle[i].style.backgroundColor= "rgb(4, 123, 79)";
    }
    else if(categoryStyle[i].innerHTML=="Others")
    {
        categoryStyle[i].style.backgroundColor= "rgb(101, 66, 60)";
    }
    
}


