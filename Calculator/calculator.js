let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));

const equals = document.getElementById('equals');

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CLEAR':
               screen.innerText = '';
               break;
            case '❌':
                if(screen.innerText){
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        screen.innerText = eval(screen.innerText);
                    } catch{
                        screen.innerText = 'This operation is not valid👾'
                    }
                   
                    break;
            default:
                screen.innerText += e.target.innerText;
        }
        
    });
});