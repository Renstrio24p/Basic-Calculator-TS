
export const FirstButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input type='button' name='display' value='AC'/>
        <input type='button' name='display' value='DEL'/>
        <input type='button' name='display' value='.'/>
        <input type='button' name='display' value='/'/>
        `
    )

}


export const SecondButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='7' type='button' name='display' value='7'/>
        <input id='8' type='button' name='display' value='8'/>
        <input id='9' type='button' name='display' value='9'/>
        <input id='times' type='button' name='display' value='*'/>
        `
    )

}

export const ThirdButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='4' type='button' name='display' value='4'/>
        <input id='5' type='button' name='display' value='5'/>
        <input id='6' type='button' name='display' value='6'/>
        <input id='minus' type='button' name='display' value='-'/>
        `
    )

}

export const FourthButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='1' type='button' name='display' value='1'/>
        <input id='2' type='button' name='display' value='2'/>
        <input id='3' type='button' name='display' value='3'/>
        <input id='plus' type='button' name='display' value='+'/>
        `
    )

}

export const FifthButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='00' type='button' name='display' value='00'/>
        <input id='0' type='button' name='display' value='0'/>
        <input id='equals' type='button' name='display' value='='/>
        `
    )

}
