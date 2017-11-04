export class AgendamentoImpl implements Agendamento{
    constructor(
        public carro: Carro = null,
        public precoTotal: number = 0,
        public nome: string = '',
        public endereco: string = '',
        public email: string = '',
        public data: string = new Date().toISOString(),
        public confirmado: boolean = false
    ){

    }
}