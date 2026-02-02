"use client"
import { FormEvent } from "react";
import { Header1, YesNo, TextInput, TextArea, Section, Header4 } from "../_components/ui";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const formValues: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
            formValues[key] = value as string;
        }
        console.log('Form values:', formValues);

        try {

            const response = await fetch('/api/sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData: formValues
                })
            });

            const result = await response.json();
            console.log('SMS result:', result);

            router.push("/")

        } catch (error) {
            console.error('error:', error);
            alert('Submission failed! (please reach out by email or sms, im so sorry)');
        }
    }
  return (
    <main className="flex max-h-full flex-col justify-center md:flex-row h-full items-center gap-4 bg-bg">
        <Section className="max-w-3xl">
            <div className="text-text">
            <form onSubmit={onSubmit} className="bg-bg2 p-4 rounded-md">
                <Header1>Want to hire me?</Header1>
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
                    <legend><Header4>Contact Information*</Header4></legend>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required className="p-1 border m-2 rounded text-bg w-full" />
                    </div>
                </fieldset>
                
                <button type="submit" className="relative rounded bg-textAccent py-1 px-2 text-fuchsia-100 text-2xl transition-all duration-300 overflow-hidden hover:shadow-lg group m-1">
                    <span className="relative z-10">Submit</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </button>
            </form>
            </div>
        </Section>
    </main>
  );
}