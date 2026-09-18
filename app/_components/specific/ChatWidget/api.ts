import { Language } from "@/app/types";

export const CHAT_API_URL = "https://api.shamsoquvmarkaz.uz";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  data: T;
}

export const sendChatMessage = async (
  message: string,
  history: ChatMessage[],
  language: Language,
): Promise<string> => {
  const response = await fetch(`${CHAT_API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history, language }),
  });

  const payload: ApiEnvelope<{ reply: string }> = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "So'rovda xatolik yuz berdi");
  }

  return payload.data.reply;
};
