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

const CodeEditorButton = () => {
    return (
        <Dialog defaultOpen>
            <DialogTrigger>PRESS TAB</DialogTrigger>
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
    );
};

export default CodeEditorButton;