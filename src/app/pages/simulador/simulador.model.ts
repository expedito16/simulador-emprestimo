export interface Simulador {
  id?: string;
  data?: Date;
  nome?: string;
  valor?: number;
  parcelas?: Array<object> | string | number;
}
