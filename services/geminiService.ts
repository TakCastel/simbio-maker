import { GoogleGenAI, Type } from "@google/genai";
import { AVAILABLE_TRAITS, AVAILABLE_SKILLS, AVAILABLE_ASPIRATIONS, CAREER_ICONS } from "../constants";

export const generateSimProfile = async (description: string, currentProfile: any) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Construct lists for context
  const traitsList = AVAILABLE_TRAITS.map(t => t.name).join(", ");
  const skillsList = AVAILABLE_SKILLS.map(s => s.name).join(", ");
  const aspirationsList = AVAILABLE_ASPIRATIONS.map(a => a.name).join(", ");
  const careersList = CAREER_ICONS.map(c => c.name).join(", ");

  const prompt = `
    You are a Sims 4 profile generator. 
    Based on this user description: "${description}", 
    generate a JSON object to populate a Sims 4 character card.
    
    Choose 3-4 Traits from this list: ${traitsList}.
    Choose 4-6 Skills from this list: ${skillsList} and assign a level (1-10) based on the description.
    Choose 1-2 Aspirations from this list: ${aspirationsList}.
    Choose 1 Career from this list: ${careersList}.
    
    Also infer a first name and last name if mentioned, otherwise generate random ones fitting the vibe.
    Infer generation text (e.g. "1st Generation") if mentioned.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          firstName: { type: Type.STRING },
          lastName: { type: Type.STRING },
          generation: { type: Type.STRING },
          traits: { type: Type.ARRAY, items: { type: Type.STRING } },
          skills: { 
            type: Type.ARRAY, 
            items: { 
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                level: { type: Type.INTEGER }
              } 
            } 
          },
          aspirations: { type: Type.ARRAY, items: { type: Type.STRING } },
          career: { type: Type.STRING },
        }
      }
    }
  });

  const data = JSON.parse(response.text || "{}");

  // Map back to our internal objects
  const mappedTraits = data.traits.map((name: string) => AVAILABLE_TRAITS.find(t => t.name === name)).filter(Boolean);
  const mappedSkills = data.skills.map((s: any) => {
    const found = AVAILABLE_SKILLS.find(sk => sk.name === s.name);
    return found ? { ...found, level: s.level } : null;
  }).filter(Boolean);
  const mappedAspirations = data.aspirations.map((name: string) => AVAILABLE_ASPIRATIONS.find(a => a.name === name)).filter(Boolean);
  const mappedCareer = CAREER_ICONS.find(c => c.name === data.career) || { name: data.career, icon: '💼' };

  return {
    ...currentProfile,
    firstName: data.firstName || currentProfile.firstName,
    lastName: data.lastName || currentProfile.lastName,
    generation: data.generation || currentProfile.generation,
    traits: mappedTraits,
    skills: mappedSkills,
    aspirations: mappedAspirations,
    career: mappedCareer,
  };
};
