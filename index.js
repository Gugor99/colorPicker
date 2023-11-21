const theme = document.getElementById('themes')
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
})