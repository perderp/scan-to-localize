document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('text-area');
    const output = document.getElementById('output');

    textArea.addEventListener('input', () => {
        updateText();
    })

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

});