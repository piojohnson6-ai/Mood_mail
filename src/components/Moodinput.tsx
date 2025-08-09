import { Input } from "./ui/input"
import { Button } from "./ui/button"

type Props = {
    mood:string
    setMood: (val: string) => void;
    onGenerateMood: () => void;
    disabled: boolean;
};

const Moodinput = ({ mood, setMood, onGenerateMood, disabled }: Props) => {
    return (
        <div className="space-y-4">
            <Input
                placeholder="How are you felling today ?(Happy,Sad,angry...)"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                disabled={disabled}
            />
            <Button className="w-full" onClick={onGenerateMood} disabled={disabled}>
                Generate Email Template
            </Button>
        </div>
    )
}

export default Moodinput
