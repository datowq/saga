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
                <AccordionTrigger>SETTING UP THE LLM API</AccordionTrigger>
                <AccordionContent>
                    Our non-player characters are powered by the Google Gemini Pro API, which provides a very simple-to-setup interface with support for multi-turn conversations with existing history. What's more, the API si currently free to use, with a limited number of requests per month. We show the importance of setting up the chat history to give the right context to each model and achieve better response quality.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>HANDLING STATES AND REQUESTS/RESPONSES</AccordionTrigger>
                <AccordionContent>
                    In our LLM tutorial, we will show you how to implement an interaction with a non-player character, as well as a conversation between two different NPCs. The latter requires complex state handling and a good understanding of the API's capabilities, since a response from one model must be fed as input to the other, while keeping in mind that most of the code is asynchronous.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>RENDER A CONVERSATION ON SCREEN</AccordionTrigger>
                <AccordionContent>
                    We need a clean user interface to display the conversation and allow the user to interact with the NPCs. Just like in a real videogame, we show how to generate multiple suggested responses for the user to choose from, and thus influence the direction of the conversation. Furthermore, we also explain optimization techniques such as streaming that allows the conversation to be rendered instantaneously, without waiting for the entire result.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AIMLAgent;