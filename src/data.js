import alfred from './assets/images/thealfred.jpg';
import rebecca from './assets/images/therebecca.jpg';
import sophia from './assets/images/thesophia.jpg';
import winston from './assets/images/thewinston.jpg';

export const USERS = [
    {
        id: 0,
        name: "Rosa"
    },
    {
        id: 1,
        name: "Eleanor"
    },
    {
        id: 2,
        name: "Jake"
    },
]

export const PRODUCTS = [
    {
        id: 0,
        name: "The Alfred",
        description: "Lorem ipsum dolor sit amet",
        image: alfred,
        price: 240
    },
    {
        id: 1,
        name: "The Sophia",
        description: "It's great",
        image: sophia,
        price: 500
    },
    {
        id: 2,
        name: "The Winston",
        description: "Recline as much as you want",
        image: winston,
        price: 300
    },
    {
        id: 3,
        name: "The Rebecca",
        description: "It's soft and such",
        image: rebecca,
        price: 170
    }
]

export const ORDERS = [
    {
        id: 0,
        productId: 1,
        userId: 2
    },
    {
        id: 1,
        productId: 0,
        userId: 1
    },
    {
        id: 2,
        productId: 2,
        userId: 0
    }
]