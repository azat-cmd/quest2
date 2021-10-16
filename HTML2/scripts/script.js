function handleForm(){
    console.log(document.formname.inputname.value)

    for(i=0;i < document.formname.com_tion.length;i++){
    if (document.formname.com_tion[i].checked)
        console.log(document.formname.com_tion[i].value)
    }

    console.log(document.formname.theme.value)
    console.log(document.formname.chb1.value)
    console.log(document.formname.chb2.value)
    console.log(document.formname.chb3.value)
    console.log(document.formname.email.value)
    console.log(document.formname.tel.value)

}