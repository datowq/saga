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
                <AccordionTrigger>INTRO TO GAME DEV</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>WEBGL, WEBGPU</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>PHYSICS ENGINE</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>THREE.JS</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>INTERACTION</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default PseudoGameEngine;