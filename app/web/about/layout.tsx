import { Header } from "@components/Header"

export default function PostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <Header/>
       {children}
      </>
    )
  }