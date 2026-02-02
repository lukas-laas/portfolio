"use client"
import { FormEvent } from "react";
import { Header1, SummarySection, YesNo, TextInput, TextArea } from "../_components/ui";

export default function Contact() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const formValues: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
            formValues[key] = value as string;
        }
        console.log('Form values:', formValues);
    }
  return (
    <main className="flex max-h-full flex-col justify-center md:flex-row h-full items-center gap-4 bg-bg2">
        <SummarySection>
            <Header1>Want to hire me?</Header1>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Questions</legend>
                    <YesNo question="Are you/your company using AI to filter candidates?*" name="ai" required/>
                    
                    <TextInput 
                        label="What's the official team snack for debugging?" 
                        name="snack" 
                        placeholder="pizza, fruit, candy..." 
                    />
                    
                    <TextArea 
                        label="What would be an ideal candidate?" 
                        name="ideal" 
                    />
                    
                    <TextArea 
                        label="What tech stack would I be working with?" 
                        name="techStack" 
                        placeholder="React, Node.js, Python, AWS..." 
                    />
                    
                    <TextArea 
                        label="If you could time travel to fix one of your companys tech mistakes, what would it be?" 
                        name="timeTravel" 
                        placeholder="not give the intern DB access..." 
                    />
                    
                    <TextArea 
                        label="What tasks would I be assigned?" 
                        name="tasks" 
                        placeholder="rontend development, API design, database management..." 
                    />
                    
                    <TextArea 
                        label="What kind of projects would I work on?" 
                        name="projects" 
                        placeholder="e-commerce, mobile app, dashboard..." 
                    />

                    <YesNo question="Would you hire me if I was a worm?*" name="worm" required/>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required className="p-2 border rounded" />
                    </div>
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </SummarySection>
    </main>
  );
}