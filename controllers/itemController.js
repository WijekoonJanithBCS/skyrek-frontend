
import Item from '../models/item.js';
export function getAllItems(req, res)  {
    Item.find()
    .then(items => {
        res.json(items); 
    }
    );  
}

export function createItem(req, res)  { 
    const newItem = new Item({  
        name: req.body.name,
        price: req.body.price,
        description: req.body.description   
    });
    newItem.save()
    .then(item => {
        res.json({message: 'Item created successfully'});
    });
}