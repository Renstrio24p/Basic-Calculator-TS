export const Calculator_Function = () => {
    const ButtonClick = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < ButtonClick.length; i++) {
        ButtonClick[i].addEventListener('click', CalculateClick);
    }
    const DisplayOutput = document.getElementById('display') as HTMLInputElement;
    function CalculateClick(event: Event) {
        const clickedButton = event.target as HTMLInputElement;

        switch (clickedButton.value) {
            case '00':
                DisplayOutput.value === '0' ? DisplayOutput.value = '0' : DisplayOutput.value += '00';
                break;
            case '0':
                DisplayOutput.value === '0' ? DisplayOutput.value = '0' : DisplayOutput.value += '0';
                break;
            case '9':
            case '8':
            case '7':
            case '6':
            case '5':
            case '4':
            case '3':
            case '2':
            case '1':
                DisplayOutput.value === '0' ? DisplayOutput.value = clickedButton.value : DisplayOutput.value += clickedButton.value;
                break;
            case 'DEL':
                if (DisplayOutput.value.length === 1) {
                    DisplayOutput.value = '0';
                } else {
                    DisplayOutput.value = DisplayOutput.value.slice(0, -1);
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                DisplayOutput.value += clickedButton.value;
                break;
            case 'AC':
                DisplayOutput.value = '0';
                break;
            case '=':
                try {
                    const result = eval(DisplayOutput.value);
                    DisplayOutput.value = isNaN(result) || !isFinite(result) ? 'Error' : result.toString();
                } catch (error) {
                    DisplayOutput.value = 'Syntax Error';
                }
                break;
            default:
                DisplayOutput.value = '0';
                break;
        }
    }
}    