

function replaceAll(str, find, replace) {
    return str.replace(new RegExp("\\b"+find+"\\b", 'g'), replace);
  }



function execute()
{
    let code_text=document.getElementById("code").value;
    

    const myArray=code_text.split("\n");

    var i;
    var res="";
    for(i=0;i<myArray.length;i++)
    {
        res=res+"(geo=GB-"+myArray[i]+" OR geoip=GB-"+myArray[i]+") OR ";
    }
    console.log(res);
    document.getElementById("output").value=res;
    // var i;
    // var obj;
    // for(i=1;i<myArray.length;i++)
    // {
    //     const arr2=myArray[i].split(" ");

    //     if(i!=myArray.length-1)
    //     {
    //         // result_text=result_text.replace(arr2[1],arr2[arr2.length-2]);
    //         pincode_text=replaceAll(pincode_text,arr2[1],arr2[arr2.length-2] );

    //     }
    //     else    
    //     {
    //         // result_text=result_text.replace(arr2[1],arr2[arr2.length-1]);
    //         pincode_text=replaceAll(pincode_text,arr2[1],arr2[arr2.length-1]);

    //     }

    // }

    // pincode_text = pincode_text.replace(/(\r\n|\n|\r)/gm, "");
    // document.getElementById("output").value=pincode_text;

    
    // // console.log(pincode_text);
    
}

function copyToClipboard()
{
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied");
}


