
import Moodinput from '@/components/Moodinput';
import  { useState } from 'react';
import Moodoutput from '@/components/Moodoutput';

function Home() {
    const [mood, setMood] = useState('');
    const [subject, setSubject] = useState('');
    const [footer, setFooter] = useState('');
    const [generated, setGenerated] = useState(false);
    const handlegenerate=()=>{
        const lowerMood=mood.toLowerCase();
        if(lowerMood.includes("happy")){
            setSubject("Feeling Great Today !");
            setFooter("stay awesome");
        }else if (lowerMood.includes('sad')){
            setSubject("Just another tough day...")
            setFooter("sending 🫂")
        }else if (lowerMood.includes("angry")){
            setSubject("Time to cool bro .....")
            setFooter("just chil and listen the let me sing a kutty story...🎧")

        }else{
            setSubject("Mood Updaate")
            setFooter("Bye my boy ")
        }
        setGenerated(true)
    }
    const handlereset=()=>{
        setMood('');
        setSubject('');
        setFooter('');
        setGenerated(false);
    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Mood Mail Generator
            </h2>
            {!generated? (
            <Moodinput
                mood={mood} setMood={setMood}
                onGenerateMood={handlegenerate}
                disabled={generated}
            />):<Moodoutput subject={subject} footer={footer} onreset={handlereset}></Moodoutput>}
            
        </div>

    );
}

export default Home;
