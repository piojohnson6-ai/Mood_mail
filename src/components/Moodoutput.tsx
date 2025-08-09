import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
type Props ={
        subject:string,
        footer:string,
        onreset:()=>void
    }
const Moodoutput = ({subject,footer,onreset}: Props) => {
    return (
        <div className="space-y-4">
            <div>
                <label className="block front-medium">Subject</label>
                <Input value={subject} readOnly></Input>
            </div>
            <div>
                <label className="block front-medium">Footer signature</label>
                <Textarea value={footer} readOnly/>
            </div>
            <Button variant='destructive' className="w-full" onClick={onreset}>Reset</Button>
        </div>

    )
}

export default Moodoutput
