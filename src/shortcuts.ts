const addShortcuts = (modifier: "ctrl" | "alt" | "shift", keys: string[]) => {
    console.log("Shortcuts utils loaded");

    return (e: KeyboardEvent, callback: Function) => {
        const modifierPressed =
            modifier === "ctrl"
                ? e.ctrlKey
                : modifier === "alt"
                ? e.altKey
                : e.shiftKey;

        const combinationPressed = keys.every((key) => e.key === key);

        if (modifierPressed && combinationPressed) {
            e.preventDefault();
            callback();
        }
    };
};

export default addShortcuts;
