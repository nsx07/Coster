export enum OPERATIONS {
  "MINUS" = "-",
  "PLUS" = "+",
  "TIMES" = "*",
  "DIVISION" = "/"
}

export interface AdditionalValues {
  id : number
  name : string
  cost : number,
  typeOperation : OPERATIONS
}

export interface Cloth {
  units : number
  yeald : number
  costRoll : number
  yealdPeerKg : number
  basePrice? : number
  pricePeerMeter? : number
  additionalValues? : Array<number | undefined>
}

export class ClothBase {

  cloth : Cloth;

  constructor(cloth : Cloth) {
      this.cloth = cloth;
      this.initValues();
      return this
  }


  private initValues()  {
      this.cloth.pricePeerMeter = this.cloth.costRoll / this.cloth.yealdPeerKg;
      this.cloth.basePrice = this.cloth.pricePeerMeter * this.cloth.yeald / this.cloth.units;
      return this
  }

  calculatePrice(addValues : Array<AdditionalValues>) {
      this.cloth.additionalValues = [];
      addValues.forEach((addValues, index) => {
          let value = this.cloth.basePrice ? this.cloth.basePrice : 0
          switch (addValues.typeOperation) {
              case OPERATIONS.PLUS :
                  value += addValues.cost;
                  break
              case OPERATIONS.MINUS :
                  value -= addValues.cost;
                  break
              case OPERATIONS.TIMES :
                  value *= addValues.cost;
                  break
              case OPERATIONS.DIVISION :
                  value /= addValues.cost;
                  break
          }
          this.cloth.basePrice = value
          this.cloth.additionalValues?.push(addValues.cost)
      })
      return this
  }

}
