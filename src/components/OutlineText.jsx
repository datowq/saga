const OutlineText = ({word1, word2, color}) => {
    return (
        <>
            <div className={`text-9xl font-bold ${color}-text-outline z-0`}>
                <div className="absolute right-[200px] text-9xl outline-slide">
                    {word1}
                </div>
                <div className="absolute right-[200px] -bottom-32 text-9xl outline-slide-2">
                    {word1}
                </div>
                <div className="absolute right-[200px] -bottom-32 text-9xl outline-slide-3">
                    {word1}
                </div>
            </div>
            {/* <div className={`text-9xl font-bold ${color}-text-outline z-0`}>
                <div className="absolute right-[0] -bottom-32 text-9xl outline-slide">
                    {word2}
                </div>
                <div className="absolute right-[0] -bottom-32 text-9xl outline-slide-2">
                    {word2}
                </div>
                <div className="absolute right-[0] -bottom-32 text-9xl outline-slide-3">
                    {word2}
                </div>
            </div>
            <div className={`text-9xl font-bold ${color}-text-outline z-0`}>
                <div className="absolute right-[-240px] -bottom-32 text-9xl meow-slide">
                    MEOW&nbsp;&nbsp;MEOW
                </div>
                <div className="absolute right-[-240px] -bottom-32 text-9xl meow-slide-2">
                    MEOW&nbsp;&nbsp;MEOW
                </div>
                <div className="absolute right-[-240px] -bottom-32 text-9xl meow-slide-3">
                    MEOW&nbsp;&nbsp;MEOW
                </div>
            </div> */}
        </>
    );
};

export default OutlineText;