const option = document.getElementById('themes')

const button = document.getElementById('select-btn').addEventListener('click', ()=>{
    const color = document.getElementById('color-picker').value.substring(1)
    const mode = option[option.selectedIndex].value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
        .then(result => result.json())
        .then(data => {
            for (let i = 0; i <data.colors.length; i++) {
                let hexValue = data.colors[i].hex.value;
                document.getElementById(`hex-${i + 1}`).textContent = hexValue;
                document.getElementById(`color-${i + 1}`).style.backgroundColor = hexValue;
            }
        })
        .catch(error => console.error('Something went wrong fetching data:', error));
})