const sections = [
    {
        id: 1, title: 'Insira alguns dados básicos', inputs: [
            {id: 1, label: 'Nome', placeholder: 'Digite seu nome completo'},
            {id: 2, label: 'Email', placeholder: 'Insira seu endereco de email'},
            {id: 3, label: 'Crie uma senha', placeholder: 'Insira sua senha'},
            {id: 4, label: 'Repita sua senha', placeholder: 'Repita sua senha'},
        ],
        checkbox: []
    },
    {
        id: 2, title: 'Agora, mais alguns dados sobre você', inputs: [
            {id: 1, label: 'CEP', placeholder: 'Digite seu CEP'},
            {id: 2, label: 'Endereco', placeholder: 'Insira seu endereco'},
            {id: 3, label: 'Número', placeholder: 'Insira seu número'},
            {id: 4, label: 'Complemento', placeholder: 'Insira seu complemento'},
            {id: 5, label: 'Telefone', placeholder: 'Digite seu telefone'},
        ],
        checkbox: []
    },
    {
        id: 3,
        title: 'Para finalizar, quais são seus planos?',
        text: 'Selecione um plano de saúde',
        inputs: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ]
    },
]

export { sections }