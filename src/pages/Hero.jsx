import Button from "../components/Button";
import Feature from "../components/Feature";
import quotecat from "../assets/quotecat.png";
import fish from "../assets/fish.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Hero() {
    return (
        <>
            {/* SAGA */}
            <div className="flex flex-col items-center justify-center py-32">
                <div className="text-grey font-bold -mb-8"> SUPER AWESOME GRAPHICAL ADVENTURE </div>
                <div className="text-blue font-bold" style={{fontSize: 230}}> SAGA </div>
                <div className="flex gap-12">
                    <Button text="WHY SAGA" bgColor="beige" bgHoverColor="grey" textColor="blue" textHoverColor="beige" outlineColor="blue" link="#why-saga" />
                    <Button text="CHAPTERS" bgColor="beige" bgHoverColor="grey" textColor="blue" textHoverColor="beige" outlineColor="blue" link="#chapters" />
                    <Button text="GET STARTED" bgColor="beige" bgHoverColor="grey" textColor="blue" textHoverColor="beige" outlineColor="blue" link="#get-started" />
                    <Button text="GITHUB REPO" bgColor="beige" bgHoverColor="grey" textColor="blue" textHoverColor="beige" outlineColor="blue" link="https://github.com/datowq/saga" />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-blue border-r-[200px] border-r-transparent"> </div>
            </div>

            {/* WHY SAGA */}
            <section id="why-saga" className="bg-blue text-beige pt-12 pb-64 relative">
                <div className="flex items-center gap-4 left-0">
                    <div className="w-32 h-2 bg-beige"></div>
                    <div className="font-bold"> 01: ABOUT THIS PROJECT </div>
                </div>
                <div className="px-36">
                    <div className="flex items-center gap-10">
                        <div className="font-bold text-8xl leading-none"> WHY SAGA </div>
                        <div className="w-2 h-2 bg-beige"></div>
                        <div className="w-2 h-2 bg-beige"></div>
                    </div>
                    <div className="flex flex-col gap-12 pt-8">
                        <div>
                            <div className="font-bold text-2xl pb-2"> GENERAL DESCRIPTION </div>
                            <div> Lorem Ipsum. </div>
                        </div>
                        <div>
                            <div className="font-bold text-2xl pb-2"> FEATURES </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-8">
                                    <Feature icon={fish} name="INTERACTIVE LEARNING" description="Lorem Ipsum." />
                                    <Feature icon={fish} name="PHYSICS ENGINE" description="Lorem Ipsum." />
                                    <Feature icon={fish} name="SHADERS" description="Lorem Ipsum." />
                                </div>
                                <div className="flex gap-8">
                                    <Feature icon={fish} name="CODE EDITOR" description="Lorem Ipsum." />
                                    <Feature icon={fish} name="AI/ML" description="Lorem Ipsum." />
                                    <Feature icon={fish} name="PHYSICS ENGINE" description="Lorem Ipsum." />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-2xl pb-2"> TECHNOLOGIES USED </div>
                            <div> Lorem Ipsum. </div>
                        </div>
                    </div>
                    <img src={quotecat} width={500} className="absolute right-10" />
                    <div className="absolute right-72 bottom-36 text-grey text-xl"> "some slur" - andy </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-beige border-r-[200px] border-r-transparent"> </div>
            </section>

            {/* CHAPTERS */}
            <section id="chapters" className="text-blue pt-12 pb-32 relative">
                <div className="flex items-center gap-4 left-0">
                    <div className="w-32 h-2 bg-blue"></div>
                    <div className="font-bold"> 02: CURRICULUM </div>
                </div>
                <div className="px-36">
                    <div className="font-bold text-8xl leading-none"> CHAPTERS </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-beige border-r-[200px] border-r-transparent"> </div>
            </section>

            {/* GET STARTED */}
            <section id="get-started">

            </section>

        </>
    )
}
  
export default Hero;
  