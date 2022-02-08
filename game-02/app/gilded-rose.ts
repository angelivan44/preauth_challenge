export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export abstract class AbstracItemUpdate {
    abstract updateQualityAndSellin(item: Item): Item;
}

export class Legendary extends AbstracItemUpdate {
    updateQualityAndSellin(item:Item) : Item {
        item.sellIn = 0;
        item.quality = 80;
        return item
    }
}

export class Brie extends AbstracItemUpdate {
    updateQualityAndSellin(item:Item): Item{
        item.quality < 50 ? item.quality++ : item.quality = 50;
        item.sellIn = item.sellIn - 1;
        return item
    }
}

export class Backstage extends AbstracItemUpdate {
    updateQualityAndSellin(item:Item): Item{
        switch (true) {
            case (item.sellIn > 10):
                item.quality++;
                break;
            case (item.sellIn < 11 && item.sellIn > 5):
                item.quality = item.quality + 2;
                break;
            case (item.sellIn < 6):
                item.quality = item.quality + 3;
                break;
            case (item.sellIn < 0):
                item.quality = 0;
                break;
        }
        item.sellIn = item.sellIn - 1;
        return item
    }
}

export class Conjured extends AbstracItemUpdate {
    updateQualityAndSellin(item:Item): Item {
        item.quality > 0 ? item.quality-= 2 : item.quality = 0;
        item.sellIn = item.sellIn - 1;
        return item
    }
}

export class Standar extends AbstracItemUpdate {
    updateQualityAndSellin(item:Item): Item {
        item.quality > 0 ? item.quality=item.quality-1 : item.quality = 0;
        item.sellIn = item.sellIn - 1;
        return item
    }
}

export class GildedRose  {
    items: Array<Item>;
    setFunctionsUpdate:{[name:string]:AbstracItemUpdate}

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.setFunctionsUpdate = {
            "Aged": new Brie(),
            "Backstage": new Backstage(),
            "Sulfuras" : new Legendary(),
            "Conjured" : new Conjured(),
            "Standar" : new Standar(),
        }
    }

    updateQuality() {

        return this.items.map((item)=>{
            switch(item.name){
                case "Aged Brie":
                    return this.setFunctionsUpdate["Aged"].updateQualityAndSellin(item)
                case "Backstage passes to a TAFKAL80ETC concert":
                    return this.setFunctionsUpdate["Backstage"].updateQualityAndSellin(item)
                case "Sulfuras, Hand of Ragnaros":
                    return this.setFunctionsUpdate["Sulfuras"].updateQualityAndSellin(item)
                case "Conjured":
                    return this.setFunctionsUpdate["Conjured"].updateQualityAndSellin(item)
                case "Standar":
                    return this.setFunctionsUpdate["Standar"].updateQualityAndSellin(item)
            }
        })
    }
}


let newData = [
    {
        name:"Aged Brie",
        quality:20,
        sellIn:10,
    },
    {
        name:"Aged Brie",
        quality:30,
        sellIn:15,
    },

    {
        name:"Backstage passes to a TAFKAL80ETC concert",
        quality:30,
        sellIn:10,
    },
    {
        name:"Sulfuras, Hand of Ragnaros",
        quality:80,
        sellIn:0,
    },
    {
        name:"Conjured",
        quality:20,
        sellIn:30,
    },
    {
        name:"Backstage passes to a TAFKAL80ETC concert",
        quality:20,
        sellIn:5,
    }
]

const newDataItems = newData.map((ele) => new Item(ele.name, ele.sellIn, ele.quality))
const roses = new GildedRose(newDataItems)
console.log(roses.updateQuality())