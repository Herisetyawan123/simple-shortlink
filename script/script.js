var link = document.getElementById('link');
var btn = document.getElementsByClassName('btn');
var frame = document.getElementsByClassName('frame');
var qrcode = new QRCode(document.getElementById('qrbox'), {
                width : 180,
                height : 180
            })

frame[0].style.display = 'none';

const getText = () => {
    if(!link.value){
        alert("Tolong masukan text!!");
        link.focus();
        return false;
    }else{
        return link.value
    }
}

function main(){
    let text = getText();
    if(text){
        frame[0].style.display = 'block';
        qrcode.makeCode(text);
        text = ""
        console.log(text)
    }
}