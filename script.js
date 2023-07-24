function clicking(i){
    x=document.getElementById("display");
    try{
        switch(i){
        case 1: x.value=x.value+1; break;
        case 2: x.value=x.value+2; break;
        case 3: x.value=x.value+3; break;
        case 4: x.value=x.value+4; break;
        case 5: x.value=x.value+5; break;
        case 6: x.value=x.value+6; break;
        case 7: x.value=x.value+7; break;
        case 8: x.value=x.value+8; break;
        case 9: x.value=x.value+9; break;
        case 0: x.value=x.value+0; break;
        case 11: x.value=x.value+0+0; break;
        case '.': x.value=x.value+'.'; break;
        case '%': x.value=x.value+'%'; break;
        case '/': x.value=x.value+'/'; break;
        case '*': x.value=x.value+'*'; break;
        case '-': x.value=x.value+'-'; break;
        case '+': x.value=x.value+'+'; break;
        case 'AC': x.value=""; break;
        case '=': x.value=eval(x.value); break;
        case '@': var temp=(x.value+"").split("");
                    temp.pop();
                    x.value=temp.join("");
                    break;
    }
    }
    catch{
        alert("You have entered wrong input");
    }
}