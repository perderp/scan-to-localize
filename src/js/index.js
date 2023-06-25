document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('text-area');
    const output = document.getElementById('output');
    const btnCopy = document.getElementById('btnCopy');
    const btnClear = document.getElementById('btnClear');

    let textMessages = [
        'na copy na madii!', 'mana og copy mam, bounce nako',
        '👉 👈', 'salamat nalang sa lahat', '💅🏼💅🏼💅🏼💅🏼', '👁👄👁'
    ];  

    textArea.addEventListener('input', () => {
        updateText();
    })

    btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(output.innerText)
        .then(() => {
            theNotification(textMessages);
        })
        .catch((err) => {
            console.error("FAILED TO COPY HUHUHU")
        })
    })

    btnClear.addEventListener('click', () => {
        textArea.value = "";
    } )

    function updateText(){
        const result = textArea.value;
        const modifiedText = splitText(result);
        output.textContent = modifiedText;
    }

    function splitText(text){
        const words = text.trim().split(' ').filter(item => item !== '');
        const modifiedWords = words.map((item, index, array) => {
            if(item.length <= 3 && (array.length - 1) !== index){
                item += "&nbsp;";
            } else{
                item += " ";
            }
            return item;
        });
        return modifiedWords.join('');
    }

    function theNotification(txtMsg) {
        let notifContainer = document.querySelector('.notification__container');
        let notif = document.createElement('div')
        //GENERATE RANDOM NUMBER
        let rNumber = Math.floor(Math.random() * txtMsg.length)
        notif.classList.add("notification__msg")
        notif.textContent = textMessages[rNumber]
        notifContainer.appendChild(notif)

        setTimeout(() => {
            notifContainer.removeChild(notif)
        },5000)
      }
});