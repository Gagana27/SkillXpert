import { CommentContext } from "../context/CommentContext"
import { useContext } from "react"

export const CommentContextHook=()=>{
    const context=useContext(CommentContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
      }
      return context
}
