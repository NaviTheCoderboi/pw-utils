const usePollAnswerUtils = (pollSidebar: HTMLDivElement) => {
    console.log("Poll answer utils loaded");

    const optionHandler = (e: KeyboardEvent) => {
        const optionElementList = document.querySelector<HTMLDivElement>(
            "#root > div > div.relative > div > div.transition-all.duration-200.w-0.bg-white.h-full.z-\\[1\\].animate-in.slide-in-from-right.w-\\[300px\\].lg\\:w-\\[440px\\] > div > div.overflow-y-scroll.scrollbar-hide.pb-4.h-\\[calc\\(100vh-7rem\\)\\] > div:nth-child(1) > div > div.sm\\:landscape\\:grid.sm\\:landscape\\:grid-cols-2.w-full.sm\\:landscape\\:gap-\\[8px\\].lg\\:landscape\\:flex.flex-col.lg\\:landscape\\:gap-\\[12px\\]"
        )!;

        if (e.key === "a") {
            const optionA = optionElementList.querySelector<HTMLButtonElement>(
                "div:nth-child(1) > button"
            );

            if (!optionA) {
                alert("Option A button not found");
                return;
            }

            optionA.click();
        } else if (e.key === "b") {
            const optionB = optionElementList.querySelector<HTMLButtonElement>(
                "div:nth-child(2) > button"
            );

            if (!optionB) {
                alert("Option B button not found");
                return;
            }

            optionB.click();
        } else if (e.key === "c") {
            const optionC = optionElementList.querySelector<HTMLButtonElement>(
                "div:nth-child(3) > button"
            );

            if (!optionC) {
                alert("Option C button not found");
                return;
            }

            optionC.click();
        } else if (e.key === "d") {
            const optionD = optionElementList.querySelector<HTMLButtonElement>(
                "div:nth-child(4) > button"
            );

            if (!optionD) {
                alert("Option D button not found");
                return;
            }

            optionD.click();
        } else if (e.key === "Enter") {
            const submitButton = document.querySelector<HTMLButtonElement>(
                "#root > div > div.relative > div > div.transition-all.duration-200.w-0.bg-white.h-full.z-\\[1\\].animate-in.slide-in-from-right.w-\\[300px\\].lg\\:w-\\[440px\\] > div > div.overflow-y-scroll.scrollbar-hide.pb-4.h-\\[calc\\(100vh-7rem\\)\\] > div.flex.items-center.justify-center.absolute.bottom-2.w-full.max-w-\\[360px\\].tablet\\:max-w-\\[268px\\].lg\\:max-w-\\[408px\\] > button"
            );

            if (!submitButton) {
                alert("Submit button not found");
                return;
            }

            submitButton.click();
        }
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                if (pollSidebar.children.length > 0) {
                    window.addEventListener("keydown", optionHandler, false);
                } else {
                    window.removeEventListener("keydown", optionHandler, false);
                }
            }
        });
    });

    observer.observe(pollSidebar, { childList: true });
};

export default usePollAnswerUtils;
