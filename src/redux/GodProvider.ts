import God from "../data_objects/God";
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
    private gods = new Map<string, God>();

    private constructor() {
        this.gods.set('Ares', Ares);
        this.gods.set('Cerberus', Cerberus)
    }

    get godNames(): string[] {
        return Array.from(this.gods.keys());
    }

    getGod(name: string): God|undefined {
        return this.gods.get(name);
    }
}

export default GodProvider;