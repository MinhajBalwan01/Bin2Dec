const binaryInput = document.getElementById('binaryInput');
const output = document.getElementById('output');

function isValidBinary(binaryNum) {
    return /^[01]+$/.test(binaryNum);
}

binaryInput.addEventListener('keydown', e => {
    let binaryNum = e.target.value;
    if (e.key === 'Enter') {
        if (isValidBinary(binaryNum)) {
            let ans = 0;
            num = binaryNum.split('').reverse().join('');
            for (let i = 0; i < num.length; i++) {
                ans += num[i] * 2**i;
            }
            output.innerHTML = ans;
            output.style.color = '#fff';
        } else {
            output.innerHTML = 'NOT A BINARY NUMBER!';
            output.style.color = '#ff002b';
        }
    }
});