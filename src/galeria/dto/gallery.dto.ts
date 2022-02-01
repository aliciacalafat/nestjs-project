export interface IData{
    id: number;
    name: string;
    description: string;
    price: number;
}

export const data: IData[] = [
    {
        id:1,
        name:'Modern Chair',
        description:'Silla de comedor de Amazon, pero mucho más cara. Materiales recicladísimos. No se incluyen los zapatos sucios.',
        price: 180,
    },
    {
        id:2,
        name:'Minimalist Plant Pot',
        description: 'Macetero minimalista. A pesar de que se vea la mitad del macetero, lo que se vende es el macetero. Planta no incluida.',
        price: 180,
    },
    {
        id:3,
        name:'Modern Chair',
        description: 'La misma silla de Amazon de antes.',
        price: 180,
    },
    {
        id:4,
        name:'Night Stand',
        description: 'No se ve muy bien, pero lo que vendemos es la mesita de noche. Macetero feng shui no incluido.',
        price: 180,
    },
    {
        id:5,
        name:'Plant Pot',
        description: 'Macetero feng shui. Sé consciente del espacio que ocupas sin romper con la armonía del hogar. Planta no incluida.',
        price: 18,
    },
    {
        id:6,
        name:'Small Table',
        description: 'Mesa auxiliar para el salón. Cogiendo 4 maderos del Leroy Merlin te la puedes hacer igual por 5 pavos.',
        price: 320,
    },
    {
        id:7,
        name:'Metallic Chair',
        description: 'Silla totalmente hecha de metal para que en verano puedas freír un huevo en ella.',
        price: 318,
    },
    {
        id: 8,
        name:'Modern Rocking Chair',
        description: 'Silla para acariciar el gato.',
        price: 318,
    },
    {
        id:9,
        name:'Home Deco',
        description: 'Objeto decorativo para coger polvo. A pesar de su aspecto parecido al de un altavoz y a juzgar por el precio, no lo es.',
        price: 318,
    },
];