import Button from "../components/Button";
import ScrollButton from "../components/ScrollButton";
import OutlineText from "../components/OutlineText";
import Feature from "../components/Feature";
import Track from "../components/Track";
import PseudoGameEngine from "../components/PseudoGameEngine";
import AIMLAgent from "../components/AIMLAgent";
import quotecat from "../assets/quotecat.png";
import musiccat from "../assets/musiccat.png";
import sagacat from "../assets/sagacat.png";
import talkingcats from "../assets/talkingcats.png";
import constructioncat from "../assets/constructioncat.png";
import seriouslygraphical from "../assets/seriouslygraphical.png";
import awesomeadventure from "../assets/awesomeadventure.png";
import fish from "../assets/fish.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero3D from "../components/Hero3D";

function Hero() {
  return (
    <>
      {/* SAGA */}
      <div className="w-2 h-2 bg-grey absolute top-32 left-48"></div>
      <div className="w-3 h-3 bg-grey absolute top-40 left-24"></div>
      <div className="w-4 h-4 bg-grey absolute top-16 left-16"></div>
      <div className="flex flex-col items-center justify-center py-32 relative">
        <Hero3D />
        <div className="text-grey font-bold -mb-8">
          {" "}
          SERIOUSLY AWESOME GRAPHICAL ADVENTURE{" "}
        </div>
        <div
          className="text-blue font-bold drop-shadow-lg"
          style={{ fontSize: 230 }}
        >
          {" "}
          SAGA{" "}
        </div>
        <div className="flex gap-12 z-50">
          <ScrollButton
            text="WHY SAGA"
            bgColor="beige"
            bgHoverColor="grey"
            textColor="blue"
            textHoverColor="beige"
            outlineColor="blue"
            link="#why-saga"
          />
          <ScrollButton
            text="CHAPTERS"
            bgColor="beige"
            bgHoverColor="grey"
            textColor="blue"
            textHoverColor="beige"
            outlineColor="blue"
            link="#chapters"
          />
          <ScrollButton
            text="GET STARTED"
            bgColor="blue"
            bgHoverColor="grey"
            textColor="beige"
            textHoverColor="beige"
            outlineColor="blue"
            link="#get-started"
          />
          <Button
            text="GITHUB REPO"
            bgColor="beige"
            bgHoverColor="grey"
            textColor="blue"
            textHoverColor="beige"
            outlineColor="blue"
            link="https://github.com/datowq/saga"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-blue border-r-[200px] border-r-transparent">
          {" "}
        </div>
      </div>

      {/* WHY SAGA */}
      <section
        id="why-saga"
        className="bg-blue text-beige pt-16 pb-52 relative"
      >
        <img
          src={seriouslygraphical}
          className="absolute bottom-0 right-0 pointer-events-none w-72"
        />
        {/* <OutlineText word1="SERIOUSLY" word2="AWESOME" color="beige" /> */}
        <div className="beige-text-outline"> SERIOUSLY </div>
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
              <div className="font-bold text-2xl pb-2">
                {" "}
                GENERAL DESCRIPTION{" "}
              </div>
              <div>
                SAGA is the joint effort of cat-lovers to teach people how to
                make cool games.
              </div>
            </div>
            <div>
              <div className="font-bold text-2xl pb-2"> FEATURES </div>
              <div className="flex flex-col gap-8">
                <div className="flex gap-8 z-10">
                  <Feature
                    icon={fish}
                    name="A GRAPHICAL ADVENTURE"
                    description="Our Jupyter notebook-like interface and live demos allow you to learn by doing, with helpful comments and immediate visual feedback on your code."
                  />
                  <Feature
                    icon={fish}
                    name="BALLER CODE EDITOR"
                    description="Take advantage of our built-in code editor that will allow you to write and test your own THREE.js scripts as you work through the curriculum."
                  />
                  <Feature
                    icon={fish}
                    name="THREE.JS LIVE DEMOS"
                    description="Learn to use the super cool and increasingly popular THREE.js library to create 3D works in your browser."
                  />
                </div>
                <div className="flex gap-8 z-10">
                  <Feature
                    icon={fish}
                    name="RAPIER PHYSICS ENGINE"
                    description="Bring your THREE.js objects to life with the help of the fast, lightweight Rapier physics engine."
                  />
                  <Feature
                    icon={fish}
                    name="AI/ML"
                    description="Learn how to integrate LLM-powered non-player characters into your game, providing original and endless dialogs with minimal pre-directives."
                  />
                  <Feature
                    icon={fish}
                    name="CATS"
                    description="Lots of cats. And ballers???"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-2xl pb-2"> TECHNOLOGIES USED </div>
              <div>
                {" "}
                React.js, Three.js, React Three Fiber, React Three Drei, React
                Three Rapier, Google AI Gemini API, WebGL{" "}
              </div>
            </div>
          </div>
          <img
            src={quotecat}
            width={500}
            className="absolute right-10 bottom-4"
          />
          <div className="absolute right-72 bottom-36 text-grey text-xl">
            {" "}
            "i love ballers" - jenna{" "}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-beige border-r-[200px] border-r-transparent">
          {" "}
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="chapters" className="text-blue pt-16 pb-32 relative">
        <img
          src={awesomeadventure}
          className="absolute top-0 right-0 pointer-events-none w-72"
        />
        <div className="absolute top-6 left-2/3 flex flex-col gap-8">
          <div className="w-2 h-2 bg-grey"></div>
          <div className="w-2 h-2 bg-grey"></div>
        </div>
        <div className="flex items-center gap-4 left-0">
          <div className="w-32 h-2 bg-blue"></div>
          <div className="font-bold"> 02: CURRICULUM </div>
        </div>
        <div className="px-36">
          <div className="font-bold text-8xl leading-none mb-8"> CHAPTERS </div>
          <Tabs defaultValue="pge">
            <TabsList>
              <TabsTrigger value="pge">PSEUDO GAME ENGINE</TabsTrigger>
              <TabsTrigger value="aimla">
                NON-PLAYER CHARACTERS USING LLMs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pge">
              <PseudoGameEngine />
            </TabsContent>
            <TabsContent value="aimla">
              <AIMLAgent />
            </TabsContent>
          </Tabs>
        </div>
        <img src={musiccat} width={300} className="absolute bottom-0 right-8" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-blue border-r-[200px] border-r-transparent">
          {" "}
        </div>
      </section>

      {/* GET STARTED */}
      <section
        id="get-started"
        className="bg-blue text-beige pt-16 pb-12 relative"
      >
        {/* BOTTOM LEFT */}
        <div className="flex flex-col gap-8 absolute bottom-40 left-16">
          <div className="w-2 h-2 bg-grey"></div>
          <div className="w-2 h-2 bg-beige"></div>
        </div>
        {/* TOP RIGHT */}
        <div className="flex gap-8 absolute top-32 right-16">
          <div className="w-2 h-2 bg-beige"></div>
          <div className="w-2 h-2 bg-grey"></div>
          <div className="w-2 h-2 bg-beige"></div>
        </div>
        {/* BOTTOM RIGHT */}
        <div className="flex flex-col gap-8 absolute bottom-12 right-16">
          <div className="w-2 h-2 bg-grey"></div>
          <div className="w-2 h-2 bg-beige"></div>
          <div className="w-2 h-2 bg-grey"></div>
          <div className="w-2 h-2 bg-beige"></div>
        </div>
        {/* CONTENT */}
        <div className="flex items-center gap-4 left-0">
          <div className="w-32 h-2 bg-beige"></div>
          <div className="font-bold"> 03: SEE THE TRACKS </div>
        </div>
        <div className="px-36">
          <div className="font-bold text-8xl leading-none"> GET STARTED </div>
          <div className="flex m-16 justify-between">
            <Track
              name="PSEUDO GAME ENGINE"
              image={sagacat}
              description="Learn how to implement a very basic 3D game engine and become a true gamer."
              buttonText="BEGIN CONQUEST"
              buttonLink="/npc"
            />
            <Track
              name="AI/ML AGENTS"
              image={talkingcats}
              description="Incorporate LLM-powered characters into the games you create. Watch the fun!"
              buttonText="START TRAINING"
              buttonLink="/npc"
            />
            <Track
              name="COMING SOON"
              image={constructioncat}
              description="Our next lesson plan is currently in the works. Stay tuned... :3"
              buttonText="BROKEN BUTTON"
              buttonLink="#"
            />
          </div>
        </div>
      </section>

      {/* CREDITS */}
      <div className="bg-grey text-beige font-bold flex justify-center py-6">
        CREATED BY THE SAGA TEAM
      </div>
    </>
  );
}

export default Hero;
