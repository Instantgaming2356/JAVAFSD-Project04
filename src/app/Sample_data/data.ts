import { Food } from "../Models/food";
import { Tag } from "../Models/tag";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Milk',
        price: 25,
        imageUrl: 'assets/foodItem1.jpg',
        tags: ['veg'],
        company: ''
    },
    {
        id: '2',
        name: 'Bread',
        price: 20,
        imageUrl: 'assets/foodItem2.jpg',
        tags: ['veg'],
        company: ''

    },
    {
        id: '3',
        name: 'Eggs',
        price: 10,
        imageUrl: 'assets/foodItem3.jpg',
        tags: ['non-veg'],
        company: ''
    },
    {
        id: '4',
        name: 'Potatoes',
        price: 20,
        imageUrl: 'assets/foodItem4.jpg',
        tags: ['veg'],
        company: ''
    },
    {
        id: '5',
        name: 'Chicken Meat',
        price: 11,
        imageUrl: 'assets/foodItem5.jpg',
        tags: ['non-veg'],
        company: ''
    },
    {
        id: '6',
        name: 'Fish Meat',
        price: 9,
        imageUrl: 'assets/foodItem6.jpg',
        tags: ['non-veg'],
        company: ''
    }
]

export const sample_tags: Tag[] = [

    {
        name: 'All',
        count: 6
    },
    {
        name: 'veg',
        count: 3
    },
    {
        name: 'non-veg',
        count: 3
    }
]