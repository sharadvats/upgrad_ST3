function fun()
{
    
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var sharad=document.getElementById("mobile");

    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");

    if(name.value=="" || email.value=="" || sharad.value=="")
    {
        window.alert("Enter the  required field");
    }
    else if(name.value.length<3)
    {
        window.alert("Your name must be 3 characters long");
    }
    else if(sharad.value.length!=10)
    {
        window.alert("Enter valid mobile number");
    }
    else if(atpos < 1 || ( dotpos - atpos < 2 ))
    {
        window.alert("Enter valid email-id");
    }
    else
    {
        var disp=document.getElementById("sharma");
        disp.style.display="block";
        var table = document.getElementById("detailll");
        var count=0;
    for (let row of table.rows) 
    {
        for(let cell of row.cells) 
        {
        if(cell.innerText == email.value || cell.innerText==sharad.value)
        count=1;
        }
    }
    if(count==1)
    alert("User already exists");
    else
    {
    var row = table.insertRow(table.length);
    row.setAttribute("class","table-success");
    row.setAttribute("id","delRow")    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML= sharad.value;
    cell4.innerHTML="<a href='#' onclick='del(delRow)'>Delete</a>";

    name.value='';
    email.value='';
    sharad.value='';
    }
}
}
function del(delRow)
{
    var table = document.getElementById("detailll");
    delRow.parentNode.removeChild(delRow);

}