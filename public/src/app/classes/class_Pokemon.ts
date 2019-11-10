
class Poke {
    val: number;
    name: string;
    arrayOfAbilities: string[];
    constructor(valueP: number) {
        this.val = valueP;
    }

    addAbility(str_ability: string) {
        this.arrayOfAbilities.push(str_ability);
    }
}
export { Poke }