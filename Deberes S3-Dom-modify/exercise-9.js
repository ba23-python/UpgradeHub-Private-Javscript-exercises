const allDiv$ = document.querySelectorAll('div.fn-insert-here');

for (const div$ of allDiv$) {
    const p$ = document.createElement('p');
    p$.textContent = 'Voy dentro!';
    div$.appendChild(p$);
}