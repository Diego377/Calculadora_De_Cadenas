import {Calculadora} from "./Calculadora";
describe("Calculadora ", () => {
    it("deberia retornar la suma de dos numeros separados por coma", () => {
      expect(Calculadora("2,3")).toEqual(5);
    });
    it("deberia retornar la suma de los numeros en la cadena separados por coma", () => {
        expect(Calculadora("1,2,4,8")).toEqual(15);
      });
      it("deberia retornar la suma de dos numeros separados por guion", () => {
        expect(Calculadora("2-3")).toEqual(5);
      });
      // it("deberia retornar la suma de tres numeros separados por guion y coma", () => {
      //   expect(Calculadora("1,2-3")).toEqual(6);
      // });
      it("deberia retornar el numero menor a 1000", () => {
        expect(Calculadora("2,1001")).toEqual(2);
      });
  });
