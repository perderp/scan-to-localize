/*
    step 1 : 
        check the body tag and scan for all {p, span, li, h1-h6, tags}
    step 2 : 
        check the contents of its tags and do split each words
    step 3  :
        count each letters for each of the tags 
        if there's 3 or less letters add nbsp;
    step 4 : 
        remove the space after the "step 3" and combine the after letter of it
    step 5 : 
        give output for it to copy
*/

//! First Implementation ========================================== 

/*
function scanTags(){
    const body = document.getElementsByTagName('body');

    if(!body)
        return console.error("ERORRR");

    const scanTags = ['p', 'li', 'span', 'h1'];

    scanTags.forEach(tagName => {
        const tags = document.querySelectorAll(tagName);
        const theArr =[];
        
        for(let i = 0; i  < tags.length; i++ ){
            const tag = tags[i];
            const content = tag.textContent;
            const eachContent = content.trim().split(/\s+/);
            const newArr = [];
            
            for(let j = 0; j < eachContent.length; j++){
                if(eachContent[j].length <= 3 ){
                    // newArr = eachContent[j] += "&nbsp;";
                    newArr.push(eachContent[j] += "&nbsp;");
                }else{
                    newArr.push(eachContent[j]);
                }
                eachContent.join(" ").replace(/(&nbsp;)\s/g, "$1");
            }
        }
        console.log(newArr)
    })
}

scanTags();

*/

//! SECOND IMPLEMENTATION ==========================================

/*
check all the tags and iterate the words
const checkAllTags = (scan) =>{
    const sample = document.querySelectorAll(scan);
    sample.forEach(samp => {
        let newSamp = samp.textContent;
        // console.log(newSamp)
        console.log(threeLetters(newSamp))
    })
}

const threeLetters = (char) => {
    let newChar = "";
    if(char.length <= 3) {
        newChar = char + "&nbsp;";
    }
    return newChar;
}

*/


//! THIRD IMPLEMENTATION ==========================================
// by far the successful output
/*
const scanTags = ['p', 'li', 'span', 'h1'];

scanTags.forEach(tag => {
    let newTag = document.querySelectorAll(tag);
    for(let i = 0; i <= newTag.length; i++){
        let word = newTag[i]; 
        if(newTag[i] != null){
            let newWord = word.textContent.trim().split(" ").filter(item => item !== '');
            let newArr = [];
            newWord.forEach( (item, index, array) => {
                // console.log(array[array.length - 1])
                if(item.length <= 3 && array[array.length - 1] != item){
                    item += "&nbsp;";
                }
                else{
                    item +=" ";
                }
                newArr.push(item);
                // console.log(`ITEM : ${item}    INDEX : ${index}    ARRAY : ${array}`)
                
            })

            var output = word.textContent.replace(word.textContent, newArr.join(''));
            console.log(output)
        }

    }
})
*/


// NEWEST IMPLEMENTATION =======================



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
            if(item.length <= 3 && array[array.length - 1] !== item){
                item += "&nbsp;";
            } else{
                item += " ";
            }
            return item;
        });
        return modifiedWords.join('');
    }

});