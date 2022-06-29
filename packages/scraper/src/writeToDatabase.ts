import { ParseResult } from './ScrapeTarget';
import { smiteTimelineDatabase } from './getMongoClient';
import { Db } from 'mongodb';

export async function writeToDatabase(parseResult: ParseResult | Error): Promise<ParseResult | Error> 
{
    if (parseResult instanceof Error)
        return parseResult;
        let db: Db | undefined;
    try {
        db = await smiteTimelineDatabase();
        const rawHTMLCollection = db.collection("wiki-scraper-raw");
        const updateHTMLResult = await rawHTMLCollection.updateOne(
            {
                name: parseResult.name,
                type: parseResult.type
            }, 
            { $set: { html: parseResult.html } },
            { upsert: true }
        );
        const {name, ...rest} = parseResult.parseResult;
        let collection = db.collection(parseResult.type + "s");
        const updateParsedResult = await collection.updateOne(
            { name: parseResult.name }, 
            { 
                $set: rest, 
            },
            { upsert: true }
        );
        if (updateParsedResult.matchedCount < 1) {
            throw new Error('a write operation failed');
        }
    } catch (err) {
        return err; 
    }
    return parseResult;
}
 