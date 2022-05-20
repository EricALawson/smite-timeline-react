import express from 'express';
import { FindCursor } from 'mongodb';
import { getDB } from '../database/connection';
import { God, Item } from '@smite-timeline/smite-game-objects'

const recordRoutes = express.Router();
recordRoutes.use(express.json());

recordRoutes.route("/gods/allnames").get( async () => {
    const db = await getDB();

    const arr = await db.collection<God>("gods")
        .find(
            {$projection: {
                _name: 1
            }}
        )
        .toArray()

    const names: string[] = arr.map(it => it.name)
    return names;
})

recordRoutes.route("/gods/:godname").get( async (req)=> {
    const db = await getDB();
    const godname = req.params.godname

    const god = await db.collection<God>("gods")
        .findOne({ name: godname });

    if (god === null) {
        throw new Error("No god found with that name");
    } else {
        return god;
    }
})

recordRoutes.route("/items/").get(async () => {
    const db = await getDB();

    return db.collection<Item>("items")
    .find({})
    .toArray();
});

export { recordRoutes };