export interface AboutBlock {
    id: number;
    title: string;
    subtitle?: string;
    content: string;
    image: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
    type: 'text' | 'list';
    listItems?: string[];
}

export const aboutBlocks: AboutBlock[] = [
    {
        id: 1,
        title: 'A Fundação do Centro Veterinário S.O.S',
        subtitle: 'Uma História Que Nasceu de um Sonho',
        content: 'O Dr. Lázaro Antunes Cintra Neto, conhecido como Dr.Neto, sócio-fundador e médico-veterinário, iniciou esta jornada em 2010 movido pelo sonho de oferecer qualidade, inovação e cuidado humanizado no atendimento de cães e gatos em Santa Helena de Goiás. Com dedicação, amor pela medicina veterinária e compromisso com o bem-estar animal, o projeto cresceu — e assim nasceu a SOS Animal.',
        image: '/sosvet-landing/images/dr-neto-sobre.jpeg',
        imageAlt: 'Veterinário fundador com cachorro',
        imagePosition: 'left',
        type: 'text'
    },
    {
        id: 2,
        title: 'O Crescimento e a Expansão',
        subtitle: 'De SOS Animal ao Centro Veterinário S.O.S',
        content: 'Ao longo dos anos, a busca por excelência fez a empresa evoluir. A SOS Animal tornou-se o Centro Veterinário S.O.S no ano de 2024, com nova sede e estrutura ampliada, atendendo também as regiões de Maurilândia e Turvelândia. São mais de 30.000 atendimentos realizados, sempre guiados pelo cuidado, pela ética e pelo respeito à vida.',
        image: '/sosvet-landing/images/centrovet-sh.jpg',
        imageAlt: 'Estrutura moderna do centro veterinário',
        imagePosition: 'right',
        type: 'text'
    },
    {
        id: 3,
        title: 'Nossa Equipe e Especialidades',
        subtitle: 'Profissionais Dedicados à Saúde dos Pets',
        content: 'Além do Dr. Neto, o time conta com também com diferentes profissionais e especialidades, formando uma equipe clínica completa e preparada para oferecer o melhor atendimento para o seu pet.',
        image: '/sosvet-landing/images/equipe-sos.jpeg  ',
        imageAlt: 'Equipe de veterinários',
        imagePosition: 'left',
        type: 'text'
    },
    {
        id: 4,
        title: 'Nosso Propósito',
        subtitle: '"Não consultamos animais. Avaliamos vidas." — Dr. Neto',
        content: 'Este lema representa tudo o que acreditamos. Nossa paixão por pets vai além do cuidado: oferecemos prevenção, acolhimento e um atendimento verdadeiramente humanizado. Cada paciente é tratado com sensibilidade, respeito e atenção individualizada.',
        image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800&h=600&fit=crop',
        imageAlt: 'Veterinária cuidando de cachorro com carinho',
        imagePosition: 'right',
        type: 'text'
    },
    {
        id: 5,
        title: 'Por que somos um Centro Veterinário?',
        subtitle: 'Um Espaço Multidisciplinar para o Seu Pet',
        content: 'Você pode estar se perguntando: por que Centro Veterinário? Porque somos um ambiente completo para a saúde e o bem-estar do seu pet, oferecendo:',
        image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop',
        imageAlt: 'Instalações completas do centro veterinário',
        imagePosition: 'left',
        type: 'list',
        listItems: [
            'Clínica veterinária com diversas especialidades',
            'Centro cirúrgico',
            'Banho e Tosa',
            'Loja pet com os melhores produtos, acessórios e rações'
        ]
    },
    {
        id: 6,
        title: 'Um Convite Especial',
        subtitle: 'Venha Nos Conhecer',
        content: 'Estamos prontos para receber você e seu pet com carinho e profissionalismo. Faça-nos uma visita e descubra pessoalmente o cuidado que dedicamos a cada vida que passa por aqui. E depois, conte-nos como foi sua experiência — sua opinião é parte essencial da nossa história.',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
        imageAlt: 'Recepção acolhedora do centro veterinário',
        imagePosition: 'right',
        type: 'text'
    }
];
