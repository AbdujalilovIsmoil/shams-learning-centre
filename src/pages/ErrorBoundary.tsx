import { Component, type ErrorInfo, type ReactNode } from "react";
import styled from "styled-components";
import { NotFoundTitle, NotFoundContent, NotFoundContainer } from "@/pages/NotFound/style";

const RetryButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 15px 30px;
  border-radius: 50px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.light};
  transition: color 150ms linear, background-color 150ms linear;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  @media only screen and (max-width: 576px) {
    font-size: 14px;
    padding: 10px 24px;
  }
`;

// Kutilmagan xatolik butun oq ekranni ko'rsatish o'rniga shu yumshoq xabarni
// chiqaradi va foydalanuvchiga qayta urinish imkonini beradi.
type Props = { children: ReactNode; resetKey?: string };
type State = { error: Error | null };

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  componentDidUpdate(prev: Props) {
    // boshqa sahifaga o'tilganda xatolik holati tozalanadi
    if (this.state.error && prev.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <NotFoundContainer>
        <div className="container">
          <NotFoundContent>
            <NotFoundTitle>Nimadir noto&apos;g&apos;ri ketdi</NotFoundTitle>
            <RetryButton type="button" onClick={() => this.setState({ error: null })}>
              Qayta urinish
            </RetryButton>
          </NotFoundContent>
        </div>
      </NotFoundContainer>
    );
  }
}

export default ErrorBoundary;
