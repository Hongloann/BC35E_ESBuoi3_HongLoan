export class List {
    arrAct = [];
    arrAct1 = [];
    addAct(newArr) {
        this.arrAct.push(newArr);
    };

    Save() {
        let dataString = JSON.stringify(this.arrAct)

        localStorage.setItem('data', dataString)
        let dataString1 = JSON.stringify(this.arrAct1)
        localStorage.setItem('data1', dataString1)

    }

    Get() {
        if (localStorage.getItem('data')) {
            this.arrAct = JSON.parse(localStorage.getItem('data'))
        }
        if (localStorage.getItem('data1')) {
            this.arrAct1 = JSON.parse(localStorage.getItem('data1'))
        }
    }
    Delete(index) {
        let indexDel = this.arrAct.findIndex((act, i) => i == index)
        if (indexDel !== -1) {
            this.arrAct.splice(indexDel, 1)
        }

    }
    Delete1(index) {
        let indexDel = this.arrAct1.findIndex((act, i) => i == index)
        if (indexDel !== -1) {
            this.arrAct1.splice(indexDel, 1)
        }
    }
    Complete(index) {

        let indexCheck = this.arrAct.filter((act, i) => i == index)
        if (indexCheck.length !== 0) {
            this.arrAct1.push(indexCheck)

            this.arrAct.splice(indexCheck, 1)
        }

    }
    Sort1() {
        this.arrAct.sort((item2, item1) => {
            let act2 = item2.toLowerCase().trim();
            let act1 = item1.toLowerCase().trim();
            if (act2 < act1) {
                return -1
            }
            return 1
        })
    }
    Sort() {
        this.arrAct.sort((item2, item1) => {
            let act2 = item2.toLowerCase().trim();
            let act1 = item1.toLowerCase().trim();
            if (act2 < act1) {
                return 1
            }
            return -1
        })
    }
    renderAct1() {
        let html = this.arrAct1.reduce((acc, curr, index) => {
            return acc += `
                <li> <span> ${curr}</span>
            <div class="buttons">
                <button onclick="delAct1('${index}')"><i class="far fa-trash-alt remove"></i></button>
                <button > <i class="far fa-check-circle complete"></i></button>
            </div>
            </li> `

        }, '')

        document.querySelector('#completed').innerHTML = html
    }
    renderAct() {
        let html = this.arrAct.reduce((acc, curr, index) => {
            return acc += `
                <li> ${curr}
            <div class="buttons">
                <button onclick="delAct('${index}')"><i class="far fa-trash-alt remove"></i></button>
                <button onclick="checkAct('${index}')"> <i class="far fa-check-circle complete"></i></button>
            </div>
            </li> `

        }, '')

        document.querySelector('#todo').innerHTML = html
    }

}