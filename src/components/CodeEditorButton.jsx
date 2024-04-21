import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CodeEditor from "./CodeEditor";
import SquareButton from "./SquareButton";
import { useEffect, useState } from "react";

const CodeEditorButton = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open);
    }, [open]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "q") {
                setOpen(!open);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        (open ? (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <div className="flex gap-6 mb-6">
                        <SquareButton text="01" link="" />
                        <SquareButton text="02" link="" />
                        <SquareButton text="03" link="" />
                    </div>
                    <DialogHeader>
                        <CodeEditor />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        ) : null)
        
    );
};

export default CodeEditorButton;