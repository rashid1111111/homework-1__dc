let obj = []
let newObj = JSON.parse(localStorage.getItem("myData"))
obj = obj.concat(newObj)
const Add = () => {
    let elInput = document.querySelector(".form-input")
    obj.push({name: elInput.value})
    localStorage.setItem("myData", JSON.stringify(obj))
    Initial()
    elInput.value = ''
}
Initial()

function Initial() {
    filtered = obj.filter(item => {
        return item !== null
    })



    let names = document.querySelector(".names")

    names.innerHTML = filtered.map((item, index) => {
        let btn = `<button onclick="Delete(${index})">del</button>`
        return `<div>${item.name} ${btn}</div>`
    }
    )

    // names.innerHTML = ism
    // console.log(newArr)

}
function Delete(num){
    filtered.splice(num, 1)
}