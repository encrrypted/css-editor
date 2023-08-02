let box = document.getElementById('box')
let width = document.getElementById('width')
let heigth = document.getElementById('heigth')
let numberwidth = document.getElementById('numberwidth')
let numberheigth = document.getElementById('numberheigth')
let codeOutput = document.getElementById('codeOutput')
let btnCopy = document.getElementById('btnCopy')
let colorR = document.getElementById('colorR')
let colorG = document.getElementById('colorG')
let colorB = document.getElementById('colorB')
let outR = document.getElementById('outR')
let outG = document.getElementById('outG')
let outB = document.getElementById('outB')
let borderSlct = document.getElementById('borderSlct')
let borderWidth = document.getElementById('borderWidth')
let widthOut = document.getElementById('widthOut')
let brdR = document.getElementById('brdR')
let brdG = document.getElementById('brdG')
let brdB = document.getElementById('brdB')
let outbrdR = document.getElementById('outbrdR')
let outbrdG = document.getElementById('outbrdG')
let outbrdB = document.getElementById('outbrdB')
let fontFml = document.getElementById('fontFml')
let fSize = document.getElementById('fSize')
let fontSizeOut = document.getElementById('fontSizeOut')
let rotateLeft = document.getElementById('rotateLeft')
let rotateLeftOut = document.getElementById('rotateLeftOut')
let rotateRight = document.getElementById('rotateRight')
let rotateRightOut = document.getElementById('rotateRightOut')


let pirntCode = () => {
    codeOutput.value = `width: ${width.value}px;
height: ${heigth.value}px;
background-color: rgb(${colorR.value}, ${colorG.value}, ${colorB.value});
border: ${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value});
font-size: ${fSize.value}px;
font-family: ${fontFml.value};
transform: rotate(${rotateLeft.value}deg);`
    return codeOutput.value
}






width.addEventListener('input', () => {
    box.style.width = `${width.value}px`
    numberwidth.value = width.value
    pirntCode()
})
heigth.addEventListener('input', () => {
    box.style.height = `${heigth.value}px`
    numberheigth.value = heigth.value
    pirntCode()
})
numberwidth.addEventListener('input', () => {
    box.style.width = `${numberwidth.value}px`
    width.value = numberwidth.value
    pirntCode()
})
numberheigth.addEventListener('input', () => {
    box.style.heigth = `${numberheigth.value}px`
    heigth.value = numberheigth.value
    pirntCode()
})





colorR.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`
    outR.value = colorR.value
    pirntCode()
})
colorG.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`
    outG.value = colorG.value
    pirntCode()
})
colorB.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`
    outB.value = colorB.value
    pirntCode()
})

outR.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${outR.value}, ${outG.value}, ${outB.value})`
    colorR.value = outR.value
    pirntCode()
})
outG.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${outR.value}, ${outG.value}, ${outB.value})`
    colorG.value = outG.value
    pirntCode()
})
outB.addEventListener('input', () => {
    box.style.backgroundColor = `rgb(${outR.value}, ${outG.value}, ${outB.value})`
    colorB.value = outB.value
    pirntCode()
})




borderWidth.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    widthOut.value = borderWidth.value
    pirntCode()
})
borderSlct.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    console.log(borderSlct.value);
    pirntCode()
})
brdR.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    outbrdR.value = brdR.value
    pirntCode()
})
brdG.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    outbrdG.value = brdG.value
    pirntCode()
})
brdB.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    outbrdB.value = brdB.value
    pirntCode()
})
widthOut.addEventListener('input', () => {
    box.style.border = `${widthOut.value}px ${borderSlct.value} rgb(${brdR.value}, ${brdG.value}, ${brdB.value})`
    borderWidth.value = widthOut.value
    pirntCode()
})
outbrdR.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${outbrdR.value}, ${outbrdG.value}, ${outbrdB.value})`
    brdR.value = outbrdR.value
    pirntCode()
})
outbrdG.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${outbrdR.value}, ${outbrdG.value}, ${outbrdB.value})`
    brdG.value = outbrdG.value
    pirntCode()
})
outbrdB.addEventListener('input', () => {
    box.style.border = `${borderWidth.value}px ${borderSlct.value} rgb(${outbrdR.value}, ${outbrdG.value}, ${outbrdB.value})`
    brdB.value = outbrdB.value
    pirntCode()
})







fSize.addEventListener('input', () => {
    box.style.fontSize = `${fSize.value}px`
    fontSizeOut.value = fSize.value
    pirntCode()
    
})
fontFml.addEventListener('input', () => {
    box.style.fontFamily = `${fontFml.value}`
    pirntCode()
    
})
fontSizeOut.addEventListener('input', () => {
    box.style.fontSize = `${fontSizeOut.value}px`
    fSize.value = fontSizeOut.value
    pirntCode()
    
})


rotateLeft.addEventListener('input', () => {
    box.style.transform = `rotate(${rotateLeft.value}deg)`
    rotateLeftOut.value = rotateLeft.value
    pirntCode()
    
})
// rotateRight.addEventListener('input', () => {
//     box.style.transform = `rotate(-${rotateRight.value}deg)`
//     rotateRightOut.value = rotateRight.value
//     pirntCode()
    
// })
rotateLeftOut.addEventListener('input', () => {
    box.style.transform = `rotate(${rotateLeftOut.value}deg)`
    rotateLeft.value = rotateLeftOut.value
    pirntCode()
})
// rotateRightOut.addEventListener('input', () => {
//     box.style.transform = `rotate(-${rotateRightOut.value}deg)`
//     rotateRight.value = rotateRightOut.value

// })





btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(pirntCode())
})

