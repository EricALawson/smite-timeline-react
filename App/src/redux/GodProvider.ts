
import { God } from "@smite-timeline/smite-game-objects";
import { Ares, Cerberus } from "../data_objects/TestObjects";

class GodProvider {
    //Singleton boilerplate
    private static instance: GodProvider;

    static getInstance(): GodProvider {
        if (!GodProvider.instance) {
            GodProvider.instance = new GodProvider();
        }
        return GodProvider.instance;
    }

    //class code
    private gods: Map<string, God>;

    private constructor() {
        this.gods = new Map<string, God>();
    }

    async getGodNames(): Promise<string[]> {
        //return Array.from(this.gods.keys());
        axios.get({`https://localhost:5000/godnames`})
    }

    async getGod(name: string): Promise<God|undefined> {
        return this.gods.get(name);
    }
}

export default GodProvider;