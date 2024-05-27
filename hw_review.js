class Developer {
    constructor(name) {
        this.name = name;
    }

    startWork() {
        return `${this.name} start work`
    }

    endWork() {
        return `${this.name} end work`
    }
}

class FrontEnd extends Developer {
    constructor(name, website) {
        super(name);
        this.website = website;
    }

    buildWebSite() {
        return `${this.name} start build website ${this.website}`
    }
}

class BackEnd extends Developer {
    constructor(name) {
        super(name)
    }

    buildServer() {
        return `${this.name} start build server`
    }
}

const john = new FrontEnd('john', 'Amazon')
const bill = new BackEnd('bill')

console.log(john.startWork())
console.log(john.buildWebSite())
console.log(john.endWork())

console.log(bill.startWork())
console.log(bill.buildServer())
console.log(bill.endWork())