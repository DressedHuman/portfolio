import { useEffect, useRef } from "react";

export interface Props {
    label: string;
    progress: number;
    progressColor: string;
    bgColor: string;
};

const ProgressBar = ({ label, progress, progressColor, bgColor }: Props) => {
    const progressBarRef = useRef(null);

    // animate function for the progressbar
    const animateProgressBar = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            const progressBar = entry.target as HTMLDivElement;
            if (entry.isIntersecting) {
                progressBar.style.width = `${progress}%`;
            }
            else {
                progressBar.style.width = "0%";
            }
        })
    }

    // initializing the observer
    const observer = new IntersectionObserver(animateProgressBar, {
        root: null,
        threshold: 0.35,
    });

'['
    useEffect(() => {
        const progressBar = progressBarRef.current!;
        observer.observe(progressBar);
    }, [label, progress]);

    return (<>
        {/* progressbar */}
        < div
            className={`w-full flex justify-center items-center p-5 rounded-full`
            }
            style={{ backgroundColor: `${bgColor || 'rgb(55,65,81)'}` }}
        >
            <div
                className={`h-[7px] w-full bg-[black] rounded-full relative`}
            >
                {/* the progress */}
                <div
                    ref={progressBarRef}
                    className={`absolute -top-[1px] -bottom-[1px] left-0 w-0 rounded-full duration-1000`}
                    style={{
                        backgroundColor: `${progressColor || 'goldenrod'}`,
                    }}
                >
                    <span
                        style={{
                            backgroundColor: `${progressColor || 'goldenrod'}`,
                            display: progress > 0 ? "" : "none",
                        }}
                        className='absolute top-0 bottom-0 right-0 aspect-square rotate-45 rounded-sm'
                    ></span>
                </div>
            </div>
        </div >
    </>
    );
};

export default ProgressBar;