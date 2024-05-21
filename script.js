//set initial value
let count = 0;
//select value and btn
const value = document.querySelector('#count-value');
const btns = document.querySelectorAll('.btn');

btns.forEach((buttons) =>
{
    buttons.addEventListener('click', (e) =>
    {
        console.log(e.target);
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains('decrease'))
        {
            count--;
        }

        else if (styles.contains('increase'))
        {
            count++;
        }
        else
        {
            count = 0;
        }

        if (count >= 0)
        {
            value.style.color = 'green';
        }
        else
        {
            value.style.color = 'red';
        }
        value.textContent = count;
    });
});
