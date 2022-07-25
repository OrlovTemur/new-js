let car1 = 'malibu'
let car2 = 'gentra'
let carPrice = 30000
let car2Price = 15000
let hatch = 15
let tonirovka = 5
let color = 2
let car = prompt('Какую машину вы хотите?')


if(car === car1) {
    let question1 = confirm('Вы хотите люк в своей машине?')
    if(question1) {
        carPrice = carPrice + carPrice*hatch/100
        let question2 = confirm('Вы хотите тонировку?')
        if(question2) {
            carPrice = carPrice + carPrice*tonirovka/100
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                carPrice = carPrice + carPrice*color/100
                alert(carPrice)
            } else {
                alert(carPrice)
            }
        } else {
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                carPrice = carPrice + carPrice*color/100
                alert(carPrice)
            } else {
                alert(carPrice)
            }
        }
    } else {
        let question2 = confirm('Вы хотите тонировку?')
        if(question2) {
            carPrice = carPrice + carPrice*tonirovka/100
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                carPrice = carPrice + carPrice*color/100
                alert(carPrice)
            } else {
                alert(carPrice)
            }
        } else {
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                carPrice = carPrice + carPrice*color/100
                alert(carPrice)
            }
        }
    }
} 
if(car === car2) {
    let question1 = confirm('Вы хотите люк в своей машине?')
    if(question1) {
        car2Price = car2Price + car2Price*hatch/100
        let question2 = confirm('Вы хотите тонировку?')
        if(question2) {
            car2Price = car2Price + car2Price*tonirovka/100
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                car2Price = car2Price + car2Price*color/100
                alert(car2Price)
            } else {
                alert(car2Price)
            }
        } else {
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                car2Price = car2Price + car2Price*color/100
                alert(car2Price)
            } else {
                alert(car2Price)
            }
        }
    } else {
        let question2 = confirm('Вы хотите тонировку?')
        if(question2) {
            car2Price = car2Price + car2Price*tonirovka/100
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                car2Price = car2Price + car2Price*color/100
                alert(car2Price)
            } else {
                alert(car2Price)
            }
        } else {
            let question3 = confirm('Хотите поменять цвет машины?')
            if(question3) {
                car2Price = car2Price + car2Price*color/100
                alert(car2Price)
            }
        }
    }
} 

