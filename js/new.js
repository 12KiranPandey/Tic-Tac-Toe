var state=true;
var arr1=[1,0,1,0,1,0,0,1,0];
var user1,user2;

function setVal(id)
{ 
    if(state)
    {
        document.getElementById(id).innerHTML=setIndex(id,'X');
        
    }
   else
    {
        document.getElementById(id).innerHTML=setIndex(id,'O');
    }
    console.log(arr1);
    getWinner(state);
}

function setIndex(index,val)
{
    
    if(arr1[index]==1 || arr1[index]==0)
    {
        arr1[index]=val;
        state=!state;
        
    }
    else
    {
        alert("Not Allowed ");
    }
   
    return arr1[index];
}


function getWinner(winnerStatus)
{
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] ||arr1[3]==arr1[4] && arr1[4]==arr1[5]||arr1[6]==arr1[7] && arr1[7]==arr1[8])
    {
        
        if(state==false)
        {
            alert(user1 +" Winner ");
        }
        else{
            alert(user2+" Winner");
        }
        resetArray();
    }   
    else if(arr1[0]==arr1[3] && arr1[3]==arr1[6] ||arr1[1]==arr1[4] && arr1[4]==arr1[7]||arr1[2]==arr1[5] && arr1[5]==arr1[8])
    {
        
        if(state==false)
        {
            alert(user1 +" Winner ");
        }
        else{
            alert(user2+" Winner");
        }
        resetArray();
    }   
    else if(arr1[0]==arr1[4] && arr1[4]==arr1[8] ||arr1[2]==arr1[4] && arr1[4]==arr1[6])
    {
        
        if(state==false)
        {
            alert(user1 +" Winner ");
        }
        else{
            alert(user2+" Winner");
        }
        resetArray();
    }   
}

//Start Game

function start()
{
    user1=document.querySelector("#user1").value;
    user2=document.querySelector("#user2").value;
    if(user1=="" || user2=="")
    {
        alert("Please Fill User Name To Start The Game ");
    }
    else
    {
        document.querySelector("#info").style.display="none";
        document.querySelector(".game").style.display="block";
    }
}
function restart()
{
    state=true;
    arr1=[1,0,1,0,1,0,0,1,0];
    for(let i=0;i<=8;i++)
    {
        document.getElementById(i).innerHTML="";
    }
}

function resetArray()
{
    arr1=[null,null,null,null,null,null,null,null,null];

}