/*const theme = document.getElementById('themes')
const colorPicker = document.getElementById("color-picker")

document.getElementById('select-btn').addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${theme.value}&count=5`)
    .then(res => res.json())
    .then(data => {
            let html = ""
            for (obj of data.colors){
                const colore = obj.hex.value
                html += `  <div class="vertical-disp">
                                <div class="section" id= "${colore}" style="background-color:${colore}">
                                    </div>
                                <p>${colore}</p>
                            </div>`
                
            
                        } 
                        document.getElementById("colors-container").innerHTML = html
    }).catch(err => document.getElementById("colors-container").innerHTML = <h1>${err}</h1>)
})*/

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