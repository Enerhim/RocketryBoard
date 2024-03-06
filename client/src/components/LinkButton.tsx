import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface LinkButtonProps {
    to: string
    children: ReactNode
    bs_classes?: string
}

function LinkButton({to, children, bs_classes, ...props} : LinkButtonProps) {
  return (
    <Link to={to} {...props} className={"btn btn-outline-warning m-2 " + bs_classes}>
        {children}
    </Link>
  )
}

export default LinkButton