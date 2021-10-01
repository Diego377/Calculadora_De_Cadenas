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
  });
