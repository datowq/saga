const Feature = ({ icon, name, description }) => {
    return (
        <div className="flex flex-col w-1/3">
            <div className="flex items-center gap-4 bg-grey px-2 py-2">
                <img src={icon} width={30} />
                <div className="font-bold"> {name} </div>
            </div>
            <div className="bg-beige text-grey p-4 min-h-32">{description}</div>
        </div>
    );
};

export default Feature;