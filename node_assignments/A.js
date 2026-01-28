const pi = 3.14;

function add(a,b) {
    console.log(a+b);
}

class Emp {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    displayInfo(){
        console.log(this.id+" "+this.name);
    }
}

module.exports = {pi,add,Emp};
