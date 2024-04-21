import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AIMLAgent = () => {
    return (
        <Accordion type="single" collapsible className="w-9/12">
            <AccordionItem value="item-1">
                <AccordionTrigger>USING AN API</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>CONNECTING THE API</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>INTERACTION</AccordionTrigger>
                <AccordionContent>
                    Lorem Ipsum.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AIMLAgent;