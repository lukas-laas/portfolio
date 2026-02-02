import { Header4 } from "../typography";

export function TextInput({label, name, placeholder, required}: {label: string, name: string, placeholder?: string, required?: boolean}) {
    return (
        <div className="py-2">
            <label htmlFor={name}>
                <Header4>{label}</Header4>
            </label>
            <br />
            <input 
                type="text" 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                required={required}
                className="p-2 border rounded"
            />
        </div>
    )
}