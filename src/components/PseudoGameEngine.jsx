import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PseudoGameEngine = () => {
  return (
    <Accordion type="single" collapsible className="w-9/12">
      <AccordionItem value="item-1">
        <AccordionTrigger>SETTING UP BASIC THREE.JS SCENE</AccordionTrigger>
        <AccordionContent>
          Ever dreamt of creating immersive 3D worlds for the web? Three.js is a
          powerful JavaScript library that makes it easier than ever. With just
          a few lines of code, you can set up a basic scene with a camera and
          lighting, ready for you to populate with 3D objects and animations.
          This opens the door to all sorts of creative possibilities - from
          games and data visualization to interactive art installations. Time to
          embark on a seriously awesome graphical journey!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>PLAYER INPUT / MOVEMENT</AccordionTrigger>
        <AccordionContent>
          Want to bring your 3D creations to life? The next chapter of this
          Three.js lesson tackles player input and movement. Learn how to make
          your creations respond to user interaction. This essential skill
          unlocks a whole new level of engagement for your web-based 3D
          experiences!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>PHYSICS ENGINE</AccordionTrigger>
        <AccordionContent>
          Ready to add real-world physics to your Three.js scenes? The next
          chapter dives into React Three Fiber and Rapier, a powerful combo for
          simulating gravity, collisions, and other dynamic effects. Imagine
          making objects fall, bounce, and interact realistically – the
          possibilities for games, simulations, and interactive experiences are
          endless!
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-4">
        <AccordionTrigger></AccordionTrigger>
        <AccordionContent>Lorem Ipsum.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>INTERACTION</AccordionTrigger>
        <AccordionContent>Lorem Ipsum.</AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
};

export default PseudoGameEngine;
