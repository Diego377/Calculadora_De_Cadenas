import {Calculadora} from "./Calculadora";
describe("Calculadora ", () => {
    it("deberia retornar la suma de dos numeros", () => {
      expect(Calculadora("2,3")).toEqual(5);
    });
    it("deberia retornar la suma de los numeros en la cadena", () => {
        expect(Calculadora("1,2,4,8")).toEqual(15);
      });
  });

  