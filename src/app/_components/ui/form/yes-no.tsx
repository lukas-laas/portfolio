import { Header4 } from "../typography";

export function YesNo({question, name, required}:{question:string, name:string, required?: boolean}){
    return(
        <div className="py-2">
            <Header4>{question}</Header4>
            <div className="flex gap-4">
                <label>
                    <input type="radio" name={name} value="yes" required={required} /> Yes
                </label>
                <label>
                    <input type="radio" name={name} value="no" /> No
                </label>
            </div>
        </div>
    )
}