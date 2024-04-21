import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Markdown from "./Markdown";
import SquareButton from "./SquareButton";
import { useEffect, useState } from "react";

const MarkdownButton = () => {
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
                    <DialogHeader>
                        <Markdown />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        ) : null)
        
    );
};

export default MarkdownButton;