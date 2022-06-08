import express from 'express';
import { getDB } from '../database/connection';
import { God, Item } from '@smite-timeline/smite-game-objects'

const recordRoutes = express.Router();
recordRoutes.use(express.json());

recordRoutes.route("/godnames").get( async (req, res) => {
    const db = await getDB();

    const arr = await db.collection<God>("gods")
        .find(
            {},
            {
                projection: {
                    name: 1
            }}
            )
        .toArray()

    const names: string[] = arr.map(it => it.name)
    res.send(names)
})

recordRoutes.route("/gods/:godname").get( async (req, res)=> {
    const db = await getDB();
    const godname = req.params.godname

    const god = await db.collection<God>("gods")
        .findOne({ name: godname });

    if (god === null) {
        throw new Error("No god found with that name");
    } else {
        res.send(god);
    }
})

recordRoutes.route("/items/").get(async (req, res) => {
    const db = await getDB();

    const items =  db.collection<Item>("items")
    .find({})
    .toArray();

    res.send(items);
});

export { recordRoutes };