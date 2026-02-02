"use client"
import { FormEvent } from "react";
import { Header1, SummarySection } from "../_components/ui";

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
                    <div>
                        <p>Are you/your company using AI to filter candidates?*</p>
                        <label>
                            <input type="radio" name="ai" value="yes" required /> Yes
                        </label>
                        <label>
                            <input type="radio" name="ai" value="no" /> No
                        </label>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="snack">What's the official team snack for debugging?</label>
                        <input type="text" name="snack" id="snack" placeholder="pizza, fruit, candy..." />
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="ideal">What would be an ideal candidate?</label>
                        <br />
                        <textarea name="ideal" id="ideal"></textarea>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="techStack">What tech stack would I be working with?</label>
                        <br />
                        <textarea name="techStack" id="techStack" placeholder="React, Node.js, Python, AWS..."></textarea>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="timeTravel">If you could time travel to fix one of your companys tech mistakes, what would it be?</label>
                        <br />
                        <textarea name="timeTravel" id="timeTravel" placeholder="not give the intern DB access..."></textarea>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="tasks">What tasks would I be assigned?</label>
                        <br />
                        <textarea name="tasks" id="tasks" placeholder="rontend development, API design, database management..."></textarea>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="projects">What kind of projects would I work on?</label>
                        <br />
                        <textarea name="projects" id="projects" placeholder="e-commerce, mobile app, dashboard..."></textarea>
                    </div>

                    <div>
                        <p>Would you hire me if I was a worm?*</p>
                        <label>
                            <input type="radio" name="worm" value="yes" required /> Yes
                        </label>
                        <label>
                            <input type="radio" name="worm" value="no" /> No
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </SummarySection>
    </main>
  );
}