import usePollAnswerUtils from "./pollAnswer";
import addShortcuts from "./shortcuts";

const usePollUtils = (
    modifier: "ctrl" | "alt" | "shift",
    shortcut: string[]
) => {
    console.log("Poll utils loaded");

    const pollBtn = document.querySelector<HTMLDivElement>(
        "div.cursor-pointer.hover\\:scale-110.duration-200.transition-all.flex.flex-col.items-center.justify-center"
    );
    const pollSidebar = document.querySelector<HTMLDivElement>(
        "#root > div > div.relative > div > div.transition-all.duration-200.bg-white.h-full.z-\\[1\\]"
    );

    if (!pollBtn || !pollSidebar) {
        alert("Poll button or sidebar not found");
        return;
    }

    const path = pollBtn.querySelector<SVGPathElement>("svg > path");
    const watchColor = "#5A4BDA";

    if (!path) {
        alert("Poll button path not found");
        return;
    }

    const listener = addShortcuts(modifier, shortcut);

    window.addEventListener("keydown", (e) => {
        listener(e, () => {
            pollBtn.click();
        });
    });

    usePollAnswerUtils(pollSidebar);

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
                const { fill } = path.attributes as NamedNodeMap & {
                    fill: Attr | undefined;
                };
                if (fill && fill.value === watchColor) {
                    if (pollSidebar.children.length === 0) {
                        pollBtn.click();
                    }
                }
            }
        });
    });

    observer.observe(path, { attributes: true });
};

export default usePollUtils;
