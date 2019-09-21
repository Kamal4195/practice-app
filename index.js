function calculate(){

    const total=document.getElementById("total").value;
    const rate=document.getElementById("rate").value;
    const tax=parseFloat(total)*5.5/100;
    const tip=parseFloat(total)*parseFloat(rate)/100;
    const grandtotal= parseFloat(total)+tax+tip;
    document.getElementById("tip").innerHTML="Tip: $"+tip;
    document.getElementById("tax").innerHTML="Tax: $"+tax;
    document.getElementById("grandtotal").innerHTML="Grand Total: $"+grandtotal;
}