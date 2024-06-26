import Button from "./Button";

const Track = ({ name, image, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="font-bold bg-grey px-4 py-2">{name}</div>
      <img src={image} width={250} />
      <div className="max-w-[200px] text-center">{description}</div>
      <Button
        text={buttonText}
        bgColor="blue"
        bgHoverColor="beige"
        textColor="beige"
        textHoverColor="grey"
        outlineColor="beige"
        outlineHoverColor="grey"
        link={buttonLink}
      />
    </div>
  );
};

export default Track;
