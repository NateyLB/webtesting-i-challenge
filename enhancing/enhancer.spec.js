const enhancer = require('./enhancer.js');
// test away!

const axe = {name: "Axe", durability: 50, enhancement: 20}
const sword = { name: "Sword", durability: 100, enhancement: 10}
const nunchucks = {name:"Nunchucks", durability: 30, enhancement:17}
const staff = {name:"Staff", durability: 50, enhancement: 15}
const dagger = {name:"Dagger", durability: 9, enhancement: 15}
const knife = {name:"Knife", durability: 4, enhancement:14}
const crossbow = {name:"Crossbow", durability: 9, enhancement: 20}
const claymore = {name:"Claymore", durability: 75, enhancement:0}

describe("repair", ()=>{
    it("should have a durability of 100", ()=>{
        expect(enhancer.repair(axe)).toMatchObject({name:"Axe", durability:100, enhancement:20})
    })
})

describe("succeed", ()=>{
    it("should not increase the enhancement", ()=>{
        expect(enhancer.succeed(axe)).toMatchObject({name:"Axe", durability:50, enhancement:20})
    })
    it("should increase the enhancement by +1", ()=>{
        expect(enhancer.succeed(sword)).toMatchObject({name:"Sword", durability: 100, enhancement: 11})
    })
})

describe("fail", ()=>{
    it("should decrease durabilty by -5", ()=>{
        expect(enhancer.fail(sword)).toMatchObject({name:"Sword", durability: 95, enhancement: 10})
    })

    it("should decrease durability to 0", ()=>{
        expect(enhancer.fail(knife)).toMatchObject({name:"Knife", durability:0, enhancement:14})
    })

    it("should decrease durabilty by -10", ()=>{
        expect(enhancer.fail(staff)).toMatchObject({name:"Staff", durability: 40, enhancement: 15})
    })

    it("should decrease durability to 0", ()=>{
        expect(enhancer.fail(dagger)).toMatchObject({name:"Dagger", durability:0, enhancement: 15})
    })

    it("should decrease durability by -10 and decrease enhancement by -1", ()=>{
        expect(enhancer.fail(nunchucks)).toMatchObject({name:"Nunchucks", durability: 20, enhancement: 16})
    })

    it("should decrease durabilty to 0 and decrease enhancement by -1", ()=>{
        expect(enhancer.fail(crossbow)).toMatchObject({name:"Crossbow", durability:0, enhancement: 19})
    })
})

describe("get", ()=>{
    it("should not do anything to name", ()=>{
        expect(enhancer.get(claymore)).toMatchObject({name:"Claymore", durability: 75, enhancement:0})
    })

    it("should append [+20] to name", ()=>{
        expect(enhancer.get(crossbow)).toMatchObject({name: "[+20] Crossbow", durability:9, enhancement: 20})
    })
})