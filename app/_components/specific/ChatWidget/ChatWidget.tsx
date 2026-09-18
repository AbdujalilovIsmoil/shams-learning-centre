"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { usePathname } from "next/navigation";
import { Language } from "@/app/types";
import { sendChatMessage, type ChatMessage } from "./api";
import { chatUiText } from "./data";
import {
  ChatFab,
  ChatFabBadge,
  ChatPanel,
  ChatHeader,
  ChatHeaderAvatar,
  ChatHeaderInfo,
  ChatOnlineDot,
  ChatCloseButton,
  ChatBody,
  ChatBubbleRow,
  ChatBubble,
  ChatTypingDots,
  ChatQuickActions,
  ChatQuickButton,
  ChatFooter,
  ChatTextarea,
  ChatSendButton,
} from "./style";

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l1.8 5.1 5.1 1.8-5.1 1.8-1.8 5.1-1.8-5.1-5.1-1.8 5.1-1.8L12 2.5z" />
    <path d="M19 15l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9L19 15z" opacity="0.7" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3 11 18-8-8 18-2-8-8-2Z" />
  </svg>
);

const ChatWidget = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;
  const text = chatUiText[language] || chatUiText.uz;
  const dir = language === "ar" ? "rtl" : "ltr";

  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isOpen, isSending]);

  useEffect(() => {
    if (!isOpen) return;

    const isFullscreen = window.matchMedia("(max-width: 768px)").matches;
    if (!isFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openChat = () => {
    setIsOpen(true);
    if (!hasOpenedOnce) {
      setHasOpenedOnce(true);
      setMessages([{ role: "assistant", content: text.greeting }]);
    }
  };

  const submitMessage = async (rawText: string) => {
    const value = rawText.trim();
    if (!value || isSending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: value }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const reply = await sendChatMessage(value, nextMessages.slice(0, -1), language);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: text.errorText }]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitMessage(input);
    }
  };

  return (
    <>
      {!isOpen && (
        <ChatFab
          type="button"
          $dir={dir}
          onClick={openChat}
          aria-label={text.title}
        >
          <ChatIcon />
          {!hasOpenedOnce && <ChatFabBadge />}
        </ChatFab>
      )}

      {isOpen && (
        <ChatPanel $dir={dir} dir={dir}>
          <ChatHeader>
            <ChatHeaderAvatar>
              <SparkleIcon />
            </ChatHeaderAvatar>
            <ChatHeaderInfo>
              <strong>{text.title}</strong>
              <span>
                <ChatOnlineDot />
                {text.subtitle}
              </span>
            </ChatHeaderInfo>
            <ChatCloseButton type="button" onClick={() => setIsOpen(false)} aria-label="close">
              <CloseIcon />
            </ChatCloseButton>
          </ChatHeader>

          <ChatBody ref={bodyRef}>
            {messages.map((msg, index) => (
              <ChatBubbleRow key={index} $isUser={msg.role === "user"}>
                <ChatBubble $isUser={msg.role === "user"}>{msg.content}</ChatBubble>
              </ChatBubbleRow>
            ))}

            {isSending && (
              <ChatBubbleRow $isUser={false}>
                <ChatTypingDots>
                  <span />
                  <span />
                  <span />
                </ChatTypingDots>
              </ChatBubbleRow>
            )}
          </ChatBody>

          {messages.length <= 1 && (
            <ChatQuickActions>
              {text.quickActions.map((action) => (
                <ChatQuickButton
                  key={action}
                  type="button"
                  onClick={() => submitMessage(action)}
                >
                  {action}
                </ChatQuickButton>
              ))}
            </ChatQuickActions>
          )}

          <ChatFooter onSubmit={handleSubmit}>
            <ChatTextarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={text.placeholder}
              disabled={isSending}
            />
            <ChatSendButton type="submit" disabled={isSending || !input.trim()}>
              <SendIcon />
            </ChatSendButton>
          </ChatFooter>
        </ChatPanel>
      )}
    </>
  );
};

export default ChatWidget;
