var state=true;
var a=[1,0,1,0,1,0,0,1,0];
var player1,player2;
function SetVal(id){
    if(state){
    document.getElementById(id).innerHTML=SetIndex(id,'X');
    // state!=state;
    }

    else{
        document.getElementById(id).innerHTML=SetIndex(id,'O');
    }
    console.log(a);
     GetWinner();
}
function SetIndex(index,b){
    if(a[index]==1 || a[index]==0){
        a[index]=b;
        state=!state;
        // GetWinner();
    }
    else{
        alert("invalid");
    }
    return a[index];
}
// getWinner code
// function GetWinner(winnerstatus){
//     if(a[0]==a[1] && a[1]==a[2] ||a[3]==a[4] && a[4]==a[5]||a[6]==a[7] && a[7]==a[8]){
//     if(state==false){
//         alert(player1+" is Winner");
//     }
//     else{
//     alert( player2+" is Winner ");
//     }
//     resetArray();
//     getScore();
//     // reset();
//     // getScore();
// }
//     else if(a[0]==a[3] && a[3]==a[6] ||a[1]==a[4] && a[4]==a[7]||a[2]==a[5] && a[5]==a[8]){
//     if(state==false){
//         alert(player1+" is Winner");
//     }
//     else{
//     alert( player2+" is Winner ");
//     }
//     resetArray();
//     getScore();
//     // reset();

// }

//     else if(a[0]==a[4] && a[4]==a[8] ||a[2]==a[4] && a[4]==a[6]){
//     if(state==false){
//         alert(player1+" is Winner");
//     }
//     else{
//     alert( player2+" is Winner ");
//     }
//     resetArray();
   
//     getScore();
//     // reset();
// }
// }

function GetWinner()
{
    const winerIndex=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winerIndex.length;i++)
    {
        const[m,n,o]=winerIndex[i];
        if(a[m]==a[n] && a[n]==a[o])
        {
            if(state==false)
            {
                alert(player1 +" Winner ");
                 color="rgba(128,128,128,0.5)";

            }
            else{
                alert(player2+" Winner");
                color="#D3D3D3";
            }
            heighLight(m,n,o,color);
            resetArray();
             getScore();
            break;
            
        }
    }
   
}


function heighLight(x,y,z,bg)
{
    document.getElementById(x).style.backgroundColor=bg;
    document.getElementById(y).style.backgroundColor=bg;
    document.getElementById(z).style.backgroundColor=bg;
}

// start game code
function StartGame(){
    // alert("hi");
    player1=document.getElementById("player1").value;
    player2=document.getElementById("player2").value;
    if(player1==""||player2==""){
        alert("Two Players are required to play this game");
 }
 else{
    document.querySelector("#userinfo").style.display="none";
    document.querySelector("#game").style.display="block";
 }
 document.querySelector('#name1').innerHTML=player1;
 document.querySelector('#name2').innerHTML=player2;
    
}
// come to main page
function reload(){
    location.reload();
}
// reset game
function reset(){
    state=true;
     a=[1,0,1,0,1,0,0,1,0];
    for(let i=0;i<=8;i++){
        document.getElementById(i).innerHTML="";
        document.getElementById(i).style.backgroundColor="white";
    }

}
 function resetArray(){
    a=[null,null,null,null,null,null,null,null,null];

}
function getScore(){
    var v1=document.querySelector("#value1");
    var v2=document.querySelector("#value2");
    if(state==false){
        v1.innerHTML=parseInt(v1.innerHTML)+1;
    }
    else{
        v2.innerHTML=parseInt(v2.innerHTML)+1;
    }

}
