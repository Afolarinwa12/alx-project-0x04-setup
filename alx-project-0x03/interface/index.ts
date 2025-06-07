export interface PageRouteProps {
  pageRoute: string
}

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}
//interface for layout is in its own componente
export interface LayoutProps {
  children: ReactNode;
}