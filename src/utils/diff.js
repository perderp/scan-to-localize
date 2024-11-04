// utils/diff.js
import { diffWords } from 'diff';

export function getDiff(originalText, modifiedText) {
    const differences = diffWords(originalText, modifiedText);
    return differences.map(part => {
        const color = part.added ? 'green' : part.removed ? 'red' : 'black';
        return `<span style="color:${color}">${part.value}</span>`;
    }).join(''); // Return the joined result powered by chatGPT hahahah
}