import {Calculadora} from "./Calculadora";
describe("Calculadora ", () => {
    it("deberia retornar la suma de dos numeros", () => {
      expect(Calculadora("2,3")).toEqual(5);
    });
  });

  